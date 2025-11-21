import React from "react";
import cn from "classnames";
import { Logo } from "../atoms/Logo/Logo";
import { CloseButton } from "../atoms/UtilityButton";
import { FavoriteButtonWithBadge } from "../atoms/UtilityButton/FavoriteButtonWithBadge";
import { ShoppingBagWithBadgeButton } from "../atoms/UtilityButton/ShoppingBagWithBadgeButton";
import { NAV_ITEMS } from "../../utilities/constants";
import { NavLink } from "react-router-dom";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex items-center justify-between h-12 border-b border-element pl-4 pr-0">
        <Logo />
        <CloseButton onClick={onClose} className="h-full w-12"/>
      </div>

      <div className="
        flex flex-col items-center
        mt-6 space-y-4
        text-sm font-extrabold uppercase
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
          className="relative flex-1 h-12 flex items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <FavoriteButtonWithBadge className="flex-1 h-12"/>

              {isActive && (
                <span className="
                  absolute left-0 top-0
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
          className="relative flex-1 h-12 flex items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <ShoppingBagWithBadgeButton className="flex-1 h-12"/>

              {isActive && (
                <span className="
                  absolute left-0 top-0
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

