import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variantClasses = {
  primary: "bg-primary text-white",
  secondary: "bg-black text-white",
  outline: "border border-primary text-primary",
};

const Badge = ({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full  tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
