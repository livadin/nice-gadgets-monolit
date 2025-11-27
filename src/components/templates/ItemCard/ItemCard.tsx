import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { Breadcrumb } from '../../atoms/Breadcrumb/Breadcrumb';
import { useRecommendedProducts } from '../../../hooks/useRecommendedProducts';

type ItemCardProps = {
  itemProduct: CategoryProduct | undefined;
  productList: CategoryProduct[];
  allProducts: SimpleProduct[];
  isLoading: boolean;
};

export const ItemCard: React.FC<ItemCardProps> = ({
  itemProduct,
  productList,
  allProducts,
  isLoading,
}) => {
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState<string>('');

  const swiperRef = useRef<SwiperType | null>(null);

  // --- ZUSTAND HOOKS ---
  const { cart, addToCart, removeFromCart } = useCartStore();
  const { favourites, toggleFavourite } = useFavouritesStore();

  const isAddedToCart = cart.some((item) => item.itemId === itemProduct?.id);
  const isFavorite = favourites.some((item) => item.itemId === itemProduct?.id);

  useEffect(() => {
    if (itemProduct) {
      setMainImage(itemProduct.images?.[0] || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemProduct?.id]);

  const productToSave = useMemo<SimpleProduct | null>(() => {
    if (!itemProduct) return null;

    return {
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
    };
  }, [itemProduct]);

  const recommendedProducts = useRecommendedProducts(
    allProducts ?? [],
    productToSave,
    15,
  );

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

  const handleCartClick = () => {
    if (!productToSave) return;

    if (isAddedToCart) {
      const itemInCart = cart.find(
        (item) => item.itemId === productToSave.itemId,
      );

      if (itemInCart) {
        removeFromCart(itemInCart.itemId);
      }
    } else {
      addToCart(productToSave);
    }
  };

  const handleFavoriteClick = () => {
    if (!productToSave) return;
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
      return fallbackMatch ?
          `/${fallbackMatch.category}/${fallbackMatch.id}`
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
      <Breadcrumb product={itemProduct} />

      <div className="flex items-center gap-1 mb-4">
        <BackButton
          text="Back"
          className="mt-[25px] md:mt-9"
        />
      </div>

      <div>
        <h3 className="sm:text-2xl md:text-3xl font-extrabold sm:mb-8 md:mb-10 text-primary">
          {itemProduct.name}
        </h3>
      </div>

      {/* --- MAIN PRODUCT BLOCK --- */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-6 lg:gap-12 xl:gap-16 mb-20 w-full">
        
        {/* --- LEFT COLUMN (IMAGES) --- */}
        <div className="w-full md:flex-1 md:w-1/2 max-w-[600px] flex flex-col-reverse items-center md:items-start md:flex-row gap-4 md:gap-6 lg:gap-8 mx-auto md:mx-0">
          
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-3 justify-center md:justify-start flex-shrink-0">
            {itemProduct.images.slice(0, 5).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={itemProduct.name}
                className={`
                  w-14 h-14 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 
                  object-contain cursor-pointer border transition-all duration-300 
                  border-element hover:border-secondary active:border-primary p-1 bg-white
                  ${mainImage === img ? 'border-primary' : ''}
                `}
                onClick={() => {
                  setMainImage(img);
                  swiperRef.current?.slideTo(index);
                }}
              />
            ))}
          </div>

          {/* Main Image Swiper */}
          <div className="w-full max-w-[320px] md:max-w-full aspect-square flex items-center justify-center overflow-hidden">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) =>
                setMainImage(itemProduct.images[swiper.activeIndex])
              }
              initialSlide={itemProduct.images.indexOf(mainImage)}
              className="w-full h-full [&_.swiper-slide]:flex! [&_.swiper-slide]:items-center! [&_.swiper-slide]:justify-center!"
            >
              {itemProduct.images.slice(0, 5).map((img, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center w-full h-full"
                >
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

        {/* --- RIGHT COLUMN (DETAILS) --- */}
        <div className="w-full md:flex-1 md:w-1/2 flex flex-col items-end md:items-start">
          <div className="w-full max-w-none md:max-w-[400px] lg:max-w-[400px] xl:max-w-[480px]">
            
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs text-secondary">Available colors</h3>
            </div>

            <div className="flex gap-2 mb-8">
              {availableColor.map((color, index) => (
                <ColorButton
                  key={index}
                  color={color}
                  selected={itemProduct.color === color}
                  onClick={() => onColorClick(color)}
                />
              ))}
            </div>

            <div className="border-t border-element pt-6 mb-8">
              <h3 className="text-xs text-secondary mb-2">Select capacity</h3>
              <div className="flex gap-2 flex-wrap">
                {itemProduct.capacityAvailable.map((cap, index) => (
                  <PageButton
                    key={index}
                    page={cap}
                    selected={itemProduct.capacity === cap}
                    onClick={() => onCapacityClick(cap)}
                    className="text-[12px] px-4 py-2"
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-element pt-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-primary text-[32px] font-extrabold">
                  ${itemProduct.priceDiscount || itemProduct.priceRegular}
                </span>
                {itemProduct.priceDiscount && (
                  <span className="text-secondary text-[22px] line-through font-medium">
                    ${itemProduct.priceRegular}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-12">
                {isAddedToCart ?
                  <Link to="/cart" className="block w-full h-full">
                    <PrimaryButton
                      buttonText="Go to cart"
                      selected={isAddedToCart}
                      onClick={() => {}}
                      className="w-full h-full"
                    />
                  </Link>
                : <PrimaryButton
                    buttonText="Add to cart"
                    selected={isAddedToCart}
                    onClick={handleCartClick}
                    className="w-full h-full"
                  />
                }
                </div>
                <FavoriteButton
                  className="w-12 h-12 flex-shrink-0"
                  selected={isFavorite}
                  onClick={handleFavoriteClick}
                />
              </div>
            </div>

            <div className="text-xs space-y-2">
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

      {/* --- INFO BLOCKS (About / Tech Specs) --- */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
        <div className="w-full lg:flex-1">
          <h3 className="text-2xl font-extrabold mb-6 text-primary">About</h3>
          {itemProduct.description.map((desc, i) => (
            <div
              key={i}
              className={`mb-8 ${i === 0 ? 'border-t border-element pt-6' : ''}`}
            >
              <h4 className="font-bold text-[16px] lg:text-xl mb-4 text-primary">
                {desc.title}
              </h4>
              <div className="text-secondary font-medium text-[14px] space-y-4">
                {desc.text.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:flex-1 mb-12">
          <h3 className="text-2xl font-extrabold mb-6 text-primary">
            Tech specs
          </h3>
          <div className="border-t border-element text-[14px] space-y-2 pt-4">
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
            {itemProduct.category === "accessories" ? (
            <div className="flex justify-between">
              <span className="text-secondary">Display size</span>
              <span className="text-primary">{itemProduct.capacity}</span>
            </div>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-secondary">Built in memory</span>
                  <span className="text-primary">{itemProduct.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Camera</span>
                  <span className="text-primary">{itemProduct.camera}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Zoom</span>
                  <span className="text-primary">{itemProduct.zoom}</span>
                </div>
              </>
            )}
            
            <div className="flex justify-between">
              <span className="text-secondary">Cell</span>
              <span className="text-primary text-right max-w-[60%]">
                {itemProduct.cell.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 lg:mb-16">
        <ProductSlider
          products={recommendedProducts}
          title="You may also like"
        />
      </div>
    </section>
  );
};
