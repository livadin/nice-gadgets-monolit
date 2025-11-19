import type React from "react";
import { Footer } from "../organisms/Footer";

export const FavoritesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow container mx-auto px-4 md:px-6 xl:px-0 max-w-[1136px]">
        <div className="mb-8">
          <h1 className="text-[32px] md:text-[48px] font-bold text-primary mb-2">Favourites</h1>
          <p className="text-secondary text-sm font-semibold">5 items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 mb-20">
          <p>Phone</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};