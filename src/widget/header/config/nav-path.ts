import { NavigationItem } from '../model/navigation.types';

const navigationItems: NavigationItem[] = [
  { id: 1, label: 'Услуги', href: '#services' },
  { id: 2, label: 'Почему мы', href: '#why' },
  { id: 3, label: 'Примеры', href: '#examples' },
  { id: 4, label: 'Отзывы', href: '#reviews' },
  { id: 5, label: 'Контакты', href: '#contacts' },
] as const;

export { navigationItems };
