import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEventHandler, useState } from "react";
import { writeArticleAction } from "../action";

export default function useWriteArticle() {
  const options = ["Short (200-400)", "Long (400-800)"];
  const [selected, setSelected] = useState(options[0]);

  const [article, setArticle] = useState("");
  const queryClient = useQueryClient();
  const { error, isPending, mutate } = useMutation({
    mutationKey: ["write-article"],
    mutationFn: async () => await writeArticleAction(article, selected),
    onSuccess: (data) => {
      queryClient.setQueryData(["write-article"], data.article);
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate();
  };
  return { selected, setSelected, onSubmit, options, isPending, error, article, setArticle };
}
