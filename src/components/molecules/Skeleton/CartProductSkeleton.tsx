import React from 'react';

export const CartProductSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 border border-element">
      {/* LEFT PART: Deletion + Photo + Name */}
      <div className="flex items-center justify-between gap-x-4 md:gap-x-6 w-full md:w-auto">
        
        {/* Deletion button */}
        <div className="w-6 h-6 skeleton rounded-full shrink-0" />
        
        <div className="flex flex-row flex-1 shrink-0 gap-x-4 md:gap-x-6">
          <div className="flex items-center gap-x-4 w-full">
            
            {/* Photo container (80x80 as in the original) */}
            <div className="w-[80px] h-[80px] flex items-center justify-center m-[7px] shrink-0">
              <div className="w-full h-full skeleton rounded-md" />
            </div>

            {/* Product name (imitation of 2 lines of text) */}
            <div className="flex flex-col space-y-2 w-full ">
              <div className="h-4 skeleton rounded sm:w-25 md:w-35" />
              <div className="h-4 skeleton rounded sm:w-20 md:w-25" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PART: Counter + Price */}
      <div className="flex justify-between items-center mt-4 md:mt-0 md:gap-x-10 w-full md:w-auto">
        
        {/* Counter (- 1 +) */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 skeleton rounded-full" /> {/* Minus */}
          <div className="w-4 h-4 skeleton rounded" />      {/* Number */}
          <div className="w-8 h-8 skeleton rounded-full" /> {/* Plus */}
        </div>

        {/* Price */}
        <div className="h-7 skeleton rounded w-20" />
      </div>
    </div>
  );
};