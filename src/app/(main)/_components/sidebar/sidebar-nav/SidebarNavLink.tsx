"use client";

import { NavLink } from "@/data/nav-links";
import useLayoutStore from "@/stores/layout-store";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type SidebarNavLinkProps = NavLink;

const SidebarNavLink = ({ href, label, Icon }: SidebarNavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const { isSidebarCollapse } = useLayoutStore();

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "w-full flex items-center gap-2 px-4 py-2 rounded-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors duration-300",
          isActive ? "bg-primary/5 text-primary" : "",
          isSidebarCollapse ? "px-3 justify-center" : "px-4"
        )}
      >
        <Icon />
        <span
          className={cn(
            "text-sm",
            isSidebarCollapse ? "hidden" : "inline-block"
          )}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};

export default SidebarNavLink;
