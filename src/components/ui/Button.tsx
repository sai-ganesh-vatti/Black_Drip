import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant = "primary" | "secondary" | "ghost" | "bronze";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
}

// ─── Variant maps ─────────────────────────────────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-off-white)] text-[var(--color-obsidian)]
    hover:bg-[var(--color-bronze)] hover:text-[var(--color-obsidian)]
    border border-transparent
  `,
  secondary: `
    bg-transparent text-[var(--color-off-white)]
    border border-[var(--color-border)]
    hover:border-[var(--color-off-white)]
  `,
  ghost: `
    bg-transparent text-[var(--color-muted)]
    hover:text-[var(--color-off-white)]
    border border-transparent
  `,
  bronze: `
    bg-[var(--color-bronze)] text-[var(--color-obsidian)]
    hover:bg-[var(--color-bronze-dim)]
    border border-transparent
  `,
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2",
          "font-[var(--font-sans)] font-medium tracking-[0.12em] uppercase",
          "transition-all duration-300 ease-out",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          // Variant + size
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
