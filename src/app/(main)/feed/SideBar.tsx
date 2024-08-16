import Navigation from "@/components/Navigation";
import React from "react";

function SideBar({
  className,
  childCn,
}: {
  className: string;
  childCn?: string;
}) {
  return (
    <div className={className}>
      <div className={childCn}>
        <Navigation />
      </div>
    </div>
  );
}

export default SideBar;
