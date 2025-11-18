
import { ArchiveIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const ShoppingBag: React.FC<Props> = ({ className }) => {
  return (
    <ArchiveIcon className={cn('w-4 h-4 text-primary', className)} />
  );
};
