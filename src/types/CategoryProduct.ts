// Об'єднані типи
export type Category = 'phones' | 'tablets' | 'accessories';

export type DescriptionItem = {
  title: string;
  text: string[];
};

// Основний тип детального продукта 
export type CategoryProduct = {
  id: string;
  category: Category;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount?: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: DescriptionItem[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
};

// Детальні типи по категоріям
export type PhoneDetails = CategoryProduct;
export type TabletDetails = CategoryProduct;
export type AccessoryDetails = CategoryProduct;

// Загальний детальний продукт
export type DetailedProduct =
  | PhoneDetails
  | TabletDetails
  | AccessoryDetails;

// SIMPLE PRODUCT (для списків і карточок)
export type SimpleProduct = {
  id: number;
  category: Category;

  itemId: string;
  name: string;

  fullPrice: number;
  price: number;

  screen: string;
  capacity: string;
  color: string;
  ram: string;

  year: number;
  image: string;
};