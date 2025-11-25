import { useMemo } from 'react';
import type { SimpleProduct } from '../types/CategoryProduct';

export const useRecommendedProducts = (
  allProducts: SimpleProduct[] = [],
  currentProduct: SimpleProduct | null,
  limit = 8
) => {
  return useMemo(() => {
    if (!Array.isArray(allProducts) || !allProducts.length || !currentProduct) {
      return [];
    }

    const getScore = (product: SimpleProduct) => {
      let score = 0;

      const model = currentProduct.itemId.split('-').slice(0, 3).join('-');

      if (product.itemId.startsWith(model)) score += 3;
      if (product.ram === currentProduct.ram) score += 1;
      if (product.capacity === currentProduct.capacity) score += 1;
      if (product.screen === currentProduct.screen) score += 1;

      return score;
    };

    return allProducts
      .filter(
        p =>
          p.id !== currentProduct.id &&
          p.category === currentProduct.category,
      )
      .sort((a, b) => getScore(b) - getScore(a))
      .slice(0, limit);

  }, [allProducts, currentProduct, limit]);
};