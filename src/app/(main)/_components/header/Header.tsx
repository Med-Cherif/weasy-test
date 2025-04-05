import { Input } from "@/components/form/input/Input";
import React from "react";
import { LuSearch } from "react-icons/lu";
import HeaderProfile from "./HeaderProfile";
import HeaderTheme from "./HeaderTheme";
import HeaderNotifications from "./HeaderNotifications";
import HeaderMessages from "./HeaderMessages";
import { cn } from "@/utils/cn";
import useLayoutStore from "@/stores/layout-store";

const Header = () => {
  return (
    <header
      className={cn(
        "sticky top-0 px-8 h-[68px] flex justify-between items-center border-b border-input bg-background"
      )}
    >
      <div className="relative hidden sm:block">
        <Input placeholder="Search" className="bg-muted" />
        <LuSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-muted-foreground" />
      </div>
      <div className="flex-1 flex items-center justify-end gap-6">
        <HeaderTheme />
        <HeaderMessages />
        <HeaderNotifications />
        <HeaderProfile />
      </div>
    </header>
  );
};

export default Header;
