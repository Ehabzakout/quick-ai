"use server";

import { auth } from "@clerk/nextjs/server";

export async function writeTitleAction(title: string, article: string) {
  const prompt = `generate a blog title for the key word ${title} in category ${article}  `;
  const { getToken } = await auth();
  const token = await getToken();

  const response = await fetch(`${process.env.API}/ai/generate-title`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const payload = await response.json();

  if (payload.success !== true) throw new Error(payload.error || "Can't write article");
  return payload;
}
