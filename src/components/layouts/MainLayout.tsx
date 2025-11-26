import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { ScrollToTop } from '../../utilities/ScrollToTop';
import { useRefreshStore } from '../../stores/useRefreshStore';

export const MainLayout = () => {
    const token = useRefreshStore((s) => s.token);
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
          w-full
          px-4 
          md:px-0 
          md:max-w-[592px] 
          lg:max-w-[1136px]
        "
      >
        <Outlet key={token}/>
      </main>

      <Footer />
    </div>
  );
};
