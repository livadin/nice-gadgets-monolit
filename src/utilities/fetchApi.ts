import axios from 'axios';
import type { CategoryProduct, SimpleProduct } from '../types/CategoryProduct';

const BASE_URL = import.meta.env.BASE_URL;

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
    return request<CategoryProduct[]>('gadgets/phones.json');
}
export const getTablets = () => {
  return request<CategoryProduct[]>('gadgets/tablets.json');
};
export const getAccessories = () => {
  return request<CategoryProduct[]>('gadgets/accessories.json');
};
export const getProducts = () => {
  return request<SimpleProduct[]>('gadgets/products.json');
};
