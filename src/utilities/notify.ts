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
export const notifyAddToCart = () => {
  show()(
    'Added to cartF',
    'success',
  );
};

export const notifyRemoveFromCart = () => {
  show()(
    'Removed from cart',
    'info'
  );
};

// favourites
export const notifyAddToFavourites = () => {
  show()(
    'Added to favourites',
    'success'
  );
};

export const notifyRemoveFromFavourites = () => {
  show()(
    'Removed from favourites',
    'info'
  );
};
