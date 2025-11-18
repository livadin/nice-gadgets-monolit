import cn from 'classnames';
import { UtilityButton } from './UtilityButton';
import { SearchIcon } from '../Icons/SearchIcon';



type SearchButtonProps = {
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
};

export const SearchButton = ({
  onClick,
  className,
  width = 16,
  height = 16,
}: SearchButtonProps) => (
  <UtilityButton
    onClick={onClick}
    className={cn('group border-none', className)}
    width={width}
    height={height}
  >
    <SearchIcon
      className={cn(
        'w-[16px] h-[16px]',
        'transition-transform duration-200 ease-in-out',
        'group-hover:scale-130',
        'group-active:scale-155',
      )}
    />
  </UtilityButton>
);
