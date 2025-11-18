import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { SearchIcon } from '../Icons/SearchIcon';

type SearchButtonProps = {
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
};

export const SearchButton = ({
  onClick,
  width = 16,
  height = 16,
  className,
}: SearchButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group border-none', className)}
    width={width}
    height={height}
  >
    <SearchIcon
      className={cn(
        'w-4 h-4',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
