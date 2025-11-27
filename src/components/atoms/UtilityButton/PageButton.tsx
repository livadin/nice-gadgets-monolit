import cn from 'classnames';
import { UtilityButton } from './UtilityButton';

interface PageButtonProps {
  page: number | string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
}

export const PageButton = ({
  page,
  selected,
  disabled,
  onClick,
  width = 32,
  height = 32,
  className,
}: PageButtonProps) => (
  <UtilityButton
    width={width}
    height={height}
    selected={selected}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      selected
        ? 'group bg-primary-dark'
        : 'group bg-white-card hover:bg-white-gray-elements',
      className
    )}
  >
    <span
      className={cn(
        'w-4 h-4 inline-flex items-center justify-center',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    >
      {page}
    </span>
  </UtilityButton>
);
