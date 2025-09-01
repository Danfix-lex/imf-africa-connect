import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground shadow-soft hover:shadow-medium hover:-translate-y-0.5",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-medium hover:-translate-y-0.5",
        secondary:
          "bg-gradient-secondary text-secondary-foreground shadow-soft hover:shadow-medium hover:-translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-soft",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        premium: "bg-gradient-hero text-primary-foreground shadow-glow hover:shadow-strong hover:-translate-y-1 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
