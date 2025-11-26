import { Dropdown } from '../../molecules/Dropdown/Dropdown';
import { GridForProducts } from './GridForProducts';
import { Pagination } from './Pagination';
import type { SimpleProduct } from '../../../types/CategoryProduct';
import type { SortOption } from '../../../types/SortProducts';
import { useEffect, useState } from 'react';
import { Breadcrumb } from '../../atoms/Breadcrumb/Breadcrumb';

type Props = {
  isLoading: boolean;
  title: string;
  products: SimpleProduct[];
  totalProducts: number;

  sort: SortOption;
  perPage: number;
  currentPage: number;
  onSortChange?: (value: string) => void;
  onPageChange: (page: number) => void;
  onPerPageChange?: (value: string) => void;
};

export const ProductsPageTemplate: React.FC<Props> = ({
  title,
  products,
  totalProducts,
  sort,
  perPage,
  currentPage,
  onSortChange,
  onPageChange,
  onPerPageChange,
}) => {
  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalLoading(true);

    const timeout = setTimeout(() => {
      setLocalLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [currentPage, sort, perPage]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const [savedCategory, setSavedCategory] = useState(title);

  useEffect(() => {
    if (title) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSavedCategory(title);
    }
  }, [title]);
  return (
    <section className="w-full flex flex-col">
      <div className="w-full mb-6">
        <Breadcrumb
          product={
            savedCategory ?
              ({ category: savedCategory } as SimpleProduct)
            : null
          }
          hideProductName
        />

        <h1 className="mb-2 text-primary font-extrabold leading-[41px] md:leading-14 text-[32px] md:text-[48px] tracking-[-1%]">
          {title}
        </h1>

        <p className="text-secondary text-[14px] leading-[21px] mb-8 md:mb-10">
          {totalProducts} models
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4">
            <Dropdown
              description="Sort by"
              label={sort}
              currentValue={sort}
              items={['Newest', 'Oldest', 'Cheapest', 'Most expensive']}
              onChange={onSortChange}
              className="md:w-[187px] lg:w-44 transition-colors duration-300"
            />

            <Dropdown
              description="Items on page"
              label={String(perPage)}
              currentValue={String(perPage)}
              items={['8', '16', '24', '48']}
              onChange={onPerPageChange}
              className="lg:w-32 transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      <GridForProducts
        products={products}
        isLoading={localLoading}
        perPage={perPage}
      />
      <div className="flex justify-center items-center">
        <Pagination
          totalProducts={totalProducts}
          itemsPerPage={perPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};
