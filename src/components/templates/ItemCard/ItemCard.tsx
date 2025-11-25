import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HomeIcon } from '../../atoms/Icons/HomeIcon';
import { ArrowRightIcon } from '../../atoms/Icons/ArrowRightIcon';
import { ProductSlider } from '../../organisms/Sliders/ProductSlider';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButtom';
import {
  ColorButton,
  FavoriteButton,
  PageButton,
} from '../../atoms/UtilityButton';
import { BackButton } from '../../atoms/BackButton/BackButton';
import { MainLoader } from '../../atoms/Loaders/MainLoader';

// Stores & Types
import { useCartStore } from '../../../stores/useCartStore';
import { useFavouritesStore } from '../../../stores/useFavouritesStore';
import type {
  CategoryProduct,
  SimpleProduct,
} from '../../../types/CategoryProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';

type ItemCardProps = {
  itemProduct: CategoryProduct | undefined;
  productList: CategoryProduct[];
  productsForSlider: SimpleProduct[];
  isLoading: boolean;
};

export const ItemCard: React.FC<ItemCardProps> = ({
  itemProduct,
  productList,
  productsForSlider,
  isLoading,
}) => {
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState<string>('');
  
  const swiperRef = useRef<SwiperType | null>(null); 

  // --- ZUSTAND HOOKS ---
  const { cart, addToCart, removeFromCart } = useCartStore();
  const { favourites, toggleFavourite } = useFavouritesStore();

  useEffect(() => {
    if (itemProduct) {
      setMainImage(itemProduct.images?.[0] || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemProduct?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <MainLoader />
      </div>
    );
  }

  if (!itemProduct) {
    return null;
  }

  const isAddedToCart = cart.some((item) => item.itemId === itemProduct.id);
  const isFavorite = favourites.some((item) => item.itemId === itemProduct.id);

  const createSimpleProduct = (): SimpleProduct => ({
    id: itemProduct.id,
    category: itemProduct.category,
    itemId: itemProduct.id,
    name: itemProduct.name,
    fullPrice: itemProduct.priceRegular,
    price: itemProduct.priceDiscount || itemProduct.priceRegular,
    screen: itemProduct.screen,
    capacity: itemProduct.capacity,
    color: itemProduct.color,
    ram: itemProduct.ram,
    image: itemProduct.images[0],
  });

  const productToSave = createSimpleProduct();

  const handleCartClick = () => {
    if (isAddedToCart) {
      const itemInCart = cart.find((item) => item.itemId === itemProduct.id);
      if (itemInCart) {
        removeFromCart(itemInCart.id);
      }
    } else {
      addToCart(productToSave);
    }
  };

  const handleFavoriteClick = () => {
    toggleFavourite(productToSave);
  };

  const getColorPath = (color: string) => {
    const match = productList.find(
      (p) =>
        p.namespaceId === itemProduct.namespaceId &&
        p.capacity === itemProduct.capacity &&
        p.color === color,
    );

    if (!match) {
      const fallbackMatch = productList.find(
        (p) => p.namespaceId === itemProduct.namespaceId && p.color === color,
      );
      return fallbackMatch
        ? `/${fallbackMatch.category}/${fallbackMatch.id}`
        : null;
    }

    return match ? `/${match.category}/${match.id}` : null;
  };

  const getCapacityPath = (capacity: string) => {
    const match = productList.find(
      (p) =>
        p.namespaceId === itemProduct.namespaceId &&
        p.color === itemProduct.color &&
        p.capacity === capacity,
    );
    return match ? `/${match.category}/${match.id}` : null;
  };

  const onColorClick = (color: string) => {
    const path = getColorPath(color);
    if (path) navigate(path);
  };

  const onCapacityClick = (capacity: string) => {
    const path = getCapacityPath(capacity);
    if (path) navigate(path);
  };

  let availableColor: string[] = [];
  if (itemProduct.colorsAvailable) {
    availableColor = [...itemProduct.colorsAvailable];
  }

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex items-center gap-2 overflow-hidden sm:mb-6 md:mb-10">
        <HomeIcon className="shrink-0" />
        <ArrowRightIcon className="shrink-0" />
        <p className="text-primary capitalize">{itemProduct.category}</p>
        <ArrowRightIcon />
        <p className="text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
          {itemProduct.name}
        </p>
      </div>

      <div className="flex items-center gap-1 mb-4">
        <BackButton text="Back" className="mt-[25px] md:mt-9" />
      </div>

      <div>
        <h3 className="sm:text-2xl md:text-3xl font-extrabold sm:mb-8 md:mb-10 text-primary">
          {itemProduct.name}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:gap-16 mb-20">
        <div className="flex flex-col md:flex-row gap-6 mb-10 md:mb-0">
          <div className="flex flex-row md:flex-col gap-3 w-full md:w-20 order-2 md:order-1 justify-center md:justify-start">
            {itemProduct.images.slice(0, 5).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={itemProduct.name}
                className={`h-14 w-14 object-contain cursor-pointer border md:h-16 md:w-16 lg:h-20 lg:w-20 transition-transform duration-300 border-element hover:border-secondary active:border-primary p-2 rounded-none ${
                  mainImage === img
                    ? 'scale-110 border-primary'
                    : 'hover:scale-110'
                }`}
                onClick={() => {
                  setMainImage(img);
                  swiperRef.current?.slideTo(index);
                }}
              />
            ))}
          </div>
          <div className="w-full sm:w-[288px] md:w-[287px] lg:w-[464px] aspect-square flex items-center justify-center overflow-hidden mx-auto md:mx-0 order-1 md:order-2">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setMainImage(itemProduct.images[swiper.activeIndex])}
              initialSlide={itemProduct.images.indexOf(mainImage)}
              className="w-full h-full [&_.swiper-pagination]:bottom-2! md:[&_.swiper-wrapper]:pb-0! md:[&_.swiper-pagination]:bottom-1!"
              >
                {itemProduct.images.slice(0, 5).map((img, index) => (
                  <SwiperSlide key={index} className="flex items-center justify-center">
                    <img
                      src={img}
                      alt={itemProduct.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        <div className="flex flex-col gap-5 md:w-[48%]">
          <div className="w-full max-w-[320px]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs text-secondary">Available colors</h3>
            </div>

            <div className="flex gap-2">
              {availableColor.map((color, index) => (
                <ColorButton
                  key={index}
                  color={color}
                  selected={itemProduct.color === color}
                  onClick={() => onColorClick(color)}
                />
              ))}
            </div>

            <div className="border-t border-element mt-8 pt-4">
              <h3 className="text-xs text-secondary mb-2">Select capacity</h3>
              <div className="flex gap-2 flex-wrap">
                {itemProduct.capacityAvailable.map((cap, index) => (
                  <PageButton
                    key={index}
                    page={cap}
                    selected={itemProduct.capacity === cap}
                    onClick={() => onCapacityClick(cap)}
                    className="text-[12px] px-6 py-2.5"
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-element pt-4 mt-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary text-[32px] font-extrabold">
                  ${itemProduct.priceDiscount || itemProduct.priceRegular}
                </span>
                {itemProduct.priceDiscount && (
                  <span className="text-secondary text-[22px] line-through font-medium">
                    ${itemProduct.priceRegular}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 lg:gap-4">
                <PrimaryButton
                  buttonText={isAddedToCart ? 'Added to cart' : 'Add to cart'}
                  selected={isAddedToCart}
                  onClick={handleCartClick}
                  className="flex-1 max-w-[263px] h-12"
                />
                <FavoriteButton
                  className="w-12 h-12"
                  selected={isFavorite}
                  onClick={handleFavoriteClick}
                />
              </div>
            </div>

            <div className="text-xs space-y-2 mt-8">
              <div className="flex justify-between">
                <span className="text-secondary">Screen</span>
                <span className="text-primary">{itemProduct.screen}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Resolution</span>
                <span className="text-primary">{itemProduct.resolution}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Processor</span>
                <span className="text-primary">{itemProduct.processor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">RAM</span>
                <span className="text-primary">{itemProduct.ram}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
        <div className="w-auto lg:w-[48%]">
          <h3 className="text-2xl font-extrabold mb-4 text-primary">About</h3>
          {itemProduct.description.map((desc, i) => (
            <div
              key={i}
              className={`mb-8 ${i === 0 ? 'border-t border-element pt-6' : ''}`}
            >
              <h4 className="font-bold text-[16px] lg:text-xl mb-4 text-primary">
                {desc.title}
              </h4>
              <div className="text-secondary font-medium text-[14px] space-y-2">
                {desc.text.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-auto lg:w-[48%] mb-12 lg:mb-14">
          <h3 className="text-2xl font-extrabold mb-4 text-primary">
            Tech specs
          </h3>
          <div className="border-t border-element text-[14px] text-right space-y-2 pt-2">
            <div className="flex justify-between mt-6">
              <span className="text-secondary">Screen</span>
              <span className="text-primary">{itemProduct.screen}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Resolution</span>
              <span className="text-primary">{itemProduct.resolution}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Processor</span>
              <span className="text-primary">{itemProduct.processor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">RAM</span>
              <span className="text-primary">{itemProduct.ram}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Built in memory</span>
              <span className="text-primary">{itemProduct.capacity}</span>
            </div>
            {itemProduct.camera && (
              <div className="flex justify-between">
                <span className="text-secondary">Camera</span>
                <span className="text-primary">{itemProduct.camera}</span>
              </div>
            )}
            {itemProduct.zoom && (
              <div className="flex justify-between">
                <span className="text-secondary">Zoom</span>
                <span className="text-primary">{itemProduct.zoom}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-secondary">Cell</span>
              <span className="text-primary wrap-break-words max-w-[60%]">
                {itemProduct.cell.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 lg:mb-16">
        <ProductSlider products={productsForSlider} title="You may also like" />
      </div>
    </section>
  );
};