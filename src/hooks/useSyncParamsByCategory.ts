import { useSearchParams } from 'react-router-dom';
import { useProductsControls, type CategoryKey } from '../stores/useProductsControls';
import { useEffect } from 'react';
import type { SortOption } from '../types/SortProducts';

export const useSyncParamsByCategory = (category: CategoryKey) => {
  const [searchParams] = useSearchParams();
  const {
    setSort,
    setPerPage,
    setCurrentPage,
    resetCategory,
  } = useProductsControls();

  useEffect(() => {
    const hasSort = searchParams.has('sort');
    const hasPerPage = searchParams.has('perPage');
    const hasPage = searchParams.has('page');

    if (!hasSort) {
      setSort(category, 'Newest');
    }

    if (!hasPerPage) {
      setPerPage(category, 16);
    }

    if (!hasPage) {
      setCurrentPage(category, 1);
    }

    const sortFromUrl = searchParams.get('sort') as SortOption | null;
    const perPageFromUrl = Number(searchParams.get('perPage'));
    const pageFromUrl = Number(searchParams.get('page'));

    if (sortFromUrl) {
      setSort(category, sortFromUrl);
    }

    if (!Number.isNaN(perPageFromUrl) && perPageFromUrl > 0) {
      setPerPage(category, perPageFromUrl);
    }

    if (!Number.isNaN(pageFromUrl) && pageFromUrl > 0) {
      setCurrentPage(category, pageFromUrl);
    }
  }, [
    category,
    searchParams,
    resetCategory,
    setSort,
    setPerPage,
    setCurrentPage,
  ]);
};