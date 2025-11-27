import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useFavouritesStore } from '../../stores/useFavouritesStore';
import { useCartStore } from '../../stores/useCartStore';

export const ClerkSyncProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, isSignedIn } = useUser();
  const setFavouritesUserId = useFavouritesStore((state) => state.setUserId);
  const setCartUserId = useCartStore((state) => state.setUserId);

  useEffect(() => {
    if (isSignedIn && user?.id) {
      setFavouritesUserId(user.id);
      setCartUserId(user.id);
    } else {
      setFavouritesUserId(null);
      setCartUserId(null);
    }
  }, [isSignedIn, user?.id, setFavouritesUserId, setCartUserId]);

  return <>{children}</>;
};