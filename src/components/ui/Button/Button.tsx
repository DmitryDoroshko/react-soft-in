import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
  onClick?: (event: React.SyntheticEvent) => void;
}

export function Button({ children, className = "button", type = "button", onClick, ...props }: IButtonProps) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
