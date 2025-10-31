"use client";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Sparkles, Image } from "lucide-react";
import React from "react";
import useGenerateImage from "../hooks/use-generate-image";
import ErrorMessage from "../../_components/error-message";
import Loading from "../../_components/loading";

export default function WriteArticleForm() {
  const { error, isPending, selected, setSelected, article, setArticle, onSubmit, options } =
    useGenerateImage();

  return (
    <article>
      <header className="flex items-center gap-3">
        <Sparkles color="#00AD25" size={20} />
        <span className="text-lg font-medium">AI Image Generator</span>
      </header>
      <form onSubmit={onSubmit} className="mt-5">
        <label className="font-medium">Describe Your Image</label>
        <textarea
          className="focus:border-light-green mt-2 h-40 w-full resize-none rounded-md border px-5 py-3 outline-none"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        />
        <label className="text-sm">Style</label>
        <div className="mt-2 flex flex-wrap gap-3">
          {options.map((option, index) => (
            <Button
              type="button"
              key={index}
              onClick={() => setSelected(option)}
              variant={"outline"}
              className={cn(
                "h-fit rounded-full py-1 text-[10px] text-blue-500 hover:bg-blue-50",
                selected === option && "bg-blue-50",
              )}
            >
              {option}
            </Button>
          ))}
        </div>
        <ErrorMessage error={error} />
        <Button
          disabled={!article.length || isPending}
          type="submit"
          className="to-light-green from-dark-green mt-5 flex w-full gap-4 bg-gradient-to-r"
        >
          <Loading status={isPending}>
            <Image size={20} /> Generate Image
          </Loading>
        </Button>
      </form>
    </article>
  );
}
