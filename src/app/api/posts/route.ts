import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const post = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({
    post,
  });
};
