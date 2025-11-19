import type { CategoryProduct } from '../../../types/CategoryProduct';
import { ArrowLeftIcon } from '../../atoms/Icons/ArrowLeftIcon';
import { HomeButton } from '../../atoms/UtilityButton';
import { GridForProducts } from '../GridForProducts';
import { ItemsOnPage } from './ItemsOnPage';
import { Pagination } from './Pagination';
import { ProductSort } from './ProductsSort';

type Props = {
  title: string;
  products?: CategoryProduct;
  totalProducts: number;
  currentPage: number;
  itemsOnPage: number;
  sort: string;

  onSortChange: (value: string) => void;
  onItemsOnPageChange: (value: number) => void;
  onPageChange: (page: number) => void;
};

export const ProductsPageTemplate: React.FC<Props> = ({
  title,
  products,
  totalProducts,
  currentPage,
  itemsOnPage,
  sort,
  onSortChange,
  onItemsOnPageChange,
  onPageChange,
}) => {
  return (
    <div className="container mx-auto pt-6 pb-16 lg:pb-20">
      <div className="flex items-center gap-2 text-sm text-secondary mb-6 lg:mb-10">
        <HomeButton />
        <ArrowLeftIcon />
        <p>Phones</p>
      </div>
      <h1 className="mb-2 text-primary font-extrabold leading-[41px] md:leading-14 text-[32px] md:text-[48px] tracking-[-1%]">
        {title}
      </h1>
      <p className="text-secondary text-[14px] leading-[21px] mb-8 md:mb-10">
        {totalProducts} models
      </p>

      <div className="flex flex-row gap-4 mb-6">
        <ProductSort currentValue={sort} onChange={onSortChange}/>
        <ItemsOnPage currentValue={itemsOnPage} onChange={onItemsOnPageChange}/>
      </div>
      <GridForProducts products={products}/>

      <Pagination
        total={totalProducts}
        perPage={itemsOnPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
