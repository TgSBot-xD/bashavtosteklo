import { BreadcrumbLinkItem } from '../models';

export const breadcrumbLinks: BreadcrumbLinkItem[] = [
  {
    id: 1,
    label: 'АВТОСТЁКЛА',
    href: '#Автостёкла',
  },
  {
    id: 2,
    label: 'ТОНИРОВКА',
    href: '#Тонировка',
  },
  {
    id: 3,
    label: 'ПЛЁНКИ',
    href: '#Плёнки',
  },
  {
    id: 4,
    label: 'КОНДИЦИОНЕРЫ',
    href: '#Кондиционеры',
  },
] as const;
