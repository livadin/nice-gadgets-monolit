import { NavLink } from 'react-router-dom';
import { FavoriteButtonWithBadge } from '../../atoms/UtilityButton/FavoriteButtonWithBadge';
import { ShoppingBagWithBadgeButton } from '../../atoms/UtilityButton/ShoppingBagWithBadgeButton';
import { useFavouritesStore } from '../../../stores/useFavouritesStore';
import { useCartStore } from '../../../stores/useCartStore';


export const HeaderActions: React.FC = () => {
  const favouritesCount = useFavouritesStore((state) => state.favourites.length);
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <div className="hidden md:flex items-center h-full">
      <NavLink
        to="/favourites"
        className='h-full flex items-center justify-center'
      >
        {
          favouritesCount > 0 ? (
            <FavoriteButtonWithBadge
              className="w-12 lg:w-16 h-full transition-colors duration-300"
              count={favouritesCount}
            />
          ) : (
            <FavoriteButtonWithBadge
              className="w-12 lg:w-16 h-full"
            />
          )
        }
      </NavLink>

      <NavLink
        to="/cart"
        className='h-full flex items-center justify-center'
      >
        {
          cartCount > 0 ? (
            <ShoppingBagWithBadgeButton
              className="w-12 lg:w-16 h-full transition-colors duration-300"
              countBag={cartCount}
            />
          ) : (
            <ShoppingBagWithBadgeButton
              className="w-12 lg:w-16 h-full"
            />
          )
        }
      </NavLink>
    </div>
  );
};