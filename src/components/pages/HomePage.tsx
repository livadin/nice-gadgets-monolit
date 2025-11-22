import { getAccessories, getPhones, getProducts, getTablets } from '../../utilities/fetchApi';
import { useProducts } from '../../hooks/useProduct';
import { HomePageTemplate } from '../templates/HomePageTemplate';

export const HomePage: React.FC = () => {
  const { data: products } = useProducts(getProducts);
  const { data: phones} = useProducts(getPhones);
  const { data: tablets } = useProducts(getTablets);
  const { data: accessories } = useProducts(getAccessories);

  const categoryImages = [
    'gadgets/img/category-phones.webp',
    'gadgets/img/category-tablets.webp',
    'gadgets/img/category-accessories.webp',
  ]

  return (
    <HomePageTemplate
      title={'Welcome to Monolit store!'}
      firstSliderTitle={'Brand new models'}
      firstSliderProducts={products}
      categoryTitle={'Shop by category'}
      categoryImages={categoryImages}
      categoryColors={['#4d4c4e', '#7b7a7c', '#d7c1cf']}
      categoriesCount={[phones.length, tablets.length, accessories.length]}
      secondSliderTitle={'Hot prices'}
      secondSliderProducts={products}
    />
  );
};
