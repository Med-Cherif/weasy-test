import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export const buttonVariants = cva(
  "flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      color: {
        default: "",
        primary: "bg-primary text-primary-foreground",
        success: "bg-success text-success-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        muted: "bg-muted text-foreground border border-input",
      },
      size: {
        small: "px-3 h-8",
        medium: "px-4 h-10",
        // large: "px-6",
      },
      variant: {
        solid: "",
        outline: "border bg-transparent",
        link: "h-auto p-0 bg-transparent hover:underline",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        color: "default",
        variant: "outline",
        className: "text-foreground border-input",
      },
      {
        color: "primary",
        variant: "outline",
        className: "text-primary border-primary",
      },
      {
        color: "destructive",
        variant: "outline",
        className: "text-destructive border-destructive",
      },
      {
        color: "success",
        variant: "outline",
        className: "text-success border-success",
      },

      // Link
      {
        color: "default",
        variant: "link",
        className: "text-foreground",
      },
      {
        color: "primary",
        variant: "link",
        className: "text-primary",
      },
      {
        color: "destructive",
        variant: "link",
        className: "text-destructive",
      },
      {
        color: "success",
        variant: "link",
        className: "text-success",
      },
    ],

    defaultVariants: {
      color: "primary",
      variant: "solid",
      size: "medium",
      radius: "small",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      size,
      color,
      radius,
      isLoading,
      disabled,
      asChild,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, color, radius, className })
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export default Button;
