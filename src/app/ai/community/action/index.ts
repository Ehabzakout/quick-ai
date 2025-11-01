"use server";
import { auth } from "@clerk/nextjs/server";

export async function reactAction(id: number) {
  const { getToken } = await auth();
  const token = await getToken();
  const response = await fetch(`${process.env.API}/user/toggle-like/${id}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
  });

  const payload = await response.json();
  console.log(payload);
  if (payload.success !== true) throw new Error("Can't make the process");
  return payload;
}
