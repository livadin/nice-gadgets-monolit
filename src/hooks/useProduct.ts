import { useEffect, useState } from 'react';
<<<<<<< HEAD
import {ProductsServiceErrors} from '../types/enumErrorText';
import { notifyProductError } from '../utilities/notify';
=======
import {
  ProductsServiceErrors,
  productsServiceErrorText,
} from '../types/errorText';
>>>>>>> e6d01f1bfe8c930c02cc34b73b4cd5d698601815

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