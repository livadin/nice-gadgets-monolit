import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { IconPlus } from '../Icons/IconPlus';



type PlusButtonProps = {
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
};

export const PlusButton = ({
  onClick,
  className,
  width = 32,
  height = 32,
}: PlusButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    <IconPlus
      className={cn(
        'w-[16px] h-[16px]',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
