import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative transform hover:-translate-y-0.5 active:translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-primary to-primary/90 text-primary-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.2)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)]",
        destructive:
          "bg-gradient-to-b from-destructive to-destructive/90 text-destructive-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.2)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)]",
        outline:
          "border-2 border-input bg-transparent shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.1)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.1)] hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-gradient-to-b from-secondary to-secondary/90 text-secondary-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.2)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-gradient-to-b from-[#3e372e] to-[#2e2820] text-[#e8e4d1] shadow-[0_4px_0_0_rgba(46,40,32,0.5),0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgba(46,40,32,0.5),0_0_12px_rgba(0,0,0,0.15)] active:shadow-[0_2px_0_0_rgba(46,40,32,0.5),0_0_8px_rgba(0,0,0,0.1)] border border-[#99978a]/20",
        accent: "bg-gradient-to-b from-[#57422c] to-[#433121] text-[#e8e4d1] shadow-[0_4px_0_0_rgba(67,49,33,0.5),0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_0_rgba(67,49,33,0.5),0_0_12px_rgba(0,0,0,0.15)] active:shadow-[0_2px_0_0_rgba(67,49,33,0.5),0_0_8px_rgba(0,0,0,0.1)] border border-[#99978a]/20",
        cream: "bg-gradient-to-b from-[#e8e4d1] to-[#d9d5c2] text-[#3e372e] shadow-[0_4px_0_0_rgba(153,151,138,0.5),0_0_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_0_0_rgba(153,151,138,0.5),0_0_12px_rgba(0,0,0,0.1)] active:shadow-[0_2px_0_0_rgba(153,151,138,0.5),0_0_8px_rgba(0,0,0,0.05)] border border-[#99978a]/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
