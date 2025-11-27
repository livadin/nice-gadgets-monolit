import { Link } from 'react-router-dom';
import type { SimpleProduct } from '../../../types/CategoryProduct';

type Props = {
  products: SimpleProduct[];
  isShown: boolean,
};

export const SearchInputCard: React.FC<Props> = ({ products, isShown }) => {

  if (!products || !isShown) {
    return null;
  }
  return (
    <article
      className="absolute top-0 left-0 translate-y-12 
    bg-white w-full h-auto max-h-[500px] border border-element rounded-md
    overflow-auto scrollbar"
      onMouseDown={(event) => event.preventDefault()}
    >
      {products.length > 0 ?
        <div className="">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/${product.category}/${product.itemId}`}
              className=""
            >
              <div className="h-[100px] p-4 border border-l-0 border-r-0 border-element flex items-center">
                <div className="flex items-center gap-4">
                  <div className="">
                    <img
                      src={product.image}
                      alt=""
                      className="w-[50px]"
                    />
                  </div>
                  <div className="text-primary">{product.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      : <div className="h-[50px] text-primary p-4 border border-l-0 border-r-0 border-element flex items-center">
        No such products
      </div>
      }
    </article>
  );
};
