import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <header className="sticky top-0 h-14 w-full border-b bg-white">
      <nav className="flex h-full items-center justify-between gap-4 px-4">
        <Link href="/" className="w-1/3 text-3xl font-bold">
          ThinkHub
        </Link>

        

        <div className="flex w-1/3 justify-end">
          <div className="flex w-fit items-center rounded-3xl bg-zinc-100 px-2 py-1 shadow-md">
            <Image
              src="/user-icon.jpg"
              alt="user icon"
              width={40}
              height={40}
              className="size-8 rounded-full object-cover"
            />

            <span className="ml-2 text-sm">John Doe</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
