import React from "react";
import cn from "classnames";
import { Logo } from "../atoms/Logo/Logo";
import { CloseButton } from "../atoms/UtilityButton";
import { FavoriteButtonWithBadge } from "../atoms/UtilityButton/FavoriteButtonWithBadge";
import { ShoppingBagWithBadgeButton } from "../atoms/UtilityButton/ShoppingBagWithBadgeButton";
import { NAV_ITEMS } from "../../utilities/constants";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
};

export const MobileMenu: React.FC<Props> = ({
  isOpen,
  onClose,
  activeItem,
  setActiveItem,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Header row */}
      <div className="flex items-center justify-between h-12 border-b border-element pl-4 pr-0">
        <Logo />
        <CloseButton onClick={onClose} className="h-full w-12"/>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center text-sm font-extrabold text-secondary uppercase mt-6 space-y-4">
        {NAV_ITEMS.map(item => {
          const isActive = activeItem === item;

          return (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className={cn(
                "relative pb-2 transition-colors uppercase",
                isActive
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              )}
            >
              {item}

              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-primary origin-left 
                  animate-underline"/>
              )}
            </button>
          );
        })}
      </div>

      <div className="grow" />

      {/* Bottom action bar */}
      <div className="flex border-t border-element">
        <FavoriteButtonWithBadge className="flex-1 h-12"/>
        <ShoppingBagWithBadgeButton className="flex-1 h-12"/>
      </div>
    </div>
  );
};