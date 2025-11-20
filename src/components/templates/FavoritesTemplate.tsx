import React, { useState, useEffect } from "react";
import { ProductCard } from "../organisms/ProductCard/ProductCard";
import type { CategoryProduct } from "../../types/CategoryProduct";

type FavoritesTemplateProps = {
  products: CategoryProduct[];
};

export const FavoritesTemplate: React.FC<FavoritesTemplateProps> = ({ products }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState<CategoryProduct[]>(products);
  const [isEmpty, setIsEmpty] = useState(items.length === 0);

  useEffect(() => {
    setIsEmpty(items.length === 0);
  }, [items]);

  return (
    <section className="container mx-auto md:m-0">

      <div className="mb-8 mt-6">
        <h1 className="sm:text-[32px] md:text-[48px] font-bold text-primary mb-2 tracking-tight">
          Favourites
        </h1>
        <p className="text-secondary text-sm font-semibold">
          {items.length === 0
            ? ''
            : `${items.length} item${items.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-20">
          <img
            src="/gadgets/img/favorite-is-empty.png"
            alt="No favourite items"
            className="w-40 opacity-80"
          />
          <p className="mt-6 text-secondary text-lg font-semibold">
            Your favourites list is empty
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 mb-20">
          {items.map((product) => (
            <div key={product.id} className="flex sm:justify-start justify-center w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};