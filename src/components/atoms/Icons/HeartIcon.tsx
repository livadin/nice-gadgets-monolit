import { HeartIcon as RadixHeartIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const HeartIcon: React.FC<Props> = ({ className }) => {
  return <RadixHeartIcon className={cn('w-4 h-4 text-primary', className)} />;
};
