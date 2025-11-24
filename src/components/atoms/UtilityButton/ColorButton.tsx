import cn from 'classnames';
import { UtilityButton } from './UtilityButton';

interface ColorButtonProps {
  color: string;
  selected?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string
}

const colorMap: Record<string, string> = {
  // Base colors
  black: '#1F2020',
  white: '#F9F6EF',
  red: '#BA0C2E',
  green: '#ADE0CD',
  yellow: '#FFE681',
  purple: '#D1CDDA',
  blue: '#215E7C',
  pink: '#FAE0D8',
  coral: '#FF7F50',
  
  // Apple specific colors
  spacegray: '#535150',
  'space gray': '#535150',
  'space-gray': '#535150',
  
  silver: '#E2E4E1',
  gold: '#F9E5C9',
  rosegold: '#B76E79',
  'rose gold': '#B76E79',
  
  midnightgreen: '#4E5851',
  'midnight green': '#4E5851',
  
  midnight: '#191F26',
  starlight: '#F0F0E5',
  
  sierrablue: '#BFDAF7',
  'sierra blue': '#BFDAF7',
  
  graphite: '#41424C',
  spaceblack: '#2E2C2E',
  'space black': '#2E2C2E',
  'sky blue': '#87CEEB',
  'sky-blue': '#87CEEB',
};

export const ColorButton = ({
  color,
  selected,
  onClick,
  width = 32,
  height = 32,
  className,
}: ColorButtonProps) => {
  const backgroundColor = colorMap[color.toLowerCase()] || color;

  return (
    <UtilityButton
      variant="round"
      onClick={onClick}
      className={cn(
        'border',
        {
          'border-primary': selected,
          'border-element': !selected, 
        },
        'group',
        className,
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
            { 'border border-gray-200': ['white', 'silver', 'starlight'].includes(color.toLowerCase()) }
          )}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: backgroundColor,
          }}
        />
      </span>
    </UtilityButton>
  );
};