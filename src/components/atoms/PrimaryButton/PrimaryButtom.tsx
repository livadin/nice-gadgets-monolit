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
        "flex items-center justify-center",
        "text-sm text-font-bold leading-[21px]",
        "hover:shadow-custom",
        "transition-shadow duration-300",
        "w-[175px] h-10",
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