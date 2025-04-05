import { cn } from "@/utils/cn";
import React, { HTMLAttributes } from "react";

const PageTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn("mb-6 font-medium text-3xl", className)}>{children}</h2>
  );
};

export default PageTitle;
