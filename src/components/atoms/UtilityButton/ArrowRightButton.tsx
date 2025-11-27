import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';

interface ArrowRightProps {
  disabled?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
}

export const ArrowRightButton = ({
  disabled,
  onClick,
  width = 32,
  height = 32,
  className,
}: ArrowRightProps) => (
  <UtilityButton
    disabled={disabled}
    onClick={onClick}
    className={cn(
      disabled
        ? 'group bg-white'
        : 'group bg-white-2 hover:bg-white-gray',
      className
    )}
    width={width}
    height={height}
  >
    {disabled ?
      <ArrowRightIcon />
    : <ArrowRightIcon
        className={cn(
          'text-primary',
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-130',
          'group-active:scale-155',
        )}
      />
    }
  </UtilityButton>
);
