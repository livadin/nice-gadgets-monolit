import { useMemo } from 'react';
import { useProductsControls, type CategoryKey } from '../stores/useProductsControls';
import type { SimpleProduct } from '../types/CategoryProduct';

const getModelNumber = (itemId: string) => {
  const parts = itemId.split('-');
  return parseInt(parts[2]) || 0;
};

const getCapacityNumber = (capacity: string) => {
  return parseInt(capacity) || 0;
};

export const useFilteredProducts = (
  products: SimpleProduct[],
  category: CategoryKey
) => {
  const { getCategory } = useProductsControls();

  const { sort, perPage, currentPage } = getCategory(category);

  const filteredProducts = useMemo(() => {
    const result = [...products];

    switch (sort) {
      case 'Cheapest':
        result.sort((a, b) => {
          const priceDiff = a.price - b.price;
          if (priceDiff !== 0) return priceDiff;

          const modelDiff =
            getModelNumber(a.itemId) - getModelNumber(b.itemId);
          if (modelDiff !== 0) return modelDiff;

          return getCapacityNumber(a.capacity)
            - getCapacityNumber(b.capacity);
        });
        break;

      case 'Most expensive':
        result.sort((a, b) => {
          const priceDiff = b.price - a.price;
          if (priceDiff !== 0) return priceDiff;

          const modelDiff =
            getModelNumber(b.itemId) - getModelNumber(a.itemId);
          if (modelDiff !== 0) return modelDiff;

          return getCapacityNumber(b.capacity)
            - getCapacityNumber(a.capacity);
        });
        break;

      case 'Newest':
        result.sort((a, b) => {
          const yearDiff = (b.year ?? 0) - (a.year ?? 0);
          if (yearDiff !== 0) return yearDiff;

          const modelDiff =
            getModelNumber(b.itemId) - getModelNumber(a.itemId);
          if (modelDiff !== 0) return modelDiff;

          return getCapacityNumber(b.capacity)
            - getCapacityNumber(a.capacity);
        });
        break;

      case 'Oldest':
        result.sort((a, b) => {
          const yearDiff = (a.year ?? 0) - (b.year ?? 0);
          if (yearDiff !== 0) return yearDiff;

          const modelDiff =
            getModelNumber(a.itemId) - getModelNumber(b.itemId);
          if (modelDiff !== 0) return modelDiff;

          return getCapacityNumber(a.capacity)
            - getCapacityNumber(b.capacity);
        });
        break;
    }

    return result;
  }, [products, sort]);


  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage, perPage]);

  return {
    products: paginatedProducts,
    totalAfterFilter: filteredProducts.length,
  };
}
