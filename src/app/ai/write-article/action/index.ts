"use server";

import { auth } from "@clerk/nextjs/server";

export async function writeArticleAction(article: string, length: string) {
  const prompt = `write article about ${article} in ${length} words`;
  const { getToken } = await auth();
  const token = await getToken();

  const response = await fetch(`${process.env.API}/ai/generate-article`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const payload = await response.json();

  if (payload.success !== true) throw new Error(payload.error || "Can't write article");
  return payload;
}
