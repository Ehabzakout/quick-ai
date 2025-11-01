"use client";
import { icons } from "@assets/assets";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

function ArticleCard() {
  const { data } = useQuery<{
    message: string;
    success: boolean;
    content: string;
    published: boolean;
  } | null>({
    queryKey: ["generate-image"],
    queryFn: () => null,
  });

  return (
    <div className="min-h-80 px-3 pb-1">
      <div className="flex items-center gap-4 pb-2">
        {<icons.Image size={20} color={"#00AD25"} />}
        <h4 className="text-lg font-semibold">Generated Image</h4>
      </div>
      {!data ? (
        <div className="mx-auto mt-16 space-y-6 text-center">
          <icons.Image size={40} color="#64748B80" className="mx-auto" />
          <p className="text-sm text-zinc-400">
            Enter keywords and click &quot;Generate Titles&quot; to get started
          </p>
        </div>
      ) : (
        <div>
          <Image
            src={data.content}
            width={250}
            height={320}
            alt="photo"
            className="size-full rounded-md object-contain"
          />
          <Link href={data.content} target="_blank" className="text-blue mt-2 block underline">
            Open
          </Link>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
