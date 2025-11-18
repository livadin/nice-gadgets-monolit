import cn from 'classnames';
import { UtilityButton } from './UtilityButton';

interface ColorButtonProps {
  color: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ColorButton = ({
  color,
  selected,
  onClick,
  className,
}: ColorButtonProps) => (
  <UtilityButton
    variant="round"
    onClick={onClick}
    className={cn(
      'border-1',
      {
        'border-primary': selected,
      },
      className,
    )}
    size={40}
  >
    <span
      className="block rounded-full"
      style={{
        width: 30,
        height: 30,
        backgroundColor: color,
      }}
    />
  </UtilityButton>
);
