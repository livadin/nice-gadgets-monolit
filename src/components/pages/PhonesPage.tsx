import { useMemo } from 'react';
import { useProducts } from '../../hooks/useProduct';
import { getPhones, getProducts } from '../../utilities/fetchApi';
import { ProductsPageTemplate } from '../templates/ProductsPageTemplate/ProductsPageTemplate';
import { ItemCard } from '../templates/ItemCard/ItemCard';
import { useCurrentProduct } from '../../hooks/useCurrentProduct';
import { ErrorComponent } from '../organisms/ErrorComponent';
import { useProductsControls, type CategoryKey } from '../../stores/useProductsControls';
import { useSyncParamsByCategory } from '../../hooks/useSyncParamsByCategory';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import type { SortOption } from '../../types/SortProducts';

export const PhonesPage: React.FC = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);
  const { data: categoryProducts } = useProducts(getPhones);
  const { currentProduct, productSlug } = useCurrentProduct(categoryProducts);

  const CATEGORY: CategoryKey = 'phones';

  useSyncParamsByCategory(CATEGORY);

  const { getCategory, setSort, setPerPage, setCurrentPage } =
    useProductsControls();

  const { sort, perPage, currentPage } = getCategory(CATEGORY);

  const phones = useMemo(() => {
    return products.filter((p) => p.category === 'phones');
  }, [products]);

  const { products: filteredPhones, totalAfterFilter } =
    useFilteredProducts(phones, CATEGORY);

  if (hasError) {
    return <ErrorComponent />;
  }

  return (
    <>
      {!productSlug ?
        <ProductsPageTemplate
          isLoading={isLoading}
          title={'Mobile phones'}
          products={filteredPhones}
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
