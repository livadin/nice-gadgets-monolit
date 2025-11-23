import { Outlet } from "react-router-dom";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export const HomeLayout = () => {
  return (
    <>
      <Header />
        <main className="
          pt-[72px] md:pt-20 lg:pt-[120px]
          pb-16
          mx-auto
          max-w-[288px] md:max-w-[592px] lg:max-w-[1136px]
        ">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};