import type { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

function Button({
  children,
  href = "#",
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <a className={`button button--${variant}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export default Button;
