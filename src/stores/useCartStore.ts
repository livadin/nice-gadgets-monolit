import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SimpleProduct } from '../types/CategoryProduct';
import { notifyAddToCart, notifyCheckoutSuccess, notifyRemoveFromCart } from '../utilities/notify';
import { useNotificationStore } from './notification.store';

const show = () => useNotificationStore.getState().showNotification;
export interface CartItem extends SimpleProduct {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  userId: string | null;
  addToCart: (product: SimpleProduct) => void;
  removeFromCart: (itemId: number | string) => void;
  increaseQuantity: (itemId: number | string) => void;
  decreaseQuantity: (itemId: number | string) => void;
  clearCart: () => void;
  checkout: () => void;
  setUserId: (userId: string | null) => void;
  loadUserCart: (userId: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      userId: null,

      setUserId: (userId) => {
        const currentUserId = get().userId;
        
        if (!userId && currentUserId) {
          set({ cart: [], userId: null });
          return;
        }

        if (userId && userId !== currentUserId) {
          set({ userId });
          get().loadUserCart(userId);
        }
      },

      loadUserCart: (userId) => {
        const storageKey = `cart_${userId}`;
        const saved = localStorage.getItem(storageKey);
        
        if (saved) {
          try {
            const cart = JSON.parse(saved);
            set({ cart, userId });
          } catch (error) {
            console.error('Error load shop:', error);
            set({ cart: [], userId });
          }
        } else {
          set({ cart: [], userId });
        }
      },

      addToCart: (product) => {
        const { cart, userId } = get();

        const existingItem = cart.find((item) => item.itemId === product.itemId);

        let updated: CartItem[];

        if (existingItem) {
          updated = cart.map((item) =>
            item.itemId === product.itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updated = [...cart, { ...product, quantity: 1 }];
        }

        set({ cart: updated });

        if (userId) {
          localStorage.setItem(`cart_${userId}`, JSON.stringify(updated));
        }

        notifyAddToCart(product.name);
      },

      removeFromCart: (itemId) => {
        const { cart, userId } = get();

        const removedItem = cart.find(item => item.itemId === itemId);
        const updated = cart.filter((item) => item.itemId !== itemId);

        set({ cart: updated });

        if (userId) {
          localStorage.setItem(`cart_${userId}`, JSON.stringify(updated));
        }

        if (removedItem) {
          notifyRemoveFromCart(removedItem.name);
        }
      },

      increaseQuantity: (itemId) => {
        const { cart, userId } = get();

        const updated = cart.map((item) =>
          item.itemId === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        set({ cart: updated });

        if (userId) {
          localStorage.setItem(`cart_${userId}`, JSON.stringify(updated));
        }
      },

      decreaseQuantity: (itemId) => {
        const { cart, userId } = get();

        const updated = cart.map((item) =>
          item.itemId === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        set({ cart: updated });

        if (userId) {
          localStorage.setItem(`cart_${userId}`, JSON.stringify(updated));
        }
      },

      clearCart: () => {
        const { userId } = get();

        set({ cart: [] });

        if (userId) {
          localStorage.setItem(`cart_${userId}`, JSON.stringify([]));
        }
      },

      checkout: () => {
        const { cart, userId } = get();

        if (!cart.length) {
          show()(
            'Your cart is empty',
            'info'
          );
          return;
        }

        set({ cart: [] });

        if (userId) {
          localStorage.setItem(`cart_${userId}`, JSON.stringify([]));
        }

        notifyCheckoutSuccess();
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);