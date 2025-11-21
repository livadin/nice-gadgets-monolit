import { useState } from 'react';
import { PrimaryButton } from '../atoms/PrimaryButton/PrimaryButtom';
import type { SimpleProduct } from '../../types/CategoryProduct';

type CartProductsProps = {
  cartProducts: SimpleProduct[];
};

export const CartSummary: React.FC<CartProductsProps> = ({ cartProducts }) => {
  const [selectedCheckoutButton, setSelectedCheckoutButton] = useState(false);

  const total = cartProducts.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  return (
    <div className="flex flex-col items-center justify-center box-border border border-element p-6 h-[190px] lg:h-[206px] lg:w-[368px]">
      <h3 className="text-[32px] text-primary font-extrabold">{`$${total}`}</h3>

      <div
        className="
        relative flex flex-col items-center w-full
        after:content-[''] after:block after:w-full after:h-px after:bg-element after:my-4
      "
      >
        <span className="text-sm font-semibold text-secondary">
          {`Total for ${cartProducts.length} items`}
        </span>
      </div>

      <PrimaryButton
        className="w-full h-12"
        buttonText="Checkout"
        selected={selectedCheckoutButton}
        onClick={() => setSelectedCheckoutButton((prev) => !prev)}
      />
    </div>
  );
};