import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import type { CategoryProduct } from '../types/CategoryProduct';

export function useCurrentProduct(categoryProducts: CategoryProduct[]) {
  const { productSlug } = useParams<{ productSlug?: string }>();

  const currentProduct = useMemo(() => {
    if (!productSlug || !categoryProducts?.length) return undefined;
    return categoryProducts.find((p) => p?.id === productSlug);
  }, [productSlug, categoryProducts]);

  useEffect(() => {
    if (productSlug) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [productSlug]);

  return { currentProduct, productSlug };
}
