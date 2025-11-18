import { MinusIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const IconMinus: React.FC<Props> = ({ className }) => {
  return <MinusIcon className={cn('w-[16px] h-[16px] text-icon', className)} />;
};