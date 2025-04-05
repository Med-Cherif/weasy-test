"use client";

import useLayoutStore from "@/stores/layout-store";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";
import { LuArrowLeftFromLine, LuMenu } from "react-icons/lu";

const SidebarHeader = () => {
  const { isSidebarCollapse, toggleSidebarCollapse } = useLayoutStore();

  return (
    <div
      className={cn(
        "h-[68px] flex items-center border-b border-input px-4",
        isSidebarCollapse ? "justify-center" : "justify-between"
      )}
    >
      <Image
        className={cn(isSidebarCollapse ? "hidden" : "block")}
        width={50}
        height={50}
        src={"/logo.png"}
        alt=""
      />
      <button className="cursor-pointer" onClick={toggleSidebarCollapse}>
        <LuArrowLeftFromLine
          size={20}
          className={isSidebarCollapse ? "rotate-180" : ""}
        />
      </button>
    </div>
  );
};

export default SidebarHeader;
