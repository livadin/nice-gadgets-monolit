import { FavoriteButton } from "../../atoms/UtilityButton";
import { ShoppingBagButton } from "../../atoms/UtilityButton/ShoppingBagButton";

export const HeaderActions: React.FC = () => {
  return (
    <div className="hidden md:flex items-center">
      <FavoriteButton />
      <ShoppingBagButton />
    </div>
  );
};