"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// ─── Input ────────────────────────────────────────────────────────────────────

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={inputId} className="label-xs">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full bg-transparent border-b border-[var(--color-border)]",
            "px-0 py-3 text-sm text-[var(--color-off-white)]",
            "placeholder:text-[var(--color-muted)]/50",
            "focus:outline-none focus:border-[var(--color-bronze)]",
            "transition-colors duration-300",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
        {hint && !error && <p className="text-xs text-[var(--color-muted)]">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

// ─── Textarea ─────────────────────────────────────────────────────────────────

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={inputId} className="label-xs">
            {label}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          rows={5}
          className={cn(
            "w-full bg-transparent border-b border-[var(--color-border)]",
            "px-0 py-3 text-sm text-[var(--color-off-white)]",
            "placeholder:text-[var(--color-muted)]/50",
            "focus:outline-none focus:border-[var(--color-bronze)]",
            "transition-colors duration-300 resize-none",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// ─── Select ───────────────────────────────────────────────────────────────────

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={inputId} className="label-xs">
            {label}
          </label>
        )}
        <select
          id={inputId}
          ref={ref}
          className={cn(
            "w-full bg-[var(--color-charcoal)] border-b border-[var(--color-border)]",
            "px-0 py-3 text-sm text-[var(--color-off-white)]",
            "focus:outline-none focus:border-[var(--color-bronze)]",
            "transition-colors duration-300 appearance-none cursor-pointer",
            error && "border-red-500",
            className
          )}
          {...props}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";

// ─── Checkbox ─────────────────────────────────────────────────────────────────

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? "checkbox";
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="flex items-start gap-3 cursor-pointer group"
        >
          <input
            id={inputId}
            type="checkbox"
            ref={ref}
            className={cn(
              "mt-0.5 w-4 h-4 rounded-none border border-[var(--color-border)]",
              "accent-[var(--color-bronze)] cursor-pointer",
              className
            )}
            {...props}
          />
          <span className="text-xs text-[var(--color-muted)] group-hover:text-[var(--color-off-white)] transition-colors leading-relaxed">
            {label}
          </span>
        </label>
        {error && <p className="text-xs text-red-400 ml-7">{error}</p>}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
