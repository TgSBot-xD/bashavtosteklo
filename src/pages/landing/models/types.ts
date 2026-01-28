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
