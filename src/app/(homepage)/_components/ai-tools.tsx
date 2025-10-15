import React from "react";
import { AiToolsData } from "@assets/assets";
import Link from "next/link";
function AiTools() {
  return (
    <section className="w-full">
      <h2 className="text-center text-5xl font-semibold">Powerful AI Tools</h2>
      <p className="mt-5 text-center leading-8 text-zinc-400">
        Everything you need to create, enhance, and optimize your content with
        <span className="block">cutting-edge AI technology.</span>
      </p>

      <article className="mt-3 grid w-full grid-cols-1 justify-center gap-7 sm:grid-cols-[repeat(2,300px)] lg:sm:grid-cols-[repeat(3,300px)]">
        {AiToolsData.map((tool, idx) => (
          <Link
            href={tool.path}
            key={idx}
            className="rounded-xl bg-zinc-50 p-5 shadow-xl transition-transform duration-200 hover:scale-[1.1] hover:transform"
          >
            <div
              className={`size-fit rounded-lg bg-gradient-to-b ${tool.bg.from} ${tool.bg.to} p-2`}
            >
              <tool.Icon width={20} height={20} color="white" />
            </div>

            <h4 className="my-3 text-lg font-semibold">{tool.title}</h4>
            <p className="text-zinc-400">{tool.description}</p>
          </Link>
        ))}
      </article>
    </section>
  );
}

export default AiTools;
