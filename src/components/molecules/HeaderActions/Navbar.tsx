import React, { useState } from "react";
import cn from "classnames";
import { NAV_ITEMS } from "../../../utilities/constants";

type Props = {
  className?: string;
};

export const Navbar: React.FC<Props> = ({ className }) => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav
      className={cn(
        "hidden md:flex items-center h-full text-xs font-extrabold text-secondary md:gap-8 lg:gap-16",
        className
      )}
    >
      {NAV_ITEMS.map(item => {
        const isActive = activeItem === item;

        return (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={cn(
              "relative h-full flex items-center uppercase px-1 py-0 leading-none transition-colors",
              isActive
                ? "text-primary"
                : "text-secondary hover:text-primary"
            )}
          >
            {item}

            {isActive && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-primary origin-left animate-underline"></span>
            )}
          </button>
        );
      })}
    </nav>
  );
};

