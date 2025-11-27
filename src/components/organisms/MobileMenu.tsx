import React from "react";
import cn from "classnames";
import { Logo } from "../atoms/Logo/Logo";
import { CloseButton } from "../atoms/UtilityButton";
import { FavoriteButtonWithBadge } from "../atoms/UtilityButton/FavoriteButtonWithBadge";
import { ShoppingBagWithBadgeButton } from "../atoms/UtilityButton/ShoppingBagWithBadgeButton";
import { NAV_ITEMS } from "../../utilities/constants";
import { NavLink } from "react-router-dom";
import { useFavouritesStore } from "../../stores/useFavouritesStore";
import { useCartStore } from "../../stores/useCartStore";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  const favouritesCount = useFavouritesStore((state) => state.favourites.length);
  const cartCount = useCartStore((state) => state.cart.length);
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-white flex flex-col transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex items-center justify-between h-12 md:h-20 border-b border-element pl-4 pr-0">
        <Logo />
        <CloseButton onClick={onClose} className="h-full w-12 md:w-20"/>
      </div>

      <div className="
        flex flex-col items-center md:justify-center h-screen
        mt-6 md:mt-0 space-y-4 md:space-y-12
        text-sm md:text-3xl font-extrabold uppercase
      ">
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "relative pb-2 transition-colors",
                isActive
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              )
            }
          >
            {({ isActive }) => (
              <>
                {item.label}

                {isActive && (
                  <span
                    className="
                      absolute left-0 -bottom-1
                      w-full h-[3px]
                      bg-primary
                    "
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="grow" />

      {/* Bottom action bar */}
      <div className="flex border-t border-element">
        <NavLink
          to="/favourites"
          onClick={onClose}
          className="relative flex-1 h-12 md:h-20 flex items-center justify-center"
        >
          {({ isActive }) => (
            <>
            {
              favouritesCount > 0 ? (
                <FavoriteButtonWithBadge
                  className="flex-1 h-12 md:h-20"
                  count={favouritesCount}
                />
              ) : (
                <FavoriteButtonWithBadge
                  className="flex-1 h-12 md:h-20"
                />
              )
            }

              {isActive && (
                <span className="
                  absolute left-0 bottom-0
                  w-full h-[3px]
                  bg-primary
                  animate-underline
                "/>
              )}
            </>
          )}
        </NavLink>


        <NavLink
          to="/cart"
          onClick={onClose}
          className="relative flex-1 h-12 md:h-20 flex items-center justify-center"
        >
          {({ isActive }) => (
            <>
            {
              cartCount > 0 ? (
                <ShoppingBagWithBadgeButton
                  className="flex-1 h-12 md:h-20"
                  countBag={cartCount}
                />
              ) : (
                <ShoppingBagWithBadgeButton
                  className="flex-1 h-12 md:h-20"
                />
              )
            }

              {isActive && (
                <span className="
                  absolute left-0 bottom-0
                  w-full h-[3px]
                  bg-primary
                  animate-underline
                "/>
              )}
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};

