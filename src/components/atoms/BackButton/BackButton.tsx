import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon';
import cn from 'classnames';

type BackButtonProps = {
  text?: string;
  onClick?: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1",
        "text-xs font-semibold text-secondary",
        "hover:text-primary",
        "transition-colors duration-300"
      )}
    >
      <ArrowLeftIcon className='text-primary'/>
      {text}
    </button>
  );
};

