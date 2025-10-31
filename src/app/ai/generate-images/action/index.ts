"use server";

import { auth } from "@clerk/nextjs/server";

export async function generateImageAction(article: string, style: string) {
  const prompt = `generate an image of ${article} in this style ${style}  `;
  const { getToken } = await auth();
  const token = await getToken();

  const response = await fetch(`${process.env.API}/ai/generate-image`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const payload = await response.json();

  if (payload.success !== true) throw new Error(payload.error || "Can't generate image");
  return payload;
}
