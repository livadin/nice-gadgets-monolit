import { NavLink } from 'react-router-dom';
import { FavoriteButtonWithBadge } from '../../atoms/UtilityButton/FavoriteButtonWithBadge';
import { ShoppingBagWithBadgeButton } from '../../atoms/UtilityButton/ShoppingBagWithBadgeButton';

export const HeaderActions: React.FC = () => {
  return (
    <div className="hidden md:flex items-center h-full">
      <NavLink
        to="/favourites"
        className="h-full flex items-center justify-center"
      >
        <FavoriteButtonWithBadge
          className="w-12 lg:w-16 h-full transition-colors duration-300"
          count={10}
        />
      </NavLink>

      <NavLink
        to="/cart"
        className="h-full flex items-center justify-center"
      >
        <ShoppingBagWithBadgeButton
          className="w-12 lg:w-16 h-full transition-colors duration-300"
          countBag={1}
        />
      </NavLink>
    </div>
  );
};
