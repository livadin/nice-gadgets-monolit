import { getProducts } from '../../utilities/fetchApi';
import { useProducts } from '../../hooks/useProduct';
import { HomePageTemplate } from '../templates/HomePageTemplate';
import { useHomePageProducts } from '../../hooks/useHomePageProducts';
import { ErrorComponent } from '../organisms/ErrorComponent';
import { useMemo } from 'react';

export const HomePage: React.FC = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);

  const { hotPricesProducts, brandNewProducts } = useHomePageProducts(products);

  const categoryImages = [
    'gadgets/img/category-phones.webp',
    'gadgets/img/category-tablets.webp',
    'gadgets/img/category-accessories.webp',
  ];

  const phonesCount = useMemo(
    () => products.filter((p) => p.category === 'phones').length,
    [products],
  );

  const tabletsCount = useMemo(
    () => products.filter((p) => p.category === 'tablets').length,
    [products],
  );

  const accessoriesCount = useMemo(
    () => products.filter((p) => p.category === 'accessories').length,
    [products],
  );

  if (hasError) {
    return <ErrorComponent />;
  }

  return (
    <HomePageTemplate
      isLoading={isLoading}
      title={'Welcome to Monolit store!'}
      firstSliderTitle={'Brand new models'}
      firstSliderProducts={brandNewProducts}
      categoryTitle={'Shop by category'}
      categoryImages={categoryImages}
      categoryColors={['#4d4c4e', '#7b7a7c', '#d7c1cf']}
      categoriesCount={[phonesCount, tabletsCount, accessoriesCount]}
      secondSliderTitle={'Hot prices'}
      secondSliderProducts={hotPricesProducts}
    />
  );
};
