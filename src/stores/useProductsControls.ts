import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SortOption } from '../types/SortProducts';

export type CategoryKey = 'phones' | 'tablets' | 'accessories';

export type CategoryFilters = {
  sort: SortOption;
  perPage: number;
  currentPage: number;
};

type ProductsControlsState = {
  categories: Record<CategoryKey, CategoryFilters>;

  setSort: (category: CategoryKey, value: SortOption) => void;
  setPerPage: (category: CategoryKey, value: number) => void;
  setCurrentPage: (category: CategoryKey, value: number) => void;

  resetCategory: (category: CategoryKey) => void;
  getCategory: (category: CategoryKey) => CategoryFilters;
}

const initialCategoryState: CategoryFilters = {
  sort: 'Newest',
  perPage: 16,
  currentPage: 1,
};

export const useProductsControls = create<ProductsControlsState>()(
  persist(
    (set, get) => ({
      categories: {
        phones: { ...initialCategoryState },
        tablets: { ...initialCategoryState },
        accessories: { ...initialCategoryState },
      },

      setSort: (category, value) =>
        set(state => ({
          categories: {
            ...state.categories,
            [category]: {
              ...state.categories[category],
              sort: value,
              currentPage: 1,
            },
          },
        })),

      setPerPage: (category, value) =>
        set(state => ({
          categories: {
            ...state.categories,
            [category]: {
              ...state.categories[category],
              perPage: value,
              currentPage: 1,
            },
          },
        })),
      setCurrentPage: (category, value) =>
        set(state => ({
          categories: {
            ...state.categories,
            [category]: {
              ...state.categories[category],
              currentPage: value,
            },
          },
        })),

      resetCategory: (category) =>
        set(state => ({
          categories: {
            ...state.categories,
            [category]: { ...initialCategoryState },
          },
        })),
      getCategory: (category) => get().categories[category],
    }),
    {
      name: 'products-controls',
    }
  )
);