"use server";

import prisma from "./db";

export const getPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

