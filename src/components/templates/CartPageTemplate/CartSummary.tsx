import { useState } from 'react';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButtom';
import type { CartItem } from '../../../stores/useCartStore';


type CartSummaryProps = {
  cartProducts: CartItem[];
};

export const CartSummary: React.FC<CartSummaryProps> = ({ cartProducts }) => {
  const [selectedCheckoutButton, setSelectedCheckoutButton] = useState(false);

  const totalAmount = cartProducts.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const totalItems = cartProducts.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  return (
    <div className="flex flex-col items-center justify-center box-border border border-element p-6 h-[190px] lg:h-[206px] lg:w-[368px]">
      <h3 className="text-[32px] text-primary font-extrabold">{`$${totalAmount}`}</h3>

      <div className="relative flex flex-col items-center w-full after:content-[''] after:block after:w-full after:h-px after:bg-element after:my-4">
        <span className="text-sm font-semibold text-secondary">
          {`Total for ${totalItems} item${totalItems !== 1 ? 's' : ''}`}
        </span>
      </div>

      <PrimaryButton
        className="w-full h-12"
        buttonText="Checkout"
        selected={selectedCheckoutButton}
        onClick={() => {
            setSelectedCheckoutButton(true);
        }}
      />
    </div>
  );
};