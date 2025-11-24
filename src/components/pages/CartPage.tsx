import { useCartStore } from "../../stores/useCartStore";
import { CartPageTemplate } from "../templates/CartPageTemplate/CartPageTemplate";

export const CartPage = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <CartPageTemplate
      cartProducts={cart} 
      isLoading={false} 
    />
  );
};