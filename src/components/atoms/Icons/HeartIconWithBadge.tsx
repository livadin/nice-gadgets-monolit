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
            absolute -top-2 -right-2
            bg-accent-red text-white border border-white
            text-[8px] w-4 h-4
            flex items-center justify-center
            rounded-full"
        >
          {count}
        </span>
      )}
    </div>
  );
};