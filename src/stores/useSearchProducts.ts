import { create } from 'zustand';
import type { SimpleProduct } from '../types/CategoryProduct';

interface FilteredProductsState {
  products: SimpleProduct[];
  resultInfo: string;
  setSearchProducts: (products: SimpleProduct[]) => void;
  setResultInfo: (value: string) => void;
  clearProducts: () => void;
}

export const useSearchProducts = create<FilteredProductsState>((set) => ({
  products: [],
  resultInfo: '',
  setSearchProducts: (products) => set({ products }),
  setResultInfo: (value) => set({ resultInfo: value }),
  clearProducts: () => set({ products: [] }),
}));
