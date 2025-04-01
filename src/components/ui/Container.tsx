import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

const Container = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("container", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
