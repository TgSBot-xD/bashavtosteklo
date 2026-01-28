import { CompanyContactItem, NavigationItem } from '../models/types';

export const navigationItems: NavigationItem[] = [
  { id: 1, label: 'Услуги', href: '#services' },
  { id: 2, label: 'Почему мы', href: '#why' },
  { id: 3, label: 'Примеры', href: '#examples' },
  { id: 4, label: 'Отзывы', href: '#reviews' },
  { id: 5, label: 'Контакты', href: '#contacts' },
] as const;

export const contactItems: CompanyContactItem[] = [
  {
    id: 1,
    href: '#form',
    variant: 'default',
    className: 'w-full p-6 md:hidden',
    children: 'Онлайн-запись',
  },
  {
    id: 2,
    href: 'tel:+79272365108',
    variant: 'secondary',
    className: 'dark:bg-secondary/40 dark:text-foreground/90 lg:hidden',
    children: 'Позвонить',
  },
  {
    id: 3,
    href: 'tel:+79272365108',
    variant: 'secondary',
    className: 'dark:bg-secondary/40 dark:text-foreground/90',
    children: 'Мессенджеры',
  },
];
