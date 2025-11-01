"use client";
import { icons } from "@assets/assets";
import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ArticleCard() {
  const { data } = useQuery<{
    message: string;
    success: boolean;
    content: string;
  } | null>({
    queryKey: ["review-resume"],
    queryFn: () => null,
  });

  return (
    <div className="h-96 pb-3">
      <div className="flex items-center gap-4">
        {<icons.FileText size={20} color={"#00DA83"} />}
        <h4 className="text-lg font-semibold">Analysis Results</h4>
      </div>
      {!data?.content ? (
        <div className="mx-auto mt-16 space-y-6 text-center">
          <icons.FileText size={40} color="#64748B80" className="mx-auto" />
          <p className="text-sm text-zinc-400">
            Upload your resume and click &quot;Review Resume&quot; to get started
          </p>
        </div>
      ) : (
        <div className="h-full overflow-y-scroll px-2 py-5">
          <div className="reset-tw">
            <Markdown remarkPlugins={[remarkGfm]}>{data?.content}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
