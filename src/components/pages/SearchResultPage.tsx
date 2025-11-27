import { ProductsPageTemplate } from '../templates/ProductsPageTemplate/ProductsPageTemplate';
import { getPhones, getProducts } from '../../utilities/fetchApi';
import { useCategoryPage } from '../../hooks/useCategoryPage';
import { ErrorComponent } from '../organisms/ErrorComponent';
import { useSearchProducts } from '../../stores/useSearchProducts';
import type { CategoryKey } from '../../stores/useProductsControls';

export const SearchResultPage: React.FC = () => {
  const { products, resultInfo } = useSearchProducts();
  const CATEGORY: CategoryKey = 'tablets';

  const {
    hasError,
    sort,
    perPage,
    currentPage,
    filteredProducts,
    handleSortChange,
    handlePerPageChange,
    handlePageChange,
  } = useCategoryPage(CATEGORY, getProducts, getPhones);

  if (hasError) {
    return <ErrorComponent />;
  }
  return (
    <>
      {products.length > 0 ?
        <ProductsPageTemplate
          isLoading={false}
          title={`Search results for "${resultInfo}"`}
          products={filteredProducts}
          totalProducts={products.length}
          sort={sort}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
          onSortChange={handleSortChange}
        />
      : <div className="h2 mt-[100px] lg:mt-0 text-primary">{`No search results for "${resultInfo}"`}</div>}
    </>
  );
};
