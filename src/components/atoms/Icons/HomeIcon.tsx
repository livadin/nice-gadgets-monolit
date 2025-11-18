import { HomeIcon as RadixHomeIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const HomeIcon: React.FC<Props> = ({ className }) => {
  return (
    <RadixHomeIcon
      className={cn('w-[16px] h-[16px] text-primary', className)}
    />
  );
};
