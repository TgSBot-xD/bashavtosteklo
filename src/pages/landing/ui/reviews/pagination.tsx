import { PaginationReviewsProps } from 'pages/landing/models/types';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from 'shared/ui';

export function PaginationReviews({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationReviewsProps) {
  const handlePrevious = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent className="w-full justify-between">
        <div className="flex gap-6">
          <PaginationItem className="flex justify-start">
            <PaginationPrevious
              href="#"
              className="text-foreground ring-foreground/20 ring"
              onClick={handlePrevious}
            />
          </PaginationItem>
          <PaginationItem className="justify-start">
            <PaginationNext
              href="#"
              className="text-foreground ring-foreground/20 ring"
              onClick={handleNext}
            />
          </PaginationItem>
        </div>
        <PaginationItem className="justify-end">
          <div className="flex gap-2">{renderDots(totalPages, currentPage)}</div>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function renderDots(totalPages: number, currentPage: number) {
  return Array.from({ length: totalPages }, (_value, index) => {
    const isActive = currentPage === index + 1;
    return (
      <span
        key={index}
        className={`size-2 rounded-full transition-colors ${isActive ? 'bg-primary' : 'bg-muted'}`}
      />
    );
  });
}
