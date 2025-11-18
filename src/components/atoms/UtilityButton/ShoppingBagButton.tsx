import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { ShoppingBag } from '../Icons/ShoppingBag';

type ShoppingBagProps = {
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
};

export const ShoppingBagButton = ({
  onClick,
  className,
  width = 48,
  height = 48,
}: ShoppingBagProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    <ShoppingBag 
      className={cn(
        'w-[16px] h-[16px]',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}/>
  </UtilityButton>
);
