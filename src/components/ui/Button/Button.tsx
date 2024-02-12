import React from "react";

interface IButtonProps {
  children: React.ReactNode,
  className?: string,
  type?: "submit" | "button",
  onClick?: (event: React.SyntheticEvent) => void,
  style?: React.CSSProperties,
}

export function Button({ children, className = "button", type = "button", onClick, style, ...props }: IButtonProps) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      style={style || {}}
      {...props}
    >
      {children}
    </button>
  );
}
