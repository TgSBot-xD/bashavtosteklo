import { CompanyContactItems } from '../models/company-contact.types';

const contactItems: CompanyContactItems[] = [
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
    className: 'dark:bg-secondary/40 dark:text-foreground/90',
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

export { contactItems };
