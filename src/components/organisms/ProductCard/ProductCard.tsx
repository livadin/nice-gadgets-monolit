import type React from "react";
import { useState } from "react";
import { PrimaryButton } from "../../atoms/PrimaryButton/PrimaryButtom";
import { FavoriteButton } from "../../atoms/UtilityButton";
import type { CategoryProduct } from "../../../types/CategoryProduct";


type ProductCardProps = {
    product: CategoryProduct;
};

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
}) => {
    
    const [selectedPrimary, setSelectedPrimary] = useState(false);
    const [selectedFavorite, setSelectedFavorite] = useState(false);

    return (
      <div className="w-[272px] p-7 pb-4 rounded-none border border-element hover:shadow-custom bg-white">
        <div className="h-[200px] flex items-center justify-center mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="rounded-xl min-w-full h-full object-contain"
          />
        </div>

        <div className="mb-2">
          <h3 className="text-[14px] text-primary font-normal mb-2 min-h-6">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-2xl text-primary font-bold">
              ${product.priceDiscount}
            </p>
            {product.priceRegular && (
              <p className="text-2xl text-secondary line-through">
                ${product.priceRegular}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-element pt-4 mb-1">
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