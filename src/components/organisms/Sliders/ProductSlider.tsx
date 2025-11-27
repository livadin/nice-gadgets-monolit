import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCard } from '../ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import type { SimpleProduct } from '../../../types/CategoryProduct';
import { ArrowLeftButton, ArrowRightButton } from '../../atoms/UtilityButton';
import { useState } from 'react';
import { ProductCardSkeleton } from '../../molecules/Skeleton/ProductCardSkeleton';

type Props = {
  products: SimpleProduct[];
  title: string;
  isLoading?: boolean;
};

export const ProductSlider: React.FC<Props> = ({
  products,
  title,
  isLoading = false,
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const safeProducts = products ?? [];
  const showSkeletons = isLoading;

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleSlideChange = (s: SwiperClass) => {
    setHasPrev(!s.isBeginning);
    setHasNext(!s.isEnd);
  };

  return (
    <section>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
      >
        <div
          slot="container-start"
          className="mb-6 flex justify-between"
        >
          <h2 className="h2 w-[136px] leading-[140%] md:w-auto">{title}</h2>
          <div
            slot="container-start"
            className=""
          >
            <ArrowLeftButton
              className="w-8 h-8 mr-4"
              onClick={handlePrev}
              disabled={!hasPrev}
            />
            <ArrowRightButton
              className="w-8 h-8"
              onClick={handleNext}
              disabled={!hasNext}
            />
          </div>
        </div>
        {showSkeletons ?
          Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide
              className="w-[272px]! pb-4"
              key={`skeleton-${index}`}
            >
              <ProductCardSkeleton />
            </SwiperSlide>
          ))
        : safeProducts.map((product) => (
            <SwiperSlide
              className="w-auto! pb-4"
              key={product.id}
            >
              <ProductCard
                product={product}
                className="max-w-[272px]"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};
