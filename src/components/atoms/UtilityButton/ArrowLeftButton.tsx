import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon';


interface ArrowLeftButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
}

export const ArrowLeftButton = ({
  disabled,
  onClick,
  className,
  width = 32,
  height = 32,
}: ArrowLeftButtonProps) => (
  <UtilityButton
    disabled={disabled}
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    {disabled ?
      <ArrowLeftIcon />
    : <ArrowLeftIcon
        className={cn(
          'text-primary',
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-130', 
          'group-active:scale-155',
          className,
        )}
      />
    }
  </UtilityButton>
);
