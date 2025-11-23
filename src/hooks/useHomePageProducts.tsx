import { useMemo } from "react";
import type { SimpleProduct } from "../types/CategoryProduct";

function getUniqueModels(products: SimpleProduct[]) {
  const map = new Map<string, SimpleProduct>();

  products.forEach(product => {
    const baseModel = product.itemId
      .split('-')
      .slice(0, 3)
      .join('-');

    if (!map.has(baseModel)) {
      map.set(baseModel, product);
    }
  });

  return Array.from(map.values());
}

export const useHomePageProducts = (products: SimpleProduct[]) => {
  const uniqueProducts = useMemo(
    () => getUniqueModels(products),
    [products],
  );

  const hotPricesProducts = useMemo(() => {
    return [...uniqueProducts]
      .filter(p => p.fullPrice > p.price)
      .sort((a, b) => {
        const discountA = a.fullPrice - a.price;
        const discountB = b.fullPrice - b.price;

        return discountB - discountA;
      })
      .slice(0, 10);
  }, [uniqueProducts]);

  const brandNewProducts = useMemo(() => {
    return [...uniqueProducts]
    .sort((a, b) => b.year - a.year)
    .slice(0, 10);
  }, [uniqueProducts]);

  return {
    hotPricesProducts,
    brandNewProducts,
  }
}