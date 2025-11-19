import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { HeartIconWithBadge } from '../Icons/HeartIconWithBadge';

type FavoriteButtonProps = {
  onClick?: () => void;
  className: string;
  count?: number;
};

export const FavoriteButtonWithBadge = ({
  onClick,
  count,
  className,
}: FavoriteButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
  >
  <HeartIconWithBadge
        className={cn(
          'w-4 h-4',
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-130',
          'group-active:scale-155',
        )} count={count}/>
  </UtilityButton>
);