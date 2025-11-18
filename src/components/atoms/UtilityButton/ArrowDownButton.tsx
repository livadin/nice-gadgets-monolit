import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon';

interface ArrowDownButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
}

export const ArrowDownButton = ({
  disabled,
  onClick,
  width = 32,
  height = 32,
}: ArrowDownButtonProps) => (
  <UtilityButton
    disabled={disabled}
    onClick={onClick}
    className={cn(
      'group',)}
    width={width}
    height={height}
  >
    {disabled ?
      <ArrowDownIcon />
    : <ArrowDownIcon
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