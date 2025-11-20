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
  const visibleButtons = 4;

  const startButton = Math.max(1, currentPage - Math.floor(visibleButtons / 2));
  const endButton = Math.min(totalPages, startButton + visibleButtons - 1);

  const buttons = [];
  // Generate each page number between startButton and endButton
  for (let i = startButton; i <= endButton; i++) {
    buttons.push(i);
  }

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
        {buttons.map((page) => {

          return (
            <PageButton
              className="w-8 h-8"
              key={page}
              page={page}
              selected={page === currentPage}
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