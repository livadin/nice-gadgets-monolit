import { useEffect, useState } from "react";
import type { SimpleProduct } from "../../types/CategoryProduct";
import { getProducts } from "../../utilities/fetchApi";

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<SimpleProduct[]>([]);

  useEffect(() => {
    getProducts().then(productsFromServer => {
        setProducts(productsFromServer);
    });
  }, [])

  console.log(products);

  return <section></section>;
};
