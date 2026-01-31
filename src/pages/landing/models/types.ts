import type { ButtonLinkItems } from 'shared/models';

// Hero Section Types
export type BreadcrumbLinkItem = {
  id: number;
  label: string;
  href: string;
};

export type HeroSecondaryInfoItem = {
  id: number;
  label: string;
};

export type HighlightItem = {
  id: number;
  displayIndex: string;
  title: string;
  description: string;
};

export type HighlightPerk = {
  id: number;
  label: string;
};

// Services Section Types
export type ServiceItem = {
  id: number;
  title: string;
  description: string[];
  label: string[];
  workingHours: string;
};

// Why We Section Types
export type FeatureItem = {
  id: number;
  label: string;
};

export type WhyUsItem = {
  id: number;
  title: string;
  description: string;
};

// Header Section Types
export type NavigationItem = {
  id: number;
  label: string;
  href: string;
};

export interface CompanyContactItem extends ButtonLinkItems {
  id: number;
  href: string;
  className?: string;
  children: React.ReactNode;
}

// Examples Work Types
export type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ExampleWorkItem = {
  id: number;
  title: string;
  description: string;
  image: ImageData;
};

// Reviews Section Types
export type ReviewItem = {
  id: number;
  title: string;
  review: string;
};

export interface PaginationReviewsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  comment: string;
}

export type ContactInfoItem = {
  id: number;
  title: string;
  description: React.ReactNode;
};
