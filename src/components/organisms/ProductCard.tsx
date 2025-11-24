import type React from 'react';
import { useState } from 'react';
import { PrimaryButton } from '../atoms/PrimaryButton/PrimaryButtom';
import { FavoriteButton } from '../atoms/UtilityButton';
import type { SimpleProduct } from '../../types/CategoryProduct';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  product: SimpleProduct;
  className?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
}) => {
  const [selectedPrimary, setSelectedPrimary] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState(false);

  return (
    <div
      className={`group w-full p-7 rounded-none border border-element bg-white-card transition-all duration-300 ease-linear
        ${className}`}
    >
      <Link
        to={`/${product.category}/${product.itemId}`}
        className="h-[200px] flex items-center justify-center mb-6"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-all duration-300 ease-linear group-hover:scale-[1.1]"
        />
      </Link>

      <div className="mb-4 grow">
        <Link to={`/${product.category}/${product.itemId}`}>
          <h3 className="text-[14px] text-primary transition-colors duration-300 font-normal mb-2 min-h-10 line-clamp-2 max-w-52 wrap-break-word group-hover:text-primary-dark">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-3">
          <p className="text-2xl text-primary transition-colors duration-300 font-bold">
            ${product.price}
          </p>
          {product.fullPrice && (
            <p className="text-sm text-secondary transition-colors duration-300 line-through mt-1">
              ${product.fullPrice}
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-element transition-colors duration-300 pt-4 mb-6 space-y-2">
        <div className="flex justify-between">
          <span className="text-xs text-secondary transition-colors duration-300">
            Screen
          </span>
          <span className="text-xs text-primary font-semibold transition-colors duration-300">
            {product.screen}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-secondary transition-colors duration-300">
            Capacity
          </span>
          <span className="text-xs text-primary font-semibold transition-colors duration-300">
            {product.capacity}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-secondary transition-colors duration-300">
            RAM
          </span>
          <span className="text-xs text-primary font-semibold transition-colors duration-300">
            {product.ram}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between mt-auto">
        <div className="grow">
          <PrimaryButton
            buttonText={selectedPrimary ? 'Added' : 'Add to cart'}
            selected={selectedPrimary}
            onClick={() => setSelectedPrimary((prev) => !prev)}
            className="lg:w-40"
          />
        </div>

        <div>
          <FavoriteButton
            className="w-10 h-10 flex items-center justify-center border border-element rounded-full bg-white-2 hover:bg-white transition-colors duration-300"
            selected={selectedFavorite}
            onClick={() => setSelectedFavorite((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};