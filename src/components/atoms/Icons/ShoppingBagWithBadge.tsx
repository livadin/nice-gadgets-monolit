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
            absolute -top-1 -right-1
            bg-accent-red text-white
            text-[8px] w-2.5 h-3
            flex items-center justify-center
            rounded-full"
        >
          {countBag}
        </span>
      )}
    </div>
  );
};