import React from 'react';
import { ProductCard } from '../organisms/ProductCard';
import type { SimpleProduct } from '../../types/CategoryProduct';
import { BackButton } from '../atoms/BackButton/BackButton';
import { FavoritesProductSkeleton } from '../molecules/Skeleton/FavoritesProductSkeleton';

type FavoritesTemplateProps = {
  products: SimpleProduct[];
  isLoading: boolean;
};

export const FavoritesTemplate: React.FC<FavoritesTemplateProps> = ({
  products,
  isLoading,
}) => {
  const isEmpty = !isLoading && products.length === 0;

  return (
    <section className="w-full mb-20">
      
      <div className="mb-8 mt-6">
        <BackButton text="Back" className="mt-[25px] md:mt-9" />
        <h1 className="sm:text-[32px] md:text-[48px] font-bold text-primary mb-2 tracking-tight">
          Favourites
        </h1>
        <p className="text-secondary text-sm font-semibold">
          {isLoading ? 'Loading...' : `${products.length} item${products.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-full text-center">
          <img
            src="/nice-gadgets-monolit/gadgets/img/favorite-is-empty.png"
            alt="No favourite items"
            className="w-40 opacity-80 mb-6"
          />
          <p className="text-secondary text-lg font-semibold">
            Your favourites list is empty
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full mx-auto max-w-[306px] md:max-w-none md:mx-0"
            >
             {isLoading || !product ? (
                <FavoritesProductSkeleton />
             ) : (
                <ProductCard product={product} />
             )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};