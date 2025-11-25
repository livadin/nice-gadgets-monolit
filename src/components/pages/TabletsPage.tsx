import { getProducts, getTablets } from '../../utilities/fetchApi';
import { ProductsPageTemplate } from '../templates/ProductsPageTemplate/ProductsPageTemplate';
import { ItemCard } from '../templates/ItemCard/ItemCard';
import { ErrorComponent } from '../organisms/ErrorComponent';
import { type CategoryKey } from '../../stores/useProductsControls';
import { useCategoryPage } from '../../hooks/useCategoryPage';

export const TabletsPage = () => {
  const CATEGORY: CategoryKey = 'tablets';

  const {
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
  } = useCategoryPage(CATEGORY, getProducts, getTablets);

  if (hasError) {
    return <ErrorComponent />;
  }

  return (
    <>
      {!productSlug ?
        <ProductsPageTemplate
          isLoading={isLoading}
          title={'Tablets'}
          products={filteredProducts}
          totalProducts={totalAfterFilter}
          sort={sort}
          perPage={perPage}
          currentPage={currentPage}
          onSortChange={handleSortChange}
          onPerPageChange={handlePerPageChange}
          onPageChange={handlePageChange}
        />
      : <ItemCard
          isLoading={isLoading}
          itemProduct={currentProduct}
          productList={categoryProducts}
          allProducts={products}
        />
      }
    </>
  );
};
