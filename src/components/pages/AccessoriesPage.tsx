import { useMemo } from "react";
import { useProducts } from "../../hooks/useProduct";
import { getProducts } from "../../utilities/fetchApi";
import { ProductsPageTemplate } from "../templates/ProductsPageTemplate/ProductsPageTemplate";

export const AccessoriesPage = () => {
  const { data: products } = useProducts(getProducts);

  const accessories = useMemo(() => {
  return products.filter(p => p.category === 'accessories');
}, [products]);

  return (
    <ProductsPageTemplate
      title={'Accessories'}
      products={accessories}
      totalProducts={accessories.length}
      sort={'Newest'}
      perPage={16}
      currentPage={1}
      onPageChange={() => {}}
    />
  );
}