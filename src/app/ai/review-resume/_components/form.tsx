"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, FileText } from "lucide-react";
import React, { FormEventHandler, useRef, useState } from "react";

export default function WriteArticleForm() {
  const uploadedImg = useRef<HTMLInputElement | null>(null);
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(uploadedImg.current?.files);
  };
  const [uploaded, setUploaded] = useState<FileList | null>(null);

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
          accept=".pdf,.jpg,.png"
          type="file"
          className="mt-2 mb-4 hidden"
          onChange={() => {
            if (uploadedImg.current) setUploaded(uploadedImg.current?.files);
          }}
          required
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
        </div>
        <p className="text-[12px] text-zinc-400">Supports PDF, PNG, JPG formats</p>
        <Button
          type="submit"
          className="to-light-green-200 from-light-green-100 mt-5 flex w-full gap-4 bg-gradient-to-r"
        >
          <FileText size={20} /> Review Resume
        </Button>
      </form>
    </article>
  );
}
