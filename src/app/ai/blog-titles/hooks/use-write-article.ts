import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEventHandler, useState } from "react";
import { writeTitleAction } from "../action";
import { toast } from "sonner";

export default function useWriteTitle() {
  const options = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];
  const [selected, setSelected] = useState(options[0]);

  const [article, setArticle] = useState("");
  const queryClient = useQueryClient();
  const { error, isPending, mutate } = useMutation({
    mutationKey: ["write-title"],
    mutationFn: async () => await writeTitleAction(article, selected),
    onSuccess: (data) => {
      queryClient.setQueryData(["write-title"], data.article);
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate();
  };
  return { selected, setSelected, onSubmit, options, isPending, error, article, setArticle };
}
