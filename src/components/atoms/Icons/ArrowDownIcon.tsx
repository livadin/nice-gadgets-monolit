import { ChevronDownIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const ArrowDownIcon: React.FC<Props> = ({ className }) => {
  return <ChevronDownIcon className={cn('w-4 h-4 text-icon', className)} />;
};