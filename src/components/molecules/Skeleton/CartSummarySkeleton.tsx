import React from 'react';

export const CartSummarySkeleton: React.FC = () => {
  return (
    <div 
      className="
        flex 
        flex-col 
        items-center 
        justify-center 
        box-border 
        border border-element 
        p-6 
        h-[190px] 
        lg:h-[206px] 
        lg:w-[368px]
      "
    >
      {/* Total sum (Large Text) */}
      <div className="h-8 skeleton rounded w-1/2 mb-2" /> 

      {/* Divider and "Total items" text */}
      <div className="relative flex flex-col items-center w-full my-4 gap-4">
        <div className="w-full h-px bg-element absolute top-1/2 -z-10" /> 
        <div className="h-4 skeleton rounded w-1/3 bg-white z-10" /> 
      </div>

      {/* Checkout button */}
      <div className="w-full h-12 skeleton rounded mt-auto" />
    </div>
  );
};