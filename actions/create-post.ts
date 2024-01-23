"use server";

import { db } from "@/lib/db";
// import { revalidatePath } from "next/cache";

export const createPost = async ({
  author,
  authorEmail,
  body,
  title,
}: {
  author: string;
  authorEmail: string;
  body: string;
  title: string;
}) => {
  const createdPost = await db.post.create({
    data: {
      author,
      authorEmail,
      title,
      body,
    },
  });

  // revalidatePath("/home");
  return createdPost;
};
