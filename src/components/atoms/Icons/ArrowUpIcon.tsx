import { ChevronUpIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const ArrowUpIcon: React.FC<Props> = ({ className }) => {
  return <ChevronUpIcon className={cn('w-4 h-4 text-icon', className)} />;
};