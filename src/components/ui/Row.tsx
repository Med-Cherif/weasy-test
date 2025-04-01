import { cn } from "@/utils/cn";
import React, { HTMLAttributes } from "react";

const Row = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("grid grid-cols-12 [&>*]:col-span-12", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;
