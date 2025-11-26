import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { IconPlus } from '../Icons/IconPlus';

type PlusButtonProps = {
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
};

export const PlusButton = ({
  onClick,
  width = 32,
  height = 32,
  className,
}: PlusButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    <IconPlus
      className={cn(
        'w-4 h-4',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
