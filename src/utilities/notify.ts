import { useNotificationStore } from '../stores/notification.store';
import { productsServiceErrorText, type ProductsServiceError } from '../types/errorText';

const show = () => useNotificationStore.getState().showNotification;

// errors
export const notifyProductError = (error: ProductsServiceError) => {
  show()(
    productsServiceErrorText[error],
    'error',
  );
};

// cart
export const notifyAddToCart = (productName: string) => {
  show()(
    `Added to cart: ${productName} ✔`,
    'success'
  );
};

export const notifyRemoveFromCart = (productName: string) => {
  show()(
    `Removed from cart: ${productName}`,
    'info'
  );
};

export const notifyAddToFavourites = (productName: string) => {
  show()(
    `Added to favourites: ${productName} ✔`,
    'success'
  );
};

export const notifyRemoveFromFavourites = (productName: string) => {
  show()(
    `Removed from favourites: ${productName}`,
    'info'
  );
};
