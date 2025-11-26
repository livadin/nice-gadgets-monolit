import allSimpleProductsRaw from '../../public/gadgets/products.json';
import phonesDetails from '../../public/gadgets/phones.json';
import tabletsDetails from '../../public/gadgets/tablets.json';
import accessoriesDetails from '../../public/gadgets/accessories.json';

import type {
  SimpleProduct,
  CategoryProduct,
  DetailedProduct,
  Category,
} from '../types/CategoryProduct';

// Нормалізація категорії
const normalizeCategory = (value: string): Category => {
  if (value === 'phones' || value === 'tablets' || value === 'accessories') {
    return value;
  }
  console.warn('⚠️ Invalid category:', value);
  return 'phones';
};

// Приводимо products.json → SimpleProduct[]
export const preparedSimpleProducts: SimpleProduct[] =
  (allSimpleProductsRaw as SimpleProduct[]).map(p => ({
    ...p,
    category: normalizeCategory(p.category),
  }));

// Map itemId → DetailedProduct
const productDetailsMap = new Map<string, DetailedProduct>();

[
  ...(phonesDetails as CategoryProduct[]),
  ...(tabletsDetails as CategoryProduct[]),
  ...(accessoriesDetails as CategoryProduct[]),
].forEach(product => {
  productDetailsMap.set(product.id, product);
});

// Всі продукти
export const getAllProducts = (products: SimpleProduct[]): SimpleProduct[] => {
  return products;
};

// По категорії
export const getProductsByCategory = (
  category: Category,
  products: SimpleProduct[],
): SimpleProduct[] => {
  return products.filter(p => p.category === category);
};

// Зі знижкою
export const getProductsWithDiscount = (
  products: SimpleProduct[],
): SimpleProduct[] => {
  return products.filter(product => product.price < product.fullPrice);
};

// Нові
export const getBrandNewProducts = (
  products: SimpleProduct[]
): SimpleProduct[] => {

  const latestYear = Math.max(...products.map(p => p.year || 0));

  return products.filter(p => p.year === latestYear);
};

//  Детальна інформація по id
export const getProductDetailsByItemId = (itemId: string): DetailedProduct | null => {
  return productDetailsMap.get(itemId) || null;
};

