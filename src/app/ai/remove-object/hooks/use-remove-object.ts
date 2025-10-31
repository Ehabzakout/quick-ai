import { useAuth } from "@clerk/nextjs";
import { FormEventHandler, useRef, useState } from "react";

export default function useRemoveObject() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState<FileList | null>(null);
  const uploadedImg = useRef<HTMLInputElement | null>(null);
  const { getToken } = useAuth();
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData();
    const token = await getToken();
    const file = uploadedImg.current?.files;

    if ((file && file.length == 0) || !file) return setError("there is No file chosen");

    formData.append("image", file[0]);
    try {
      const response = await fetch("http://localhost:3000/ai/remove-object", {
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
        body: formData,
      });
      const payload = await response.json();
    } catch (error) {
      setError((error instanceof Error && error.message) || "Can't upload photo");
    } finally {
      setLoading(false);
    }
  };
  return { uploaded, setUploaded, uploadedImg, onSubmit };
}
