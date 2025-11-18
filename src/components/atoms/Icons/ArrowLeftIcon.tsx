import { ChevronLeftIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const ArrowLeftIcon: React.FC<Props> = ({ className }) => {
  return <ChevronLeftIcon className={cn('w-4 h-4 text-icon', className)} />;
};