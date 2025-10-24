"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Image, Scissors, Eraser } from "lucide-react";
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
        <Sparkles color="#FF4938" size={20} />
        <span className="text-lg font-medium">Background Removal</span>
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
        <p className="text-[12px] text-zinc-400">Supports JPG, PNG, and other image formats</p>
        <Button
          type="submit"
          className="to-dark-orang from-light-orange mt-5 flex w-full gap-4 bg-gradient-to-r"
        >
          <Eraser size={20} /> Remove Background
        </Button>
      </form>
    </article>
  );
}
