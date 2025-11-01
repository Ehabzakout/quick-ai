"use client";

import { icons } from "@assets/assets";
import { useQuery } from "@tanstack/react-query";

import Image from "next/image";
import Link from "next/link";

function ArticleCard() {
  const { data } = useQuery<{
    message: string;
    success: boolean;
    image: string;
  } | null>({
    queryKey: ["remove-object"],
    queryFn: () => null,
  });

  return (
    <div className="h-96">
      <div className="mb-3 flex items-center gap-4">
        {<icons.Scissors size={20} color={"##437AF5"} />}
        <h4 className="text-lg font-semibold">Processed Image</h4>
      </div>
      {!data ? (
        <div className="mx-auto mt-16 space-y-6 text-center">
          <icons.Scissors size={40} color="#64748B80" className="mx-auto" />
          <p className="text-sm text-zinc-400">Upload an image and describe what to remove</p>
        </div>
      ) : (
        <div>
          <Image
            src={data.image}
            width={250}
            height={320}
            alt="photo"
            className="size-full rounded-md object-contain"
          />
          <Link href={data.image} target="_blank" className="text-blue mt-2 block underline">
            Open
          </Link>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
