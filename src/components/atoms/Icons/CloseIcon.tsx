import { Cross1Icon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const CloseIcon: React.FC<Props> = ({ className }) => {
  return <Cross1Icon className={cn('w-4 h-4 text-primary', className)} />;
};