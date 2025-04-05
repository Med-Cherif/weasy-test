"use client";

import React, { useEffect, useState } from "react";
import HeaderIcon from "./HeaderIcon";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

const HeaderTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLightTheme = theme === "light";

  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <HeaderIcon onClick={toggleTheme} Icon={isLightTheme ? LuMoon : LuSun} />
  );
};

export default HeaderTheme;
