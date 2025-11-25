import { useMemo } from 'react';
import { useProducts } from '../../hooks/useProduct';
import { getProducts, getTablets } from '../../utilities/fetchApi';
import { ProductsPageTemplate } from '../templates/ProductsPageTemplate/ProductsPageTemplate';
import { useCurrentProduct } from '../../hooks/useCurrentProduct';
import { ItemCard } from '../templates/ItemCard/ItemCard';
import { ErrorComponent } from '../organisms/ErrorComponent';
import {
  useProductsControls,
  type CategoryKey,
} from '../../stores/useProductsControls';
import { useSyncParamsByCategory } from '../../hooks/useSyncParamsByCategory';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import type { SortOption } from '../../types/SortProducts';

export const TabletsPage = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);
  const { data: categoryProducts } = useProducts(getTablets);
  const { currentProduct, productSlug } = useCurrentProduct(categoryProducts);

  const CATEGORY: CategoryKey = 'tablets';

  useSyncParamsByCategory(CATEGORY);

  const { getCategory, setSort, setPerPage, setCurrentPage } =
    useProductsControls();

  const { sort, perPage, currentPage } = getCategory(CATEGORY);

  const tablets = useMemo(() => {
    return products.filter((p) => p.category === 'tablets');
  }, [products]);

  const { products: filteredTablets, totalAfterFilter } = useFilteredProducts(
    tablets,
    CATEGORY,
  );

  if (hasError) {
    return <ErrorComponent />
  }

  return (
    <>
      {!productSlug ?
        <ProductsPageTemplate
          isLoading={isLoading}
          title={'Tablets'}
          products={filteredTablets}
          totalProducts={totalAfterFilter}
          sort={sort}
          perPage={perPage}
          currentPage={currentPage}
          onSortChange={(value) => setSort(CATEGORY, value as SortOption)}
          onPerPageChange={(value) => setPerPage(CATEGORY, Number(value))}
          onPageChange={(page) => setCurrentPage(CATEGORY, page)}
        />
      : <ItemCard
          isLoading={isLoading}
          itemProduct={currentProduct}
          productList={categoryProducts}
          productsForSlider={products}
        />
      }
    </>
  );
};
