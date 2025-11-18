import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const SearchIcon: React.FC<Props> = ({ className }) => {
  return <MagnifyingGlassIcon className={cn('w-4 h-4 text-primary', className)} />;
};