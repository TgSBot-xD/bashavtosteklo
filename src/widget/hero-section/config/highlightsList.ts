import { HighlightsBonusItem, HighlightsListItem } from '../models';

export const listHighlights: HighlightsListItem[] = [
  {
    index: '01',
    title: 'Замена стёкол',
    description: 'От 1 часа · гарантия 1 год · стекла напрямую с заводов',
  },
  {
    index: '02',
    title: 'Ремон',
    description: 'От 10 минут · современный прозрачный полимер',
  },
  {
    index: '03',
    title: 'Тонировка',
    description: 'Пленка США/Корея · гарантия 5–10 лет',
  },
] as const;

export const listHighlightsBonus: HighlightsBonusItem[] = [
  {
    index: 1,
    label: 'чай/кофе',
  },
  {
    index: 2,
    label: 'Wi-Fi',
  },
  { index: 3, label: 'Печеньки' },
] as const;
