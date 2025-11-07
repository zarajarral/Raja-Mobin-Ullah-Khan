import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Legacy buttonVariants for backward compatibility with other components
const buttonVariants = cva(
  "button-75",
  {
    variants: {
      variant: {
        default: "",
        destructive: "variant-destructive",
        outline: "variant-outline",
        secondary: "variant-secondary",
        ghost: "variant-ghost",
        link: "variant-link",
      },
      size: {
        default: "",
        sm: "size-sm",
        lg: "size-lg",
        icon: "size-icon",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// Base button class that applies the custom button-75 styling
const getButtonClasses = (variant?: string, size?: string, className?: string) => {
  const baseClass = "button-75";
  const variantClass = variant && variant !== "default" ? `variant-${variant}` : "";
  const sizeClass = size && size !== "default" ? `size-${size}` : "";
  
  return cn(baseClass, variantClass, sizeClass, className);
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Wrap children in span for the hover effect
    const wrappedChildren = React.isValidElement(children) ? 
      children : 
      <span className="text">{children}</span>;

    return (
      <Comp 
        className={getButtonClasses(variant, size, className)} 
        ref={ref} 
        {...props}
      >
        {wrappedChildren}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
