import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ServicesItems } from 'widget/services/models/services-items.types';
import { Services } from 'widget/services/ui/services';

it('should render highlight items', () => {
  render(<Services />);

  for (const { title, label, workingHours } of servicesList) {
    const servicesTitle = screen.getByText(title);
    const servicesLabelOne = screen.getByText(label[0]);
    const servicesLabelTwo = screen.getByText(label[1]);
    const servicesWorkingHours = screen.getByText(workingHours);

    expect(servicesTitle).toBeInTheDocument();
    expect(servicesLabelOne).toBeInTheDocument();
    expect(servicesLabelTwo).toBeInTheDocument();
    expect(servicesWorkingHours).toBeInTheDocument();
  }
});

const servicesList: ServicesItems[] = [
  {
    id: 1,
    title: 'Замена стёкол',
    description: [
      'От 1-ого часа',
      'Гарантия на работы - 1 год',
      'Стёкла напрямую с заводов изготовителей',
    ],
    label: ['Гарантия на работы - 1 год', 'Стекла напрямую с заводов'],
    workingHours: 'от 1-ого часа',
  },
  {
    id: 2,
    title: 'Ремонт сколов',
    description: [
      'От 10 минут',
      'Современный 100% прозрачный полимер',
      'Сохранение заводского стекла, когда это возможно',
    ],
    label: ['Сколы и трещины', '100% прозрачный полимер'],
    workingHours: 'от 10 минут',
  },

  {
    id: 3,
    title: 'Тонирование стекол',
    description: ['От 1-ого часа', 'Пленка США / Корея', 'Гарантия 5–10 лет'],
    label: ['Пленка США/Корея', 'гарантия 5-10 лет'],
    workingHours: 'от 30 минут',
  },

  {
    id: 4,
    title: 'Тонирование оптики',
    description: [
      'Защита от мелких камешков и гравия',
      'Современный глянцевый вид оптики',
      'Аккуратные кромки и подрезка',
    ],
    label: ['От камешков и гравия', 'Глянцевый вид оптики'],
    workingHours: 'от 45 мин',
  },

  {
    id: 5,
    title: 'Бронирование',
    description: ['Защита от сколов и гравия', 'Защита при мелких ДТП', 'Защита от реагентов и УФ'],
    label: ['Защита от сколов и реагентов', 'Полиуретан (антигравий)'],
    workingHours: 'от 2-ух часа',
  },

  {
    id: 6,
    title: 'Кондиционер',
    description: ['От 15 минут', 'Соблюдение регламентов', 'Бесплатная диагностика'],
    label: ['Соблюдения регламентов', 'Бесплатная диагностика'],
    workingHours: 'от 15 минут',
  },
];
