import {
  BreadcrumbLinkItem,
  HeroSecondaryInfoItem,
  HighlightItem,
  HighlightPerk,
} from '../models/types';

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

export const secondaryInfoItems: HeroSecondaryInfoItem[] = [
  {
    id: 1,
    label: 'ул. Дмитрия Донского, 50а',
  },
  {
    id: 2,
    label: 'Пн-ВС: 10:00-20:00',
  },
  {
    id: 3,
    label: 'Гарантия на работы',
  },
] as const;

export const highlightItems: HighlightItem[] = [
  {
    id: 1,
    displayIndex: '01',
    title: 'Замена стёкол',
    description: 'От 1 часа · гарантия 1 год · стекла напрямую с заводов',
  },
  {
    id: 2,
    displayIndex: '02',
    title: 'Ремонт',
    description: 'От 10 минут · современный прозрачный полимер',
  },
  {
    id: 3,
    displayIndex: '03',
    title: 'Тонировка',
    description: 'Плёнка США/Корея · гарантия 5–10 лет',
  },
] as const;

export const highlightPerks: HighlightPerk[] = [
  {
    id: 1,
    label: 'чай/кофе',
  },
  {
    id: 2,
    label: 'Wi-Fi',
  },
  {
    id: 3,
    label: 'Печеньки',
  },
] as const;
