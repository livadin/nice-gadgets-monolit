import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { HeartIcon } from '../Icons/HeartIcon';
import { HeartFilledIcon } from '../Icons/HeartFilledIcon';

type FavoriteButtonProps = {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
};

export const FavoriteButton = ({
  selected,
  onClick,
  className,
  width = 48,
  height = 48,
}: FavoriteButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group',className)}
    width={width}
    height={height}
  >
    {selected ?
      <HeartFilledIcon 
        className={cn( 
          'w-[16px] h-[16px]', 
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-130',
          'group-active:scale-155',
        )}/>
    : <HeartIcon 
        className={cn(
          'w-[16px] h-[16px]',
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-130',
          'group-active:scale-155',
        )}/>}
  </UtilityButton>
);
