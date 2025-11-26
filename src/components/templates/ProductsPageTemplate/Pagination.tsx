import {
  ArrowLeftButton,
  ArrowRightButton,
  PageButton,
} from '../../atoms/UtilityButton';

const getPagination = (currentPage: number, totalPages: number) => {
  const pages: (number | string)[] = [];

  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  if (currentPage <= 3) {
    pages.push(1, 2, 3, '...', totalPages);
    return pages;
  }

  if (currentPage >= totalPages - 2) {
    pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    return pages;
  }

  pages.push(
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  );

  return pages;
};

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
  const buttons = getPagination(currentPage, totalPages);

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
        className="w-8 h-8 bg-white-2 hover:bg-white-2"
      />

      <div className="flex items-center gap-2 transition-all duration-300 ease-in-out">
        {buttons.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`dots-${index}`}
                className="w-8 h-8 flex items-center justify-center text-secondary"
              >
                …
              </span>
            );
          }

          return (
            <PageButton
              className="w-8 h-8 transition-all duration-300 ease-in-out"
              key={page}
              page={Number(page)}
              selected={Number(page) === currentPage}
              onClick={() => onPageChange(Number(page))}
            />
          );
        })}
      </div>

      <ArrowRightButton
        className="w-8 h-8 bg-white-2"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      />
    </div>
  );
};
