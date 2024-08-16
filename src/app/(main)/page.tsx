import React from "react";
import CreatePost from "./feed/CreatePost";
import Post from "./feed/Post";
import SideBar from "./feed/SideBar";

function Home() {
  return (
    <div className="mx-auto flex w-full max-w-xl grow flex-col gap-3 p-2 sm:mx-0">
      <CreatePost />
      <Post />
    </div>
  );
}

export default Home;
