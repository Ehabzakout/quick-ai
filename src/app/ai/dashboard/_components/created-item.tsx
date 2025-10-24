"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";

function CreatedItem({
  title,
  text,
  type,
  date,
}: {
  title: string;
  text: string;
  type: string;
  date: string;
}) {
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
    <div className="flex w-5/6 justify-between rounded-lg bg-white p-5">
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p
          ref={contentRef}
          data-show={show}
          className="h-0 overflow-hidden transition-all duration-300 data-[show=true]:my-5"
        >
          {text}
        </p>
        <p className="text-sm text-zinc-400 capitalize">
          {type} - {new Date(date).toDateString()}
        </p>
      </div>
      <Button
        className="w-20 rounded-full bg-blue-100 text-purple-900 hover:bg-blue-200"
        onClick={() => setShow(!show)}
      >
        {show ? "Close" : type}
      </Button>
    </div>
  );
}

export default CreatedItem;
