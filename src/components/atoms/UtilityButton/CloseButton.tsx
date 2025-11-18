import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { CloseIcon } from '../Icons/CloseIcon';

type CloseButtonProps = {
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
};

export const CloseButton = ({
  onClick,
  className,
  width = 48,
  height = 48,
}: CloseButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group', className)}
    width={width}
    height={height}
  >
    <CloseIcon
      className={cn(
        'w-[16px] h-[16px]',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
