import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
  onClick: () => void;
}

export function Button({ children, className = "button", type = "button", onClick, ...props }: IButtonProps) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
