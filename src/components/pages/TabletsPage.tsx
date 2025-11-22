import { useMemo } from "react";
import { useProducts } from "../../hooks/useProduct";
import { getProducts } from "../../utilities/fetchApi";
import { ProductsPageTemplate } from "../templates/ProductsPageTemplate/ProductsPageTemplate";

export const TabletsPage = () => {
  const { data: products } = useProducts(getProducts);

  const tablets = useMemo(() => {
  return products.filter(p => p.category === 'tablets');
}, [products]);

  return (
    <ProductsPageTemplate
      title={'Tablets'}
      products={tablets}
      totalProducts={tablets.length}
      sort={'Newest'}
      perPage={16}
      currentPage={1}
      onPageChange={() => {}}
    />
  );
}