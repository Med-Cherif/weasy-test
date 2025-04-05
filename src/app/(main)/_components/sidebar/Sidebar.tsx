"use client";

import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./sidebar-nav/SidebarNav";
import Button from "@/components/ui/Button";
import { LuLogOut } from "react-icons/lu";
import { useLogoutMutation } from "@/apis/auth/auth-apis";
import { useRouter } from "next/navigation";
import pathnames from "@/constants/pathnames";
import useLayoutStore from "@/stores/layout-store";
import { cn } from "@/utils/cn";

const Sidebar = () => {
  const router = useRouter();
  const mutation = useLogoutMutation();

  const { isSidebarCollapse } = useLayoutStore();

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-full border-r border-input bg-background transition-[width] duration-100",
        isSidebarCollapse ? "w-[74px]" : "w-60"
      )}
    >
      <SidebarHeader />
      <SidebarNav />
      <div className="px-4">
        <Button
          className={cn("w-full", isSidebarCollapse ? "px-3" : "px-4")}
          variant={"outline"}
          onClick={() => {
            mutation.mutate(undefined, {
              onSuccess() {
                router.replace(pathnames.LOGIN);
              },
            });
          }}
        >
          <LuLogOut />{" "}
          <span className={cn(isSidebarCollapse ? "hidden" : "inline-block")}>
            Logout
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
