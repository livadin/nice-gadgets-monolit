import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SimpleProduct } from '../types/CategoryProduct';

interface FilteredProductsState {
  products: SimpleProduct[];
  resultInfo: string;
  setSearchProducts: (products: SimpleProduct[]) => void;
  setResultInfo: (value: string) => void;
  clearProducts: () => void;
}

export const useSearchProducts = create<FilteredProductsState>()(
  persist(
    (set) => ({
      products: [],
      resultInfo: '',

      setSearchProducts: (products) => set({ products }),
      setResultInfo: (value) => set({ resultInfo: value }),

      clearProducts: () => set({ products: [], resultInfo: '' }),
    }),

    {
      name: 'search-products-storage',
      partialize: (state) => ({
        products: state.products,
        resultInfo: state.resultInfo,
      }),
    },
  ),
);
