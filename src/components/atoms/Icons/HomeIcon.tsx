import { HomeIcon as RadixHomeIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const HomeIcon: React.FC<Props> = ({ className }) => {
  return (
    <RadixHomeIcon
      className={cn('w-4 h-4 text-primary', className)}
    />
  );
};
