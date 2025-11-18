import { Logo } from '../atoms/Logo/Logo';
import { MenuButton } from '../atoms/UtilityButton/MenuButton';
import { HeaderActions } from '../molecules/HeaderActions/HeaderActions';
import { Navbar } from '../molecules/Navbar/Navbar';


export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white h-12 lg:h-16 border-b border-element z-50">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        <div className='flex items-center h-full'>
          <Logo />
          <Navbar className='ml-4 lg:ml-6'/>
        </div>

        <div className="flex items-center">
          <HeaderActions />
          <MenuButton />
        </div>
      </div>
    </header>
  );
};
