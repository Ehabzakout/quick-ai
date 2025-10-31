"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { Hash, Sparkles } from "lucide-react";
import React from "react";
import useWriteTitle from "../hooks/use-write-article";
import Loading from "../../_components/loading";
import ErrorMessage from "../../_components/error-message";

export default function WriteArticleForm() {
  const { onSubmit, options, selected, setSelected, error, isPending, article, setArticle } =
    useWriteTitle();
  return (
    <article>
      <header className="flex items-center gap-3">
        <Sparkles color="#8E37EB" size={20} />
        <span className="text-lg font-medium">AI Title Generator</span>
      </header>
      <form onSubmit={onSubmit} className="mt-5">
        <label className="font-medium">Keyword</label>
        <Input
          placeholder="The future of artificial intelligence"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
          className="mt-2 mb-4"
          required
        />
        <label className="text-sm">Category</label>
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
          className="from-light-purple to-dark-purple mt-5 flex w-full gap-4 bg-gradient-to-r"
        >
          <Loading status={isPending}>
            <Hash /> Generate Title
          </Loading>
        </Button>
      </form>
    </article>
  );
}
