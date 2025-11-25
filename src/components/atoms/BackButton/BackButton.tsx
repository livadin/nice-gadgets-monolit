import cn from 'classnames';
import { ArrowLeftButton } from '../UtilityButton';

type BackButtonProps = {
  text?: string;
  className?: string;
  onClick?: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({ text, className, onClick }) => {
  return (
    <div role="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-1",
        "text-xs font-semibold text-secondary",
        "hover:text-primary",
        "transition-colors duration-300",
        'group',
        className
      )}
    >
      <ArrowLeftButton className='border-0'/>
      {text}
    </div>
  );
};