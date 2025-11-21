import { useEffect, useState } from 'react';
import { MenuButton } from '../atoms/UtilityButton/MenuButton';
import { HeaderActions } from '../molecules/HeaderActions/HeaderActions.tsx';
import { Navbar } from '../molecules/HeaderActions/Navbar';
import { MobileMenu } from '../organisms/MobileMenu';
import { Logo } from '../atoms/Logo/Logo.tsx';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  {
    /* I added useEffect to block scrolling when Menu is open */
  }
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 pl-4 w-full bg-white h-12 lg:h-16 border-b border-element z-50">
      <div className="flex items-center justify-between h-full lg:pl-6 pr-0">
        <div className="flex items-center h-full">
          <Logo className="w-16 h-5 md:h-[22px] lg:w-20 lg:h-7"/>
          <Navbar className="ml-10 lg:ml-10" />
        </div>

        <div className="flex items-center h-full">
          <HeaderActions />
          <MenuButton
            className="md:hidden h-full w-12 lg:w-16"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </header>
  );
};
