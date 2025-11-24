import { Outlet } from "react-router-dom";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">

      <Header />
        <main className="
          flex-1
          pt-[72px] md:pt-20 lg:pt-[120px]
          pb-16
          mx-auto
          max-w-[288px] md:max-w-[592px] lg:max-w-[1136px]
        ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};