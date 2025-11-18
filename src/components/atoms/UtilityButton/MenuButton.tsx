import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { MenuIcon } from '../Icons/MenuIcon';

type MenuButtonProps = {
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
};

export const MenuButton = ({
  onClick,
  className,
  width = 48,
  height = 48,
}: MenuButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    <MenuIcon className={cn(
        'w-[16px] h-[16px]',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
