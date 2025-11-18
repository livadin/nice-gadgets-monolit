import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { HeartIcon } from '../Icons/HeartIcon';
import { HeartFilledIcon } from '../Icons/HeartFilledIcon';

type FavoriteButtonProps = {
  selected?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
};

export const FavoriteButton = ({
  selected,
  onClick,
  width = 48,
  height = 48,
  className,
}: FavoriteButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    {selected ?
      <HeartFilledIcon
        className={cn(
          'w-4 h-4',
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-130',
          'group-active:scale-155',
        )}
      />
    : <HeartIcon
        className={cn(
          'w-4 h-4',
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-130',
          'group-active:scale-155',
        )}
      />
    }
  </UtilityButton>
);
