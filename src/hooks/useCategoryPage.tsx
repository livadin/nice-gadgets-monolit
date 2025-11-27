import { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { useCurrentProduct } from './useCurrentProduct';
import { useFilteredProducts } from './useFilteredProducts';
import { useSyncParamsByCategory } from './useSyncParamsByCategory';

import {
  useProductsControls,
  type CategoryKey,
} from '../stores/useProductsControls';
import type { CategoryProduct, SimpleProduct } from '../types/CategoryProduct';
import { useProducts } from './useProduct';
import { useSearchProducts } from '../stores/useSearchProducts';

export const useCategoryPage = (
  category: CategoryKey,
  getAllProducts: () => Promise<SimpleProduct[]>,
  getCategoryProducts: () => Promise<CategoryProduct[]>,
) => {
  const { data: products, isLoading, hasError } = useProducts(getAllProducts);
  const { data: categoryProducts } = useProducts(getCategoryProducts);

  const { currentProduct, productSlug } = useCurrentProduct(categoryProducts);

  useSyncParamsByCategory(category);

  const [, setSearchParams] = useSearchParams();
  const { getCategory } = useProductsControls();

  const { sort, perPage, currentPage } = getCategory(category);

  const handleSortChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set('sort', value);
      prev.set('page', '1');
      return prev;
    });
  };

  const handlePerPageChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set('perPage', value);
      prev.set('page', '1');
      return prev;
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      prev.set('page', String(page));
      return prev;
    });
  };

   const { pathname } = useLocation();
   const [searchParams] = useSearchParams();
   const queryParam = searchParams.get('query') || '';

   const { products: searchProducts, resultInfo } = useSearchProducts();

   const isOnSearchResultsPage = pathname === '/searchResults';
   const useSearchStore =
     isOnSearchResultsPage &&
     Array.isArray(searchProducts) &&
     searchProducts.length > 0 &&
     (resultInfo === '' || resultInfo === queryParam || queryParam.length >= 0);

   const sourceItems = useMemo(() => {
     if (useSearchStore) return searchProducts;
     return products?.filter((p) => p.category === category) ?? [];
   }, [useSearchStore, searchProducts, products, category]);

  const { products: filteredProducts, totalAfterFilter } = useFilteredProducts(
    sourceItems,
    category,
  );

  return {
    isLoading,
    hasError,

    productSlug,
    currentProduct,

    filteredProducts,
    totalAfterFilter,

    sort,
    perPage,
    currentPage,

    handleSortChange,
    handlePerPageChange,
    handlePageChange,

    categoryProducts,
    products,
  };
};
