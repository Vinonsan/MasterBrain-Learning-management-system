import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "rounded"
  | "transparent";

export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type RoundedSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  roundedSize?: RoundedSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 shadow-sm",
  secondary:
    "bg-black text-white hover:bg-black/90",
  outline:
    "border border-black/30 text-black hover:bg-black hover:text-white",
  ghost:
    "text-primary hover:bg-primary/10",
  rounded:
    "bg-primary text-white hover:bg-primary/90",
  transparent:
    "bg-transparent text-black",
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: "px-3 py-1 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const roundedClasses: Record<RoundedSize, string> = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-full",
};

const commonClasses = `
  inline-flex items-center justify-center gap-2
  font-semibold transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-primary/50
  disabled:opacity-50 disabled:cursor-not-allowed
  cursor-pointer
`;

const Button = ({
  children,
  variant = "primary",
  size = "md",
  roundedSize = "md",
  className = "",
  href,
  ...props
}: ButtonProps) => {
  const classes = `
    ${commonClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${roundedClasses[roundedSize]}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
