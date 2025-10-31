"use client";
import { icons } from "@assets/assets";
import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
function ArticleCard() {
  const { data } = useQuery({
    queryKey: ["write-article"],
    queryFn: () => null,
  });

  return (
    <div className="h-96 pb-5">
      <div className="flex items-center gap-4 pb-2">
        {<icons.SquarePen size={20} color={"#226BFF"} />}
        <h4 className="text-lg font-semibold">Generated Article</h4>
      </div>

      {!data ? (
        <div className="mx-auto mt-16 space-y-6 text-center">
          <icons.SquarePen size={40} color="#64748B80" className="mx-auto" />
          <p className="text-sm text-zinc-400">
            Enter a topic and click “Generate article ” to get started
          </p>
        </div>
      ) : (
        <div className="h-full overflow-y-scroll px-2 py-5">
          <div className="reset-tw">
            <Markdown>{data}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
