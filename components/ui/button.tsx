import * as React from "react"
import clsx from "clsx"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline"
  size?: "default" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none"
    const variants = {
      default: "bg-primary text-primary-foreground hover:opacity-90 border border-transparent",
      outline: "border bg-background text-foreground hover:bg-accent",
    } as const
    const sizes = {
      default: "h-10 px-4 py-2 rounded-md",
      icon: "h-10 w-10 rounded-md",
    } as const

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

