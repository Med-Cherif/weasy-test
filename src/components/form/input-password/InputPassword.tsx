"use client";

import React, { useState } from "react";
import { Input } from "../input/Input";
import { LuEye, LuEyeOff } from "react-icons/lu";

const InputPassword = (props: React.ComponentProps<"input">) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative">
      <Input {...props} type={isVisible ? "text" : "password"} />
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        {isVisible ? <LuEyeOff /> : <LuEye />}
      </button>
    </div>
  );
};

export default InputPassword;
