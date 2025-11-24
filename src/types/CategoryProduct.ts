// Combined types
export type Category = 'phones' | 'tablets' | 'accessories';

export type DescriptionItem = {
  title: string;
  text: string[];
};

// Main type for detailed product
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

// Detailed types for each category
export type PhoneDetails = CategoryProduct;
export type TabletDetails = CategoryProduct;
export type AccessoryDetails = CategoryProduct;

// General detailed product
export type DetailedProduct =
  | PhoneDetails
  | TabletDetails
  | AccessoryDetails;

// Simple product type (for lists and cards)
export type SimpleProduct = {
  id: number | string; 
  category: Category;

  itemId: string;
  name: string;

  fullPrice: number;
  price: number;

  screen: string;
  capacity: string;
  color: string;
  ram: string;

  year?: number;
  image: string;
};