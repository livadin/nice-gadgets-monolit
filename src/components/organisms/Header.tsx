import { useEffect, useState } from 'react';
import { MenuButton } from '../atoms/UtilityButton/MenuButton';
import { HeaderActions } from '../molecules/HeaderActions/HeaderActions';
import { Navbar } from '../molecules/HeaderActions/Navbar';
import { MobileMenu } from '../organisms/MobileMenu';
import { Logo } from '../atoms/Logo/Logo';
import { SearchButtonWithInput } from '../atoms/UtilityButton/SearchButtonWithInput';
import { SearchInput } from '../molecules/SearchInput/SearchInput';
import { ThemeButton } from '../atoms/UtilityButton/ThemeButton';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 pl-4 w-full bg-white h-12 lg:h-16 border-b transition-colors duration-300 border-element z-50">
      <div className="flex items-center justify-between h-full lg:pl-6 pr-0">
        
        <div className="flex items-center h-full">
          <Logo className="w-16 h-5 md:h-[22px] lg:w-20 lg:h-7"/>
          <Navbar className="ml-10 lg:ml-10" />
        </div>

        <div className="hidden lg:block w-[320px]">
          <SearchInput onSearch={() => {}} />
        </div>

        <div className="flex items-center h-full">
          <ThemeButton />
          <div className="flex lg:hidden items-center">
             <SearchButtonWithInput className="w-[48px] h-[48px]" />
          </div>
          
          <HeaderActions />
          
          <MenuButton
            className="md:hidden h-full w-12 lg:w-16 transition-colors duration-300"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
};