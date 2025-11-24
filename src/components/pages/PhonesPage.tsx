import { useMemo } from 'react';
import { useProducts } from '../../hooks/useProduct';
import { getPhones, getProducts } from '../../utilities/fetchApi';
import { ProductsPageTemplate } from '../templates/ProductsPageTemplate/ProductsPageTemplate';
import { ItemCard } from '../templates/ItemCard/ItemCard';
import { useCurrentProduct } from '../../hooks/useCurrentProduct';
import { ErrorComponent } from '../organisms/ErrorComponent';

export const PhonesPage: React.FC = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);
  const { data: categoryProducts } = useProducts(getPhones);
  const { currentProduct, productSlug } = useCurrentProduct(categoryProducts);

  const phones = useMemo(() => {
    return products.filter((p) => p.category === 'phones');
  }, [products]);

  
  if (hasError) {
    return <ErrorComponent />
  }
  
  return (
    <>
      {!productSlug ?
        <ProductsPageTemplate
          isLoading={isLoading}
          title={'Mobile phones'}
          products={phones}
          totalProducts={phones.length}
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
