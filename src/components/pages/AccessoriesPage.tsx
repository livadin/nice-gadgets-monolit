import { useMemo } from 'react';
import { useProducts } from '../../hooks/useProduct';
import { getAccessories, getProducts } from '../../utilities/fetchApi';
import { ProductsPageTemplate } from '../templates/ProductsPageTemplate/ProductsPageTemplate';
import { ItemCard } from '../templates/ItemCard/ItemCard';
import { useCurrentProduct } from '../../hooks/useCurrentProduct';
import { ErrorComponent } from '../organisms/ErrorComponent';

export const AccessoriesPage = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);
  const { data: categoryProducts } = useProducts(getAccessories);
  const { currentProduct, productSlug } = useCurrentProduct(categoryProducts);
  
  const accessories = useMemo(() => {
    return products.filter((p) => p.category === 'accessories');
  }, [products]);

  if (hasError) {
    return <ErrorComponent />
  }
  
  return (
    <>
      {!productSlug ?
        <ProductsPageTemplate
          isLoading={isLoading}
          title={'Accessories'}
          products={accessories}
          totalProducts={accessories.length}
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
