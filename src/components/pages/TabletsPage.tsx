import { useMemo } from 'react';
import { useProducts } from '../../hooks/useProduct';
import { getProducts, getTablets } from '../../utilities/fetchApi';
import { ProductsPageTemplate } from '../templates/ProductsPageTemplate/ProductsPageTemplate';
import { useCurrentProduct } from '../../hooks/useCurrentProduct';
import { ItemCard } from '../templates/ItemCard/ItemCard';
import { ErrorComponent } from '../organisms/ErrorComponent';

export const TabletsPage = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);
  const { data: categoryProducts } = useProducts(getTablets);
  const { currentProduct, productSlug } = useCurrentProduct(categoryProducts);

  const tablets = useMemo(() => {
    return products.filter((p) => p.category === 'tablets');
  }, [products]);

  if (hasError) {
    return <ErrorComponent />
  }

  return (
    <>
      {!productSlug ?
        <ProductsPageTemplate
          isLoading={isLoading}
          title={'Tablets'}
          products={tablets}
          totalProducts={tablets.length}
          sort={'Newest'}
          perPage={16}
          currentPage={1}
          onPageChange={() => {}}
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
