import { FavoriteButtonWithBadge } from "../../atoms/UtilityButton/FavoriteButtonWithBadge";
import { ShoppingBagWithBadgeButton } from "../../atoms/UtilityButton/ShoppingBagWithBadgeButton";

export const HeaderActions: React.FC = () => {
  return (
    <div className="hidden md:flex items-center h-full">
      <FavoriteButtonWithBadge className="w-12 lg:w-16 shrink-0 min-h-full" count={10}/>
      <ShoppingBagWithBadgeButton className="w-12 lg:w-16 shrink-0 min-h-full" countBag={1}/>
    </div>
  );
};