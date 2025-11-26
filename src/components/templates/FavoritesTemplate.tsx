import React from 'react';
import { ProductCard } from '../organisms/ProductCard';
import type { SimpleProduct } from '../../types/CategoryProduct';
import { MainLoader } from '../atoms/Loaders/MainLoader';
import { BackButton } from '../atoms/BackButton/BackButton';

type FavoritesTemplateProps = {
  products: SimpleProduct[];
  isLoading: boolean;
};

export const FavoritesTemplate: React.FC<FavoritesTemplateProps> = ({
  products,
  isLoading,
}) => {
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <MainLoader />
      </div>
    );

  const isEmpty = products.length === 0;

  return (
    <section className="container mx-auto md:m-0">
      <div className="mb-8 mt-6">
        <BackButton text="Back" className="mt-[25px] md:mt-9" />
        <h1 className="sm:text-[32px] md:text-[48px] font-bold text-primary mb-2 tracking-tight">
          Favourites
        </h1>
        <p className="text-secondary text-sm font-semibold">
          {products.length === 0 ?
            ''
          : `${products.length} item${products.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-20">
          <img
            src="/nice-gadgets-monolit/gadgets/img/favorite-is-empty.png"
            alt="No favourite items"
            className="w-40 opacity-80"
          />
          <p className="mt-6 text-secondary text-lg font-semibold">
            Your favourites list is empty
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex sm:justify-start justify-center w-full"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};