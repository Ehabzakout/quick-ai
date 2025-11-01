"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEventHandler, useState } from "react";
import { generateImageAction } from "../action";

export default function useGenerateImage() {
  const options = ["Realistic", "Ghibli Style"];
  const [selected, setSelected] = useState(options[0]);
  const [article, setArticle] = useState("");
  const [publish, setPublish] = useState(false);

  const queryClient = useQueryClient();
  const { error, isPending, mutate } = useMutation({
    mutationKey: ["generate-image"],
    mutationFn: async () => await generateImageAction(article, selected, publish),
    onSuccess: (data) => {
      queryClient.setQueriesData({ queryKey: ["generate-image"] }, data);
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate();
  };
  return {
    selected,
    setSelected,
    onSubmit,
    options,
    isPending,
    error,
    article,
    setArticle,
    publish,
    setPublish,
  };
}
