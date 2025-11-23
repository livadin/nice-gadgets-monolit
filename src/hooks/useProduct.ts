import { useEffect, useState } from 'react';
import {
  ProductsServiceErrors,
  productsServiceErrorText,
} from '../types/enumErrorText';

export const useProducts = <T>(fetcher: () => Promise<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setIsLoading(true);
      setError('');

      try {
        const result = await fetcher();

        if (isMounted) {
          setData(result);
        }
      } catch {
        if (isMounted) {
          setError(
            productsServiceErrorText[
              ProductsServiceErrors.UNABLE_TO_LOAD_PRODUCTS
            ],
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, [fetcher]);

  return {
    data,
    isLoading,
    error,
  };
};