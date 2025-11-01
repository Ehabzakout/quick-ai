"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Scissors, X } from "lucide-react";
import React from "react";
import useRemoveObject from "../hooks/use-remove-object";
import ErrorMessage from "../../_components/error-message";
import Loading from "../../_components/loading";
import { cn } from "@/lib/utils";

export default function WriteArticleForm() {
  const { uploaded, onSubmit, setUploaded, uploadedImg, isPending, error, object, setObject } =
    useRemoveObject();

  return (
    <article>
      <header className="flex items-center gap-3">
        <Sparkles color="#4A7AFF" size={20} />
        <span className="text-lg font-medium">Object Removal</span>
      </header>
      <form onSubmit={onSubmit} className="mt-5">
        <label className="font-medium">Upload Image</label>
        <input
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
              if (uploadedImg.current?.files) uploadedImg.current.files = null;
              setUploaded(null);
            }}
          >
            <X size={10} />
          </Button>
        </div>

        <label>Describe object to remove</label>
        <textarea
          placeholder="e.g., car in background, tree from the image"
          className="focus:border-blue mt-2 h-32 w-full resize-none rounded-md border px-5 py-3 text-[12px] outline-none"
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />
        <p className="text-[12px] text-zinc-400">Be specific about what you want to remove</p>
        <ErrorMessage error={error} />
        <Button
          disabled={!(object.length && uploaded && uploaded.length) || isPending}
          type="submit"
          className="to-dark-purple from-blue mt-5 flex w-full gap-4 bg-gradient-to-r"
        >
          <Loading status={isPending}>
            <Scissors size={20} /> Remove object
          </Loading>
        </Button>
      </form>
    </article>
  );
}
