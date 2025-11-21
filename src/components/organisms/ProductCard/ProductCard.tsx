import type React from "react";
import { useState } from "react";
import { PrimaryButton } from "../../atoms/PrimaryButton/PrimaryButtom";
import { FavoriteButton } from "../../atoms/UtilityButton";
import type { SimpleProduct } from "../../../types/CategoryProduct";
import cn from 'classnames';

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
      <div className={cn(
        "w-full p-7 pb-4 rounded-none border border-element hover:shadow-custom bg-white",
        className
      )}>
        <div className="h-[200px] flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl min-w-full h-full object-contain"
          />
        </div>

        <div className="mb-2">
          <h3 className="text-[14px] text-primary font-normal mb-2 h-12 overflow-hidden">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-2xl text-primary font-bold">
              ${product.price}
            </p>
            {product.fullPrice && (
              <p className="text-2xl text-secondary line-through">
                ${product.fullPrice}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-element pt-4 mb-1 shrink-0">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-secondary">Screen</span>
            <span className="text-xs text-primary font-semibold">{product.screen}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-xs text-secondary">Capacity</span>
            <span className="text-xs text-primary font-semibold">
              {product.capacity}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-secondary">RAM</span>
            <span className="text-xs text-primary font-semibold">{product.ram}</span>
          </div>
        </div>

        <div className="flex gap-0 justify-center">
          <div className="-ml-3">
            <PrimaryButton
              buttonText={selectedPrimary ? 'Added' : 'Add to cart'}
              selected={selectedPrimary}
              onClick={() => setSelectedPrimary((prev) => !prev)}
              className="m-4"
            />
          </div>
          <div className="pt-4 -ml-3">
            <FavoriteButton
              className="w-10 h-10"
              selected={selectedFavorite}
              onClick={() => setSelectedFavorite((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    );
};