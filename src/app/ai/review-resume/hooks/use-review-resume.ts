import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEventHandler, useRef, useState } from "react";
import removeObjectAction from "../action";
import { toast } from "sonner";
import reviewResumeAction from "../action";

export default function useReviewResume() {
  const queryClient = useQueryClient();
  const [uploaded, setUploaded] = useState<FileList | null>(null);
  const uploadedImg = useRef<HTMLInputElement | null>(null);

  const { error, isPending, mutate } = useMutation({
    mutationKey: ["review-resume"],
    mutationFn: async (formData: FormData) => reviewResumeAction(formData),
    onSuccess: (data) => queryClient.setQueryData(["review-resume"], data),
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    const file = uploadedImg.current?.files;

    if (file && file.length > 0) {
      formData.append("resume", file[0]);

      mutate(formData);
    } else {
      toast.error("You need to add file");
    }
  };
  return { uploaded, setUploaded, uploadedImg, onSubmit, isPending, error };
}
