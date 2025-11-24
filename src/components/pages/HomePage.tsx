import {
  getAccessories,
  getPhones,
  getProducts,
  getTablets,
} from '../../utilities/fetchApi';
import { useProducts } from '../../hooks/useProduct';
import { HomePageTemplate } from '../templates/HomePageTemplate';
import { useHomePageProducts } from '../../hooks/useHomePageProducts';
import { ErrorComponent } from '../organisms/ErrorComponent';

export const HomePage: React.FC = () => {
  const { data: products, isLoading, hasError } = useProducts(getProducts);
  const { data: phones } = useProducts(getPhones);
  const { data: tablets } = useProducts(getTablets);
  const { data: accessories } = useProducts(getAccessories);

  const { hotPricesProducts, brandNewProducts } = useHomePageProducts(products);

  const categoryImages = [
    'gadgets/img/category-phones.webp',
    'gadgets/img/category-tablets.webp',
    'gadgets/img/category-accessories.webp',
  ];

  if (hasError) {
    return <ErrorComponent />
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
      categoriesCount={[phones.length, tablets.length, accessories.length]}
      secondSliderTitle={'Hot prices'}
      secondSliderProducts={hotPricesProducts}
    />
  );
};
