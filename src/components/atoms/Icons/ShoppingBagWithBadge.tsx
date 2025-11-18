import { ShoppingBag } from "./ShoppingBag";


type Props = {
  count?: number;
  className?: string;
};

export const ShoppingBagWithBadge: React.FC<Props> = ({ className, count }) => {
  return (
    <div className="relative inline-block">
      <ShoppingBag className={className} />

      {count && count > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            bg-accent-red text-white
            text-[9px] w-[10px] h-[12px]
            flex items-center justify-center
            rounded-full"
        >
          {count}
        </span>
      )}
    </div>
  );
};