"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, FileText, X } from "lucide-react";
import React from "react";
import useReviewResume from "../hooks/use-review-resume";
import { cn } from "@/lib/utils";
import ErrorMessage from "../../_components/error-message";
import Loading from "../../_components/loading";

export default function ReviewResume() {
  const { onSubmit, uploaded, uploadedImg, setUploaded, isPending, error } = useReviewResume();
  return (
    <article>
      <header className="flex items-center gap-3">
        <Sparkles color="##00DA83" size={20} />
        <span className="text-lg font-medium">Resume Review</span>
      </header>
      <form onSubmit={onSubmit} className="mt-5">
        <label className="font-medium">Upload Resume</label>
        <input
          ref={uploadedImg}
          accept=".pdf"
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
            type="button"
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
        <p className="text-[12px] text-zinc-400">Supports PDF only</p>
        <ErrorMessage error={error} />
        <Button
          disabled={!uploaded?.length || isPending}
          type="submit"
          className="to-light-green-200 from-light-green-100 mt-5 flex w-full gap-4 bg-gradient-to-r"
        >
          <Loading status={isPending}>
            <FileText size={20} /> Review Resume
          </Loading>
        </Button>
      </form>
    </article>
  );
}
