"use client";

import navLinks from "@/data/nav-links";
import React from "react";
import SidebarNavLink from "./SidebarNavLink";

const SidebarNav = () => {
  return (
    <nav className="px-4 py-4">
      <ul className="space-y-1">
        {navLinks.map((navlink) => {
          return <SidebarNavLink key={navlink.id} {...navlink} />;
        })}
      </ul>
    </nav>
  );
};

export default SidebarNav;
