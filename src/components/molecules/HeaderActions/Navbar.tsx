import cn from "classnames";
import { NAV_ITEMS } from "../../../utilities/constants";
import { NavLink } from "react-router-dom";

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative h-full flex items-center uppercase px-1 py-0 leading-none transition-colors",

    isActive
      ? "text-primary"
      : "text-secondary hover:text-primary"
  );
type Props = {
  className?: string;
};

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <nav
      className={cn(
        "hidden md:flex items-center h-full text-xs font-extrabold text-secondary md:gap-5 md-lg:gap-8 lg:gap-16",
        className
      )}
    >
      {NAV_ITEMS.map(item => {
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={getLinkClass}
          >
            {({ isActive }) => (
            <>
              {item.label}

              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-primary origin-left animate-underline transition-colors duration-300"></span>
              )}
            </>
          )}
          </NavLink>
        );
      })}
    </nav>
  );
};

