import cn from 'classnames';
import { UtilityButton } from './UtilityButton';

interface PageButtonProps {
  page: number;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const PageButton = ({ page, selected, disabled, onClick, className }: PageButtonProps) => (
  <UtilityButton size={32} selected={selected} disabled={disabled} onClick={onClick} className={cn("", className)}>
    {page}
  </UtilityButton>
);
