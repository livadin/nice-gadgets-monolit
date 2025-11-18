import { HeartFilledIcon as RadixHeartFilledIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const HeartFilledIcon: React.FC<Props> = ({ className }) => {
  return <RadixHeartFilledIcon className={cn('w-4 h-4 text-accent-red', className)} />;
};