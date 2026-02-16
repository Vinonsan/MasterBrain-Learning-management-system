import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "rounded"
  | "transparent";

type ButtonSize = "xs" | "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  primary: "bg-primary border-3 border-red-300 text-white hover:bg-primary/90",
  secondary: "bg-black text-white hover:bg-black/90",
  outline: "border-2 border-black text-black hover:bg-black hover:text-white",
  ghost: "text-primary hover:bg-primary/10",
  rounded: "bg-primary text-white rounded-full hover:bg-primary/90",
  transparent: "bg-transparent text-black",
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: "p-1 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const commonClasses = `
  inline-flex items-center justify-center gap-2
  font-semibold transition-all
  focus:outline-none focus:ring-2 focus:ring-primary/50
  disabled:opacity-50 disabled:cursor-not-allowed
  cursor-pointer
`;

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}: ButtonProps) => {
  const classes = `
    ${commonClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
