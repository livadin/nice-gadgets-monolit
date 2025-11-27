import { useEffect, useState } from 'react';
import { MenuButton } from '../atoms/UtilityButton/MenuButton';
import { HeaderActions } from '../molecules/HeaderActions/HeaderActions';
import { Navbar } from '../molecules/HeaderActions/Navbar';
import { MobileMenu } from '../organisms/MobileMenu';
import { Logo } from '../atoms/Logo/Logo';
import { SearchButtonWithInput } from '../atoms/UtilityButton/SearchButtonWithInput';
import { SearchInput } from '../molecules/SearchInput/SearchInput';
import { ThemeButton } from '../atoms/UtilityButton/ThemeButton';
import { useRefreshStore } from '../../stores/useRefreshStore';
import { useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export const Header: React.FC = () => {
    const triggerRefresh = useRefreshStore((s) => s.triggerRefresh);
    const location = useLocation();
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
          <SearchInput />
        </div>

        <div className="flex items-center h-full">
          <div className="flex lg:hidden items-center">
             <SearchButtonWithInput className="w-[48px] h-[48px]" />
          </div>
  
          <ThemeButton onClick={
            location.pathname === '/contacts' || location.pathname === '/rights'
              ? triggerRefresh
              : undefined
          } />
         
          <HeaderActions />
          
            <SignedOut>
              <SignInButton mode="modal">
                <div className="group relative w-[47px] h-[47px] lg:w-[63px] lg:h-[63px] flex justify-center items-center border 
                    border-element dark:border-element cursor-pointer hover:border-primary 
                    dark:hover:border-primary transition-colors duration-300">
                  <svg className="w-4.5 h-4.5 transition-transform duration-200 ease-in-out group-hover:scale-130 group-active:scale-155 text-white-dark-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </SignInButton>
            </SignedOut>

            <SignedIn>
                <div className="relative w-[47px] h-[47px] lg:w-[63px] lg:h-[63px] flex justify-center items-center border 
                  border-element dark:border-element cursor-pointer hover:border-primary 
                  dark:hover:border-primary transition-colors duration-300">
                <UserButton />
              </div>
            </SignedIn>

          <MenuButton
            className="lg:hidden h-full w-12 lg:w-16 transition-colors duration-300"
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