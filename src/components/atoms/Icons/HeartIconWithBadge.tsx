import { HeartIcon } from "./HeartIcon";

type Props = {
  count?: number;
  className?: string;
};

export const HeartIconWithBadge: React.FC<Props> = ({ className, count }) => {
  return (
    <div className="relative inline-block">
      <HeartIcon className={className} />

      {count && count > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            bg-accent-red text-white
            text-[9px] w-2.5 h-3
            flex items-center justify-center
            rounded-full"
        >
          {count}
        </span>
      )}
    </div>
  );
};