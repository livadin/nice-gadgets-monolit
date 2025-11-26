import { ProductCard } from '../../organisms/ProductCard';
import type { SimpleProduct } from '../../../types/CategoryProduct';
import { ProductCardSkeleton } from '../../molecules/Skeleton/ProductCardSkeleton';

type GridForProductsProps = {
  products: SimpleProduct[];
  isLoading: boolean;
  perPage: number;
};

export const GridForProducts: React.FC<GridForProductsProps> = ({
  products,
  isLoading,
  perPage,
}) => {
  const items: (SimpleProduct | null)[] =
    isLoading ? Array.from({ length: perPage }, () => null) : products;

  return (
    <div
      className="
        grid
        justify-center
        grid-cols-[repeat(1,minmax(230px,288px))]
        md:grid-cols-[repeat(2,minmax(230px,288px))]
        lg:grid-cols-[repeat(4,minmax(230px,288px))]
        gap-x-4
        gap-y-10
      "
    >
      {items.map((item, index) => (
        <div
          key={isLoading ? index : item!.id}
          className="flex justify-center w-full"
        >
          {isLoading || !item ?
            <ProductCardSkeleton />
          : <ProductCard product={item} />}
        </div>
      ))}
    </div>
  );
};
