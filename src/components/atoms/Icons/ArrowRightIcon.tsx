import { ChevronRightIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const ArrowRightIcon: React.FC<Props> = ({ className }) => {
  return <ChevronRightIcon className={cn('w-4 h-4 text-icon', className)} />;
};