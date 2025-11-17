import { ChevronLeftIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const ArrowLeftIcon: React.FC<Props> = ({ className }) => {
  return <ChevronLeftIcon className={cn('w-[16px] h-[16px] text-icon', className)} />;
};