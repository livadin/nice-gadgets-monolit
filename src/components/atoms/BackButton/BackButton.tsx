import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon';
import cn from 'classnames';

type BackButtonProps = {
  text?: string;
  className?: string;
  onClick?: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1",
        "text-xs font-semibold text-secondary",
        "hover:text-primary",
        "transition-colors duration-300",
        className
      )}
    >
      <ArrowLeftIcon className='text-primary'/>
      {text}
    </button>
  );
};

