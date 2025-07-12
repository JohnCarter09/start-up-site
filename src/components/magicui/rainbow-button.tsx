import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface RainbowButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof rainbowButtonVariants> {
  asChild?: boolean;
}

const rainbowButtonVariants = cva(
  cn(
    "relative cursor-pointer group transition-all",
    "inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-md outline-none focus-visible:ring-[3px]",
    "text-sm font-medium whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "bg-gradient-to-r from-[#ff0000] via-[#ff8500] via-[#ffff00] via-[#8aff00] via-[#00ff00] via-[#00ff8a] via-[#00ffff] via-[#008aff] via-[#0000ff] via-[#8a00ff] to-[#ff00ff]",
    "bg-[length:200%_100%] animate-rainbow-bg text-white border-0"
  ),
  {
    variants: {
      variant: {
        default: "",
        outline: "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(rainbowButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

RainbowButton.displayName = "RainbowButton";

export { RainbowButton, rainbowButtonVariants };