import { NavigationItem } from '../model';

const navigationItems: NavigationItem[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Почему мы', href: '#why' },
  { label: 'Примеры', href: '#examples' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
] as const;

export { navigationItems };
