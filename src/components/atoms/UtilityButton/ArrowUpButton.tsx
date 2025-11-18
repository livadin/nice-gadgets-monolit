import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { ArrowUpIcon } from '../Icons/ArrowUpIcon';


interface ArrowUpProps {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
}

export const ArrowUpButton = ({
  disabled,
  onClick,
  className,
  width = 32,
  height = 32,
}: ArrowUpProps) => (
  <UtilityButton
    disabled={disabled}
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    {disabled ?
      <ArrowUpIcon />
    : <ArrowUpIcon
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
