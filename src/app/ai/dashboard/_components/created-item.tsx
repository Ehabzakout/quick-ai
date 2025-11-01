"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
function CreatedItem({ ...prop }: Creation) {
  const [show, setShow] = useState(false);
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;

    if (show) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [show]);

  return (
    <div className="flex w-5/6 justify-between gap-3 rounded-lg bg-white p-5">
      <div>
        <h4 className="line-clamp-1 text-sm font-medium">{prop.prompt}</h4>
        <div
          ref={contentRef}
          data-show={show}
          className="h-0 overflow-hidden transition-all duration-300 data-[show=true]:my-5"
        >
          {prop.type === "image" ? (
            <Image
              src={prop.content}
              alt="photo"
              width={150}
              height={150}
              className="size-40 rounded-lg object-contain"
            />
          ) : (
            <Markdown>{prop.content}</Markdown>
          )}
        </div>
        <p className="text-sm text-zinc-400 capitalize">{prop.type}</p>
      </div>
      <Button
        className="w-20 rounded-full bg-blue-100 text-[12px] text-purple-900 hover:bg-blue-200"
        onClick={() => setShow(!show)}
      >
        {show ? "Close" : prop.type}
      </Button>
    </div>
  );
}

export default CreatedItem;
