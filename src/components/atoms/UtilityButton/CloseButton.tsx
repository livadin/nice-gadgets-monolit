import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { CloseIcon } from '../Icons/CloseIcon';

type CloseButtonProps = {
  onClick?: () => void;
  width?: number;
  height?: number;
};

export const CloseButton = ({
  onClick,
  width = 48,
  height = 48,
}: CloseButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group')}
    width={width}
    height={height}
  >
    <CloseIcon
      className={cn(
        'w-4 h-4',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
