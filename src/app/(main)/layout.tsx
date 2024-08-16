import Navbar from "@/components/Navbar";
import React from "react";
import SideBar from "./feed/SideBar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-2">
        <section className="flex w-full min-w-0 gap-4">
          <SideBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
          {children}
        </section>
      </div>
      <SideBar
        className="sticky bottom-0 w-full border-t bg-white p-2 sm:hidden"
        childCn="rounded-md flex flex-row items-center justify-center bg"
      />
    </div>
  );
}

export default RootLayout;
