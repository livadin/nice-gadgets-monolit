import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SimpleProduct } from '../types/CategoryProduct';
import { notifyAddToCart, notifyRemoveFromCart } from '../utilities/notify';

export interface CartItem extends SimpleProduct {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: SimpleProduct) => void;
  removeFromCart: (itemId: number | string) => void;
  increaseQuantity: (itemId: number | string) => void;
  decreaseQuantity: (itemId: number | string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.itemId === product.itemId);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.itemId === product.itemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }

        notifyAddToCart(product.name);
      },

      removeFromCart: (itemId) => {
        const { cart } = get();
        const removedItem = cart.find(item => item.itemId === itemId);

        set((state) => ({
          cart: state.cart.filter((item) => item.itemId !== itemId),
        }))

        if (removedItem) {
          notifyRemoveFromCart(removedItem.name);
        }
      },

      increaseQuantity: (itemId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.itemId === itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQuantity: (itemId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.itemId === itemId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);