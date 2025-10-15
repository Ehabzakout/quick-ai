import React from "react";
import { dummyTestimonialData } from "@assets/assets";
import Rating from "@/components/common/rating";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
function LovedBy() {
  return (
    <section>
      <h2 className="text-center text-5xl font-semibold">Loved by Creators</h2>
      <p className="mt-5 text-center leading-8 text-zinc-400">
        Don&apos;t just take our word for it. Here&apos;s what our
        <span className="block">users are saying.</span>
      </p>
      <article className="mx-auto mt-3 grid w-full grid-cols-1 gap-7 sm:grid-cols-[repeat(2,1fr)] lg:w-5/6 lg:sm:grid-cols-[repeat(3,1fr)]">
        {dummyTestimonialData.map((tool, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-zinc-50 p-5 shadow-xl transition-transform duration-200 hover:scale-[1.1] hover:transform"
          >
            <Rating rate={tool.rating} total={5} />

            <p className="my-5 h-32 text-zinc-400">{tool.content}</p>
            <Separator />
            <div className="mt-5 flex items-center gap-5">
              <Image src={tool.image} alt="Photo" className="size-10 rounded-full object-contain" />
              <div>
                <h5>{tool.name}</h5>
                <p>{tool.title}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default LovedBy;
