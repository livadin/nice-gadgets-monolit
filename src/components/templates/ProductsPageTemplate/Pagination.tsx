// import cn from "classnames";
import { ArrowLeftButton, ArrowRightButton, PageButton } from "../../atoms/UtilityButton";

type PaginationProps = {
  totalProducts: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-6 md:mt-10">

      <ArrowLeftButton
        disabled={currentPage === 1}
        onClick={handlePrev}
        className="w-8 h-8"
      />

      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;

          return (
            <PageButton
              className="w-8 h-8"
              key={page}
              page={page}
              selected={page === currentPage}
              disabled={false}
              onClick={() => onPageChange(page)}
            />
          );
        })}
      </div>

      <ArrowRightButton
        className="w-8 h-8"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      />

    </div>
  );
};