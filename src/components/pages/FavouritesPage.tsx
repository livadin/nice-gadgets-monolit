import { useFavouritesStore } from '../../stores/useFavouritesStore';
import { FavoritesTemplate } from '../templates/FavoritesTemplate';

export const FavouritePage = () => {
  const favourites = useFavouritesStore((state) => state.favourites);

  return (
    <FavoritesTemplate 
      products={favourites} 
      isLoading={false}
    />
  );
};