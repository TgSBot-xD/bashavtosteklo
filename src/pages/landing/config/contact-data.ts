import { ContactInfoItem } from '../models/types';

export const serviceOptions = [
  'Замена стекол',
  'Ремонт сколов/трещин',
  'Тонирование стекол',
  'Тонирование оптики',
  'Бронирование пленкой',
  'Заправка кондиционера',
  'Другое',
] as const;

export const contactInfoData: ContactInfoItem[] = [
  {
    id: 1,
    title: 'Адрес',
    description: 'Уфа, Черниковка ул. Дмитрия Донского, 50а Подъезд со стороны улицы Свободы.',
  },
  {
    id: 2,
    title: 'График',
    description: 'Пн-Вс: 10:00–20:00',
  },
  {
    id: 3,
    title: 'Телефон',
    description: '+7 (927) 236-17-84',
  },
  {
    id: 4,
    title: 'Почта',
    description: 'bashavtosteklo@yandex.ru',
  },
];
