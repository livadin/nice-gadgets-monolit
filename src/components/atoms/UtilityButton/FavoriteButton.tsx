import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { HeartIcon } from '../Icons/HeartIcon';
import { HeartFilledIcon } from '../Icons/HeartFilledIcon';

type FavoriteButtonProps = {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  size?: number;
};

export const FavoriteButton = ({
  selected,
  onClick,
  className,
}: FavoriteButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn(className)}
    size={40}
  >
    {selected ?
      <HeartFilledIcon className="w-[16px] h-[16px]" />
    : <HeartIcon className="w-[16px] h-[16px]" />}
  </UtilityButton>
);
