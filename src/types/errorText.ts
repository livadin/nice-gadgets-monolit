export const ProductsServiceErrors = {
  UNABLE_TO_LOAD_PRODUCTS: 'Unable_to_load_products',
  UNABLE_TO_ADD_TO_CART: 'Unable_to_add_to_cart',
  UNABLE_TO_DELETE_FROM_CART: 'Unable_to_delete_from_cart',
  UNABLE_TO_ADD_TO_FAVOURITES: 'Unable_to_add_to_favourites',
  UNABLE_TO_DELETE_FROM_FAVOURITES: 'Unable_to_delete_from_favourites',
} as const;

export type ProductsServiceError =
  (typeof ProductsServiceErrors)[keyof typeof ProductsServiceErrors];

export const productsServiceErrorText: Record<ProductsServiceError, string> = {
  [ProductsServiceErrors.UNABLE_TO_LOAD_PRODUCTS]: 'Unable to load products',
  [ProductsServiceErrors.UNABLE_TO_ADD_TO_CART]: 'Unable to add to cart',
  [ProductsServiceErrors.UNABLE_TO_DELETE_FROM_CART]: 'Unable to delete from cart',
  [ProductsServiceErrors.UNABLE_TO_ADD_TO_FAVOURITES]: 'Unable to add to favourites',
  [ProductsServiceErrors.UNABLE_TO_DELETE_FROM_FAVOURITES]: 'Unable to delete from favourites',
};