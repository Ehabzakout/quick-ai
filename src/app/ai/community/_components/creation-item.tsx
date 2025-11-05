"use client";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { reactAction } from "../action";
import { toast } from "sonner";

export default function CreationItem({ ...prop }: Creation) {
  const { userId } = useAuth();
  const [puls, setPuls] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(prop.likes);
  const { mutate, isPending } = useMutation({
    mutationKey: ["react"],
    mutationFn: () => reactAction(prop.id),
    onSuccess: (data) => {
      toast.success(data.message);
      if (liked) {
        setLiked(false);
        setLikes(likes.filter((like) => like !== userId));
      } else {
        setLiked(true);
        setLikes((prev) => [...prev, userId!]);
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  useEffect(() => {
    if (userId) setLiked(likes.includes(userId));
  }, [userId]);
  async function react() {
    setPuls(true);
    setTimeout(() => {
      setPuls(false);
    }, 250);
    if (isPending) return;
    mutate();
  }
  return (
    <div className="relative size-[250px]">
      <Link href={prop.content} target="_blank">
        <Image
          src={prop.content}
          alt="Photo"
          width={250}
          height={250}
          className="absolute size-full cursor-pointer rounded-lg object-contain"
        />
      </Link>
      <div className="absolute bottom-3 flex w-full justify-between gap-2 px-3">
        <p className="line-clamp-1 text-white">{prop.prompt}</p>
        <div className="flex gap-1">
          <span className="text-[10px] text-white">{likes.length}</span>
          <Heart
            color={liked ? "#f00" : "white"}
            className={cn("transition-all duration-250", puls && "scale-[1.2]")}
            onClick={() => react()}
            fill={liked ? "#f00" : "transparent"}
          />
        </div>
      </div>
    </div>
  );
}
