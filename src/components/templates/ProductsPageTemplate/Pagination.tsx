// import cn from "classnames";
import { ArrowLeftButton, ArrowRightButton, PageButton } from "../../atoms/UtilityButton";

type PaginationProps = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);

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
    <div className="flex justify-center items-center gap-2 mt-10">

      <ArrowLeftButton
        disabled={currentPage === 1}
        onClick={handlePrev}
      />

      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;

          return (
            <PageButton
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
        disabled={currentPage === totalPages}
        onClick={handleNext}
      />

    </div>
  );
};