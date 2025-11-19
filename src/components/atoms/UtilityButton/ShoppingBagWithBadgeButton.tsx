import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { ShoppingBagWithBadge } from '../Icons/ShoppingBagWithBadge';

type ShoppingBagWithBadgeButton = {
  onClick?: () => void;
  className?: string;
  countBag?: number;
};

export const ShoppingBagWithBadgeButton = ({
  onClick,
  countBag,
  className,
}: ShoppingBagWithBadgeButton) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
  >
  <ShoppingBagWithBadge
        className={cn(
          'w-4 h-4',
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-130',
          'group-active:scale-155',
        )} countBag={countBag}/>
  </UtilityButton>
);