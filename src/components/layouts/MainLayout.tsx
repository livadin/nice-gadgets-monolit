import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { ScrollToTop } from '../../utilities/ScrollToTop';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
      <Header />
      <ScrollToTop />
      <main
        className="
        flex-1
      bg-white 
        transition-colors duration-300
        pt-[72px] lg:pt-[88px]
        pb-16
        mx-auto
        max-w-[288px] md:max-w-[592px] lg:max-w-[1136px]
      "
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
