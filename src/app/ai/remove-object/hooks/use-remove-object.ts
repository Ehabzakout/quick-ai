import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEventHandler, useRef, useState } from "react";
import removeObjectAction from "../action";
import { toast } from "sonner";

export default function useRemoveObject() {
  const queryClient = useQueryClient();
  const [uploaded, setUploaded] = useState<FileList | null>(null);
  const uploadedImg = useRef<HTMLInputElement | null>(null);
  const [object, setObject] = useState("");
  const { error, isPending, mutate } = useMutation({
    mutationKey: ["remove-object"],
    mutationFn: async (formData: FormData) => removeObjectAction(formData),
    onSuccess: (data) => queryClient.setQueryData(["remove-object"], data),
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    const file = uploadedImg.current?.files;
    console.log(file);
    if (file && file.length > 0 && object.length > 0) {
      formData.append("image", file[0]);
      formData.append("object", object);
      mutate(formData);
    } else {
      toast.error("You need to add photo and object to remove");
    }
  };
  return { uploaded, setUploaded, uploadedImg, onSubmit, isPending, error, object, setObject };
}
