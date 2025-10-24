"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Sparkles, SquarePen } from "lucide-react";
import React, { FormEventHandler, useState } from "react";

export default function WriteArticleForm() {
  const options = ["Short (200-400)", "Long (400-800)"];
  const [selected, setSelected] = useState(options[0]);
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <article>
      <header className="flex items-center gap-3">
        <Sparkles color="#3588f2" size={20} />
        <span className="text-lg font-medium">AI Article Writer</span>
      </header>
      <form onSubmit={onSubmit} className="mt-5">
        <label className="font-medium">Article Topic</label>
        <Input placeholder="The future of Artificial Intelligence" className="mt-1 mb-4" required />
        <label className="text-sm">Article Length</label>
        <div className="mt-2 flex gap-5">
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
        <Button
          type="submit"
          className="mt-5 flex w-full gap-4 bg-gradient-to-r from-blue-500 to-blue-400"
        >
          <SquarePen /> Generate Article
        </Button>
      </form>
    </article>
  );
}
