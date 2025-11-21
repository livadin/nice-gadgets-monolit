import { ProductCard } from "../../organisms/ProductCard" 
import type { SimpleProduct } from "../../../types/CategoryProduct";
 
type GridForProductsProps = { 
  products: SimpleProduct[], 
} 
 
export const GridForProducts: React.FC<GridForProductsProps> = ({ products }) => { 
  console.log(products) 
  return ( 
    <div className=" 
      grid 
      justify-center 
      grid-cols-[repeat(1,minmax(230px,288px))] 
      md:grid-cols-[repeat(2,minmax(230px,288px))] 
      lg:grid-cols-[repeat(4,minmax(230px,288px))] 
      gap-x-4 
      gap-y-10 
    "> 
      {products?.map((product) => ( 
        <div key={product.id} className="flex justify-center w-full"> 
          <ProductCard key={product.id} product={product} /> 
        </div> 
      ))} 
    </div> 
  ); 
};
