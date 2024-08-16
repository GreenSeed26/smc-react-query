import { Images, VideoIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function CreatePost() {
  const createPost = async (fd: FormData) => {
    "use server"
    const desc = fd.get("desc") as string;
  };
  return (
    <div className="my-2 w-full rounded-lg bg-white p-2 shadow-md">
      <form action={createPost} className="flex gap-1">
        <Image
          src="/user-icon.jpg"
          alt="user icon"
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
        />

        <textarea
          name="desc"
          placeholder="What's on your mind?"
          className="w-full resize-none rounded-md bg-gray-100 p-2 focus:outline-none"
        ></textarea>
      </form>
      <div className="flex justify-end gap-2 pt-2">
        <button
          className="rounded-md px-2 py-1 hover:bg-gray-100"
          title="Image"
        >
          <Images />
        </button>
        <button
          className="rounded-md px-2 py-1 hover:bg-gray-100"
          title="Video"
        >
          <VideoIcon />
        </button>
        <button className="rounded-md bg-green-500 px-2 py-1 text-white">
          Send
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
