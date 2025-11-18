import cn from 'classnames';
import { UtilityButton } from './UtilityButton';

interface ColorButtonProps {
  color: string;
  selected?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
}

export const ColorButton = ({
  color,
  selected,
  onClick,
  width = 32,
  height = 32,
}: ColorButtonProps) => (
  <UtilityButton
    variant="round"
    onClick={onClick}
    className={cn(
      'border',
      {
        'border-primary': selected,
      },
      'group',
    )}
    width={width}
    height={height}
  >
    <span
      className="block rounded-full bg-white p-px"
      style={{
        width: width - 2,
        height: height - 2,
      }}
    >
      <span
        className={cn(
          'block rounded-full',
          'transition-transform duration-200 ease-in-out',
          'group-hover:scale-100',
          'group-active:scale-115',
        )}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: color,
        }}
      />
    </span>
  </UtilityButton>
);
