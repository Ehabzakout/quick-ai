"use server";

import { auth } from "@clerk/nextjs/server";

export default async function RemoveBackgroundAction(formData: FormData) {
  const { getToken } = await auth();
  const token = await getToken();

  const response = await fetch(`${process.env.API}/ai/remove-background`, {
    method: "POST",
    headers: { authorization: `Bearer ${token}` },
    body: formData,
  });
  const payload = await response.json();
  if (payload.success !== true) throw new Error(payload.error || "Can't remove background");
  return payload;
}
