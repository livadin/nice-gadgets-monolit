import { ShoppingBag } from "./ShoppingBag";


type Props = {
  countBag?: number;
  className?: string;
};

export const ShoppingBagWithBadge: React.FC<Props> = ({ className, countBag }) => {
  return (
    <div className="relative inline-block">
      <ShoppingBag className={className} />

      {countBag && countBag > 0 && (
       <span
          className="
            absolute -top-2 -right-2
            bg-accent-red text-white border border-white
            text-[8px] w-4 h-4
            flex items-center justify-center
            rounded-full"
        >
          {countBag}
        </span>
      )}
    </div>
  );
};