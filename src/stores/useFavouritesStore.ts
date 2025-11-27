import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SimpleProduct } from '../types/CategoryProduct';
import { notifyAddToFavourites, notifyRemoveFromFavourites } from '../utilities/notify';

interface FavouritesState {
  favourites: SimpleProduct[];
  userId: string | null;
  toggleFavourite: (product: SimpleProduct) => void;
  setUserId: (userId: string | null) => void;
  loadUserFavourites: (userId: string) => void;
  clearFavourites: () => void;
}

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],
      userId: null,

      setUserId: (userId) => {
        const currentUserId = get().userId;
        
        if (!userId && currentUserId) {
          set({ favourites: [], userId: null });
          return;
        }

        if (userId && userId !== currentUserId) {
          set({ userId });
          get().loadUserFavourites(userId);
        }
      },

      loadUserFavourites: (userId) => {
        const storageKey = `favourites_${userId}`;
        const saved = localStorage.getItem(storageKey);
        
        if (saved) {
          try {
            const favourites = JSON.parse(saved);
            set({ favourites, userId });
          } catch (error) {
            console.error('Error load favourites:', error);
            set({ favourites: [], userId });
          }
        } else {
          set({ favourites: [], userId });
        }
      },

      toggleFavourite: (product) => {
        const { favourites, userId } = get();

        const isExists = favourites.some(
          (p) => p.itemId === product.itemId
        );

        if (isExists) {
          const removedItem = favourites.find(
            (p) => p.itemId === product.itemId
          );

          const updated = favourites.filter(
            (p) => p.itemId !== product.itemId
          );

          set({ favourites: updated });

          if (userId) {
            localStorage.setItem(`favourites_${userId}`, JSON.stringify(updated));
          }

          if (removedItem) {
            notifyRemoveFromFavourites(removedItem.name);
          }

          return;
        }

        const updated = [...favourites, product];
        set({ favourites: updated });

        if (userId) {
          localStorage.setItem(`favourites_${userId}`, JSON.stringify(updated));
        }

        notifyAddToFavourites(product.name);
      },

      clearFavourites: () => {
        const { userId } = get();
        
        set({ favourites: [] });

        if (userId) {
          localStorage.setItem(`favourites_${userId}`, JSON.stringify([]));
        }
      },
    }),
    {
      name: 'favourites-storage',
    }
  )
);