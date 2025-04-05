import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps, IconType } from "react-icons";

const HeaderIcon = ({
  Icon,
  number,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: IconType;
  number?: number;
}) => {
  return (
    <button
      className="flex justify-center items-center cursor-pointer relative"
      {...props}
    >
      <Icon size={22} />
      {number ? (
        <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs absolute -top-3 -right-3">
          {number}
        </span>
      ) : (
        number
      )}
    </button>
  );
};

export default HeaderIcon;
