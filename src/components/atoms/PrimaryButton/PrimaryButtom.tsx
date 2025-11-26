import type React from "react";
import cn from 'classnames';

type PrimaryButtonProps = {
  buttonText?: string;
  selected?: boolean
  onClick?: () => void
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  selected,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "primary-button",
    selected
      ? "bg-white-2 text-accent-green border border-element"
      : "bg-primary-dark text-white-dark",
      className
      )}
    >
      {buttonText}
    </button>
  );
};