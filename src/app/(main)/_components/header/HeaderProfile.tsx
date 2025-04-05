"use client";

import { useLogoutMutation } from "@/apis/auth/auth-apis";
import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import pathnames from "@/constants/pathnames";
import { useRouter } from "next/navigation";
import React from "react";
import { LuLogOut, LuSettings, LuUser } from "react-icons/lu";

const HeaderProfile = () => {
  const mutation = useLogoutMutation();

  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer outline-none">
        <Avatar>
          <AvatarImage src="/avatar.png" alt="" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <LuUser /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <LuSettings />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              mutation.mutate(undefined, {
                onSuccess() {
                  router.replace(pathnames.LOGIN);
                },
              });
            }}
          >
            <LuLogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderProfile;
