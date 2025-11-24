import { useEffect, useState } from 'react';
import {ProductsServiceErrors} from '../types/errorText';
import { notifyProductError } from '../utilities/notify';

export const useProducts = <T>(fetcher: () => Promise<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const result = await fetcher();

        if (isMounted) {
          setData(result);
        }
      } catch {
        if (isMounted) {
          setHasError(true);

          notifyProductError(
            ProductsServiceErrors.UNABLE_TO_LOAD_PRODUCTS
          )
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
    hasError,
  };
};