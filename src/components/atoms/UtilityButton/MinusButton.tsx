import cn from 'classnames';
import { UtilityButton } from './UtilityButton';

import { IconMinus } from '../Icons/IconMinus';

interface MinusButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
}

export const MinusButton = ({
  disabled,
  onClick,
  width = 32,
  height = 32,
  className,
}: MinusButtonProps) => (
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
      <IconMinus />
    : <IconMinus
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
