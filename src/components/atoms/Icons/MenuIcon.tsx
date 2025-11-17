import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import cn from 'classnames';

type Props = {
  className?: string;
};

export const MenuIcon: React.FC<Props> = ({ className }) => {
  return <HamburgerMenuIcon className={cn('w-[16px] h-[16px] text-primary', className)} />;
};