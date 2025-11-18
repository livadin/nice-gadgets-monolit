import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { MenuIcon } from '../Icons/MenuIcon';

type MenuButtonProps = {
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
};

export const MenuButton = ({
  onClick,
  width = 48,
  height = 48,
  className,
}: MenuButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    <MenuIcon
      className={cn(
        'w-4 h-4',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
