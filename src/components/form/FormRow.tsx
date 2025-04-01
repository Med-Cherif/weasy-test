import React, { HTMLAttributes } from "react";
import Row from "../ui/Row";
import { cn } from "@/utils/cn";

const FormRow = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Row className={cn("gap-4", className)} {...props}>
      {children}
    </Row>
  );
};

export default FormRow;
