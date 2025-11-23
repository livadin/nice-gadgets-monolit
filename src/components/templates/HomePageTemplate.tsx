import type { SimpleProduct } from '../../types/CategoryProduct';
import { MainLoader } from '../atoms/Loaders/MainLoader';
import { ShopByCategory } from '../organisms/ShopByCategory';
import { ProductSlider } from '../organisms/Sliders/ProductSlider';
import { WelcomeSlider } from '../organisms/Sliders/WelcomeSlider/WelcomeSlider';

type Props = {
  isLoading: boolean;
  title: string;
  firstSliderTitle: string;
  firstSliderProducts: SimpleProduct[];
  categoryTitle: string;
  categoryImages: string[];
  categoryColors: string[];
  categoriesCount: number[];
  secondSliderTitle: string;
  secondSliderProducts: SimpleProduct[];
};

export const HomePageTemplate: React.FC<Props> = ({
  isLoading,
  title,
  firstSliderTitle,
  firstSliderProducts,
  categoryTitle,
  categoryImages,
  categoryColors,
  categoriesCount,
  secondSliderTitle,
  secondSliderProducts,
}) => {
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <MainLoader />
      </div>
    );
  
  return (
    <section>
      <h1 className="h1 mb-6 md:mb-8 lg:mb-14">{title}</h1>
      <div className="flex flex-col gap-14">
        <WelcomeSlider />
        <ProductSlider
          title={firstSliderTitle}
          products={firstSliderProducts}
        />
        <ShopByCategory
          title={categoryTitle}
          images={categoryImages}
          colors={categoryColors}
          categoriesCount={categoriesCount}
        />
        <ProductSlider
          title={secondSliderTitle}
          products={secondSliderProducts}
        />
      </div>
    </section>
  );
};
