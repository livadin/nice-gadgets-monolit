import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SimpleProduct } from '../types/CategoryProduct';
import { notifyAddToFavourites, notifyRemoveFromFavourites } from '../utilities/notify';

interface FavouritesState {
  favourites: SimpleProduct[];
  toggleFavourite: (product: SimpleProduct) => void;
}

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],

      toggleFavourite: (product) => {
        const { favourites } = get();

        const isExists = favourites.some(
          (p) => p.itemId === product.itemId
        );

        if (isExists) {
          const removedItem = favourites.find(
            (p) => p.itemId === product.itemId
          );

          set({
            favourites: favourites.filter(
              (p) => p.itemId !== product.itemId
            ),
          });

          if (removedItem) {
            notifyRemoveFromFavourites(removedItem.name);
          }

          return;
        }

        set({
          favourites: [...favourites, product],
        });

        notifyAddToFavourites(product.name);
      },
    }),
    {
      name: 'favourites-storage',
    }
  )
);