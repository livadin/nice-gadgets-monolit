import { Link } from 'react-router-dom';
import { useCartStore, type CartItem } from '../../stores/useCartStore';
import { CloseButton, MinusButton, PlusButton } from '../atoms/UtilityButton';

type ProductCardCartProps = {
  cartProduct: CartItem;
};

export const ProductCardCart: React.FC<ProductCardCartProps> = ({
  cartProduct,
}) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 border border-element">
      <div className="flex items-center justify-between gap-x-4 md:gap-x-6">
        <CloseButton
          className="border-0"
          onClick={() => removeFromCart(cartProduct.id)}
        />
        
        <div className="flex flex-row flex-1 shrink-0 gap-x-4 md:gap-x-6 group">
          <Link 
            to={`/${cartProduct.category}/${cartProduct.itemId}`}
            className="flex items-center gap-x-4" 
          >
            <div className="w-[80px] flex items-center justify-center m-[7px]">
              <img
                src={cartProduct.image}
                alt={cartProduct.name}
                className="h-full w-full object-contain transition-all duration-300 ease-linear group-hover:scale-[1.1]"
              />
            </div>

            <div>
              <h3 className="text-[14px] text-primary transition-colors duration-300 font-normal mb-0 line-clamp-2 max-w-52 wrap-break-word group-hover:text-primary-dark">
                {cartProduct.name}
              </h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 md:mt-0 md:gap-x-10">
        <div className="flex items-center">
          <MinusButton
            className="w-8 h-8"
            disabled={cartProduct.quantity <= 1}
            onClick={() => decreaseQuantity(cartProduct.id)}
          />

          <span className="text-[14px] text-primary font-normal mx-[13px] text-center w-4">
            {cartProduct.quantity}
          </span>

          <PlusButton
            className="w-8 h-8"
            onClick={() => increaseQuantity(cartProduct.id)}
          />
        </div>

        <p className="text-[22px] text-primary font-extrabold">
          ${cartProduct.price * cartProduct.quantity}
        </p>
      </div>
    </div>
  );
};