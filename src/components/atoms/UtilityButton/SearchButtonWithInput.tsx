import React, { useState } from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "../../molecules/SearchInput/SearchInput";

type SearchButtonWithInputProps = {
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
};

export const SearchButtonWithInput: React.FC<SearchButtonWithInputProps> = ({ className }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = () => setIsSearchOpen((prev) => !prev);

    return (

        <div className="flex items-center justify-center">
          <SearchButton 
            className={className} 
            onClick={toggleSearch} 
          />
      
          {isSearchOpen && (
            <div className="
                fixed left-0 top-12 z-40 w-full
                
                bg-white px-4 py-2 border-b border-element shadow-custom

                animate-underline
            ">
                <SearchInput onSearch={() => {}} />
            </div>
          )}
        </div>
    );
};