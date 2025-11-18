import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { ShoppingBag } from '../Icons/ShoppingBag';

type ShoppingBagProps = {
  onClick?: () => void;
  width?: number;
  height?: number;
};

export const ShoppingBagButton = ({
  onClick,
  width = 48,
  height = 48,
}: ShoppingBagProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group')}
    width={width}
    height={height}
  >
    <ShoppingBag 
      className={cn(
        'w-4 h-4',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}/>
  </UtilityButton>
);
