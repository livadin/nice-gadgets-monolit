import { useEffect, useState } from 'react';
import { Logo } from '../atoms/Logo/Logo';
import { MenuButton } from '../atoms/UtilityButton/MenuButton';
import { HeaderActions } from '../molecules/HeaderActions/HeaderActions.tsx';
import { Navbar } from '../molecules/HeaderActions/Navbar';
import { MobileMenu } from '../organisms/MobileMenu';

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
    <header className="fixed top-0 left-0 w-full bg-white h-12 lg:h-16 border-b border-element z-50">
      <div className="flex items-center justify-between h-full pl-4 lg:pl-6 pr-0">
        <div className="flex items-center h-full">
          <Logo />
          <Navbar className="ml-4 lg:ml-6" />
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
