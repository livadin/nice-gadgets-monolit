import type React from "react";
import cn from 'classnames';

type PrimaryButtonProps = {
  buttonText?: string;
<<<<<<< HEAD
  selected?: boolean;
  onClick?: () => void;
  className: string;
=======
  selected?: boolean
  onClick?: () => void
  className?: string;
>>>>>>> c08a62f3c34ed7f15e185c2f4a2d6ffdc3f2376d
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  selected,
  onClick,
<<<<<<< HEAD
  className
=======
  className,
>>>>>>> c08a62f3c34ed7f15e185c2f4a2d6ffdc3f2376d
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
      ? "bg-white text-accent-green border border-element"
      : "bg-primary text-white",
      className
      )}
    >
      {buttonText}
    </button>
  );
};