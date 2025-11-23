import axios from 'axios';
import type { CategoryProduct, SimpleProduct } from '../types/CategoryProduct';

const BASE_URL =
  'https://fs-aug25-monolit-digital.github.io/nice-gadgets-monolit/gadgets/';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function request<T>(fileName: string): Promise<T> {
  return wait(450)
    .then(() => axios.get(BASE_URL + fileName))
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error();
    });
}

export const getPhones = () => {
    return request<CategoryProduct[]>('phones.json');
}
export const getTablets = () => {
  return request<CategoryProduct[]>('tablets.json');
};
export const getAccessories = () => {
  return request<CategoryProduct[]>('accessories.json');
};
export const getProducts = () => {
  return request<SimpleProduct[]>('products.json');
};
