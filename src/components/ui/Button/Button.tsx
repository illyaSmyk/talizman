import type { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  if (href) {
    return (
      <a className={`button button--${variant}`} href={href} onClick={onClick}>
        <span>{children}</span>
        <span className="button__arrow" aria-hidden="true">
          →
        </span>
      </a>
    );
  }
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">
        →
      </span>
    </button>
  );
}

export default Button;
