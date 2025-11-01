"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Sparkles, Eraser, X } from "lucide-react";
import React from "react";

import Loading from "../../_components/loading";
import useRemoveBackground from "../hooks/use-remove-image";
import ErrorMessage from "../../_components/error-message";

export default function WriteArticleForm() {
  const { error, isPending, uploaded, uploadedImg, onSubmit, setUploaded } = useRemoveBackground();

  return (
    <article>
      <header className="flex items-center gap-3">
        <Sparkles color="#FF4938" size={20} />
        <span className="text-lg font-medium">Background Removal</span>
      </header>
      <form onSubmit={onSubmit} className="mt-5">
        <label className="font-medium">Upload Image</label>
        <input
          name="uploadfile"
          ref={uploadedImg}
          accept="image/*"
          type="file"
          className="mt-2 mb-4 hidden"
          onChange={() => {
            if (uploadedImg.current) setUploaded(uploadedImg.current?.files);
          }}
        />
        <div className="relative h-fit">
          <Input
            className="mt-2 mb-4 h-10 w-full pl-28"
            value={uploaded ? uploaded[0]?.name : "No file Chosen"}
            readOnly
          />
          <Button
            type="reset"
            variant={"ghost"}
            className="absolute top-1/5 left-1 h-8"
            onClick={() => uploadedImg.current?.click()}
          >
            Choose File
          </Button>
          <Button
            type="button"
            variant={"ghost"}
            className={cn(
              "absolute -top-7 right-0 hidden size-fit rounded-full px-0",
              uploaded?.length && "block",
            )}
            onClick={() => {
              setUploaded(null);
              if (uploadedImg.current?.files) uploadedImg.current.files = null;
            }}
          >
            <X size={10} />
          </Button>
        </div>
        <p className="text-[12px] text-zinc-400">Supports JPG, PNG, and JPEG</p>
        <ErrorMessage error={error} />

        <Button
          disabled={uploaded?.length && uploaded?.length > 0 ? false : true || !isPending}
          type="submit"
          className="to-dark-orang from-light-orange mt-5 flex w-full gap-4 bg-gradient-to-r"
        >
          <Loading status={isPending}>
            <Eraser size={20} /> Remove Background
          </Loading>
        </Button>
      </form>
    </article>
  );
}
