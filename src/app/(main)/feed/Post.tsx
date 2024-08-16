"use client"
import { getPosts } from "@/lib/actions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { BiBookmark, BiComment, BiHeart, BiShare } from "react-icons/bi";
import { useFetchPost } from "../hooks/useFetchPost";

function Post() {

  const fetchPost = useFetchPost()

  console.log(fetchPost.data)
  

  return (
    <article className="my-3 w-full rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center">
        <Image
          src="/user-icon.jpg"
          alt="user icon"
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
        />

        <div className="flex flex-col leading-3">
          <span className="ml-2 text-sm font-medium">John Doe</span>
          <span className="ml-2 text-xs text-muted-foreground">@johndoe</span>
        </div>
      </div>

      <p className="mt-2 text-sm leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="relative h-96 w-full">
        <Image src="/banner.jpg" alt="hello" fill objectFit="cover" />
      </div>

      <div className="mt-4 flex justify-around">
        <button className="px-4 py-1">
          <BiHeart size={20} />
        </button>
        <button className="px-4 py-1">
          <BiComment size={20} />
        </button>
        <button className="px-4 py-1">
          <BiBookmark size={20} />
        </button>
        <button className="px-4 py-1">
          <BiShare size={20} />
        </button>
      </div>
    </article>
  );
}

export default Post;
