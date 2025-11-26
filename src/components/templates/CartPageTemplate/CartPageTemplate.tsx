import React from 'react';
import { BackButton } from '../../atoms/BackButton/BackButton';
import { CartSummary } from '../../organisms/CartSummary';
import { ProductCardCart } from '../../organisms/ProductCardCart';
import { MainLoader } from '../../atoms/Loaders/MainLoader';
import type { CartItem } from '../../../stores/useCartStore';


type CartPageTemplateProps = {
  cartProducts: CartItem[];
  isLoading: boolean;
};

export const CartPageTemplate: React.FC<CartPageTemplateProps> = ({
  cartProducts,
  isLoading,
}) => {
  const hasProducts = cartProducts.length > 0;

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <MainLoader />
      </div>
    );

  return (
    <section className="mx-auto flex justify-center">
      <div className="w-full px-4 md:px-0">
        <BackButton text="Back" className="mt-[25px] md:mt-9" />

        <h1 className="sm:text-[32px] md:text-[48px] mt-6 md:mt-4 font-bold text-primary tracking-tight">
          Cart
        </h1>

        <div className="box-border lg:flex items-start my-8 gap-4">
          <div className="flex flex-col gap-4 sm:mb-8 lg:w-[752px]">
            {hasProducts ? (
              cartProducts.map((product) => (
                  <ProductCardCart
                    key={product.id}
                    cartProduct={product}
                  />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                  <img
                    src="/nice-gadgets-monolit/gadgets/img/cart-is-empty.png"
                    alt="No cart items"
                    className="w-40 opacity-80"
                  />
                  <p className="mt-6 text-secondary text-lg font-semibold">
                    Your cart is empty
                  </p>
              </div>
            )}
          </div>

          {hasProducts && <CartSummary cartProducts={cartProducts} />}
        </div>
      </div>
    </section>
  );
};