import { useState } from 'react';
import type { SimpleProduct } from '../../../types/CategoryProduct';
import { BackButton } from '../../atoms/BackButton/BackButton';
import { CartSummary } from './CartSummary';
import { ProductCardCart } from '../../organisms/ProductCardCart';
import { MainLoader } from '../../atoms/Loaders/MainLoader';

type CartPageTemplateProps = {
  cartProducts: SimpleProduct[];
  isLoading: boolean;
};

export const CartPageTemplate: React.FC<CartPageTemplateProps> = ({
  cartProducts,
  isLoading,
}) => {
  const [products] = useState<SimpleProduct[]>(cartProducts);

  const hasProducts = products.length > 0;

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <MainLoader />
      </div>
    );

  return (
    <section className="mx-auto flex justify-center">
      <div>
        <BackButton
          text="Back"
          className="mt-[25px] md:mt-9"
        />

        <h1 className="sm:text-[32px] md:text-[48px] mt-6 md:mt-4 font-bold text-primary tracking-tight">
          Cart
        </h1>

        <div className="box-border lg:flex items-start my-8 gap-4">
          <div className="flex flex-col gap-4 lg:w-[752px]">
            {hasProducts ?
              products.map((product) => (
                <ProductCardCart
                  key={product.id}
                  cartProduct={product}
                />
              ))
            : <p className="text-secondary">
                <div className="flex flex-col items-center justify-center py-20">
                  <img
                    src="/nice-gadgets-monolit/gadgets/img/cart-is-empty.png"
                    alt="No favourite items"
                    className="w-40 opacity-80"
                  />
                  <p className="mt-6 text-secondary text-lg font-semibold">
                    Your cart is empty
                  </p>
                </div>
              </p>
            }
          </div>

          {products.length > 0 && <CartSummary cartProducts={products} />}
        </div>
      </div>
    </section>
  );
};
