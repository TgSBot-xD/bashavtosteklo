import { HighlightItem, HighlightPerk } from '../models';

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
  { id: 3, label: 'Печеньки' },
] as const;
