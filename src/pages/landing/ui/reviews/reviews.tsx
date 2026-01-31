'use client';

import { useState } from 'react';

import { PaginationReviews } from './pagination';
import { reviewsList } from 'pages/landing/config/reviews-data';
import { ReviewItem } from 'pages/landing/models/types';

import { Divider } from 'shared/ui';

const REVIEWS_PER_PAGE = 3;

export function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(reviewsList.length / REVIEWS_PER_PAGE);

  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const currentReviews = reviewsList.slice(startIndex, startIndex + REVIEWS_PER_PAGE);

  return (
    <section
      id="reviews"
      data-testid="reviews"
      className="flex w-full flex-col gap-6 px-4 lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-7xl"
    >
      <div className="flex w-max flex-col gap-2">
        <h5 className="text-foreground text-2xl font-bold tracking-wide">Отзывы</h5>
        <Divider />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {renderReviewsCards(currentReviews)}
      </div>
      <PaginationReviews
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}

function renderReviewsCards(reviews: ReviewItem[]) {
  return reviews.map(({ id, title, review }) => (
    <div
      key={id}
      data-testid={`review-${id}`}
      className="bg-card/80 ring-foreground/10 dark:ring-foreground/15 flex h-full flex-col justify-between gap-8 rounded-lg p-4 shadow-xl/20 ring"
    >
      <p className="text-foreground/80 md:text-foreground h-full min-h-1/3 text-sm tracking-wide md:text-base md:tracking-normal">
        {review}
      </p>
      <h6 className="text-foreground text-sm font-bold md:text-base">{title}</h6>
    </div>
  ));
}
