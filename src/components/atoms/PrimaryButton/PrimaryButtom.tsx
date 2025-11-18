import type React from "react";
import cn from 'classnames';

type PrimaryButtonProps = {
  buttonText?: string;
  selected?: boolean
  onClick?: () => void
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center",
        "w-[175px] h-[40px]",
        "text-sm text-font-bold leading-[21px]",
        "hover:shadow-custom",
        "transition-shadow duration-300 m-4",
    selected
      ? "bg-white text-accent-green border border-element"
      : "bg-primary text-white"
      )}
    >
      {buttonText}
    </button>
  );
};