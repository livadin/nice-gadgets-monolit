import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { HomeIcon } from '../Icons/HomeIcon';


type HomeButtonProps = {
  onClick?: () => void;
  width?: number;
  height?: number;
};

export const HomeButton = ({
  onClick,
  width = 16,
  height = 16,
}: HomeButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group border-none')}
    width={width}
    height={height}
  >
    <HomeIcon
      className={cn(
        'w-4 h-4',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
