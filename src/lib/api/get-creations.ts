import { auth } from "@clerk/nextjs/server";

export async function getAllCreations() {
  const { getToken } = await auth();
  const token = await getToken();
  const response = await fetch(`${process.env.API}/user/creations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const payload = await response.json();
  return payload;
}

export async function getPublishedCreations() {
  const { getToken } = await auth();
  const token = await getToken();
  const response = await fetch(`${process.env.API}/user/published`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const payload = await response.json();

  return payload;
}
