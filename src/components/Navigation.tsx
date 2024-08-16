"use client";
import React from "react";
import Link from "next/link";
import {
  IoChatbubbles,
  IoChatbubblesOutline,
  IoNotifications,
} from "react-icons/io5";
import { usePathname } from "next/navigation";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navigation() {
  const path = usePathname();
  return (
    <>
      <Link
        href="/"
        title="Home"
        className={`${path === "/" ? "rounded-xl border border-sky-50 bg-sky-50/50 text-blue-500 shadow-md" : "hover:text-blue-500"} flex p-2 transition-colors`}
      >
        {path === "/" ? (
          <GoHomeFill fill="#027feb" size={24} />
        ) : (
          <GoHome size={24} />
        )}
        <p className="hidden px-2 font-semibold lg:inline">Home</p>
      </Link>
      <Link
        href="/messages"
        title="Messages"
        className={`${path === "/messages" ? "rounded-xl border border-sky-50 bg-sky-50/50 text-blue-500 shadow-md" : "hover:text-blue-500"} flex p-2 transition-colors`}
      >
        {path === "/messages" ? (
          <IoChatbubbles fill="#027feb" size={24} />
        ) : (
          <IoChatbubblesOutline size={24} />
        )}
        <p className="hidden px-2 font-semibold lg:inline">Messages</p>
      </Link>
      <Link
        href="/notifications"
        title="Notifications"
        className={`${path === "/notifications" ? "rounded-xl border border-sky-50 bg-sky-50/50 text-blue-500 shadow-md" : "hover:text-blue-500"} flex p-2 transition-colors`}
      >
        {path === "/notifications" ? (
          <IoNotifications fill="#027feb" size={24} />
        ) : (
          <IoMdNotificationsOutline size={24} />
        )}
        <p className="hidden px-2 font-semibold lg:inline">Notifications</p>
      </Link>
    </>
  );
}

export default Navigation;
