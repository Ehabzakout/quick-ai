"use client";
import { icons } from "@assets/assets";
import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
function ArticleCard() {
  const { data } = useQuery({
    queryKey: ["write-title"],
    queryFn: () => null,
  });
  return (
    <div className="h-96 pb-5">
      <div className="flex items-center gap-4 pb-3">
        {<icons.Hash size={20} color={"#8E37EB"} />}
        <h4 className="text-lg font-semibold">Generated Article</h4>
      </div>
      {!data ? (
        <div className="mx-auto mt-16 space-y-6">
          <icons.Hash size={40} color="#64748B80" className="mx-auto" />
          <p className="text-sm text-zinc-400">
            Enter keywords and click &quot;Generate Titles&quot; to get started
          </p>
        </div>
      ) : (
        <div className="h-full overflow-y-scroll px-2 py-5">
          <div className="reset-tw">
            <Markdown remarkPlugins={[remarkGfm]}>{data}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
