import { PlusIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const IconPlus: React.FC<Props> = ({ className }) => {
  return <PlusIcon className={cn('w-4 h-4 text-primary', className)} />;
};