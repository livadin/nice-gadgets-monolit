import { NavLink } from 'react-router-dom';
import { FavoriteButtonWithBadge } from '../../atoms/UtilityButton/FavoriteButtonWithBadge';
import { ShoppingBagWithBadgeButton } from '../../atoms/UtilityButton/ShoppingBagWithBadgeButton';
import { useFavouritesStore } from '../../../stores/useFavouritesStore';
import { useCartStore } from '../../../stores/useCartStore';

export const HeaderActions: React.FC = () => {
  const favouritesCount = useFavouritesStore(
    (state) => state.favourites.length,
  );
  const cartCount = useCartStore((state) => 
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div className="hidden lg:flex items-center h-full">
      <NavLink
        to="/favourites"
        className="relative h-full flex items-center justify-center"
      >
        {({ isActive }) => (
          <>
            {favouritesCount > 0 ?
              <FavoriteButtonWithBadge
                className="w-12 lg:w-16 h-full transition-colors duration-300"
                count={favouritesCount}
              />
            : <FavoriteButtonWithBadge className="w-12 lg:w-16 h-full" />}

            {isActive && (
              <span
                className="
                  absolute left-0 bottom-0
                  w-full h-[3px]
                  bg-primary
                  animate-underline
                "
              />
            )}
          </>
        )}
      </NavLink>

      <NavLink
        to="/cart"
        className="relative h-full flex items-center justify-center"
      >
        {({ isActive }) => (
          <>
            {cartCount > 0 ?
              <ShoppingBagWithBadgeButton
                className="w-12 lg:w-16 h-full transition-colors duration-300"
                countBag={cartCount}
              />
            : <ShoppingBagWithBadgeButton className="w-12 lg:w-16 h-full" />}
            {isActive && (
              <span
                className="
                  absolute left-0 bottom-0
                  w-full h-[3px]
                  bg-primary
                  animate-underline
                "
              />
            )}
          </>
        )}
      </NavLink>
    </div>
  );
};
