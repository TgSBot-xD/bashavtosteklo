import { ExampleWorkItem } from '../models/types';
import booking from 'public/examples-work/booking.webp';
import chipRepair from 'public/examples-work/chip-repair.webp';
import placingTheWindshield from 'public/examples-work/placing-the-windshield.webp';
import tinting from 'public/examples-work/tinting.webp';

export const examplesData: ExampleWorkItem[] = [
  {
    id: 1,
    title: 'Замена лобового стекла',
    description: 'Подбор по VIN · герметик по регламенту · выдача с гарантией.',
    image: {
      src: placingTheWindshield.src,
      alt: 'Замена лобового стекла',
      width: placingTheWindshield.width,
      height: placingTheWindshield.height,
    },
  },
  {
    id: 2,
    title: 'Ремонт сколов',
    description: 'Полимерная заливка · “невидимый” результат, если позволяет зона.',
    image: {
      src: chipRepair.src,
      alt: 'Ремонт сколов',
      width: chipRepair.width,
      height: chipRepair.height,
    },
  },
  {
    id: 3,
    title: 'Тонировка',
    description: 'Плёнка США/Корея · ровные кромки · аккуратная усадка.',
    image: {
      src: tinting.src,
      alt: 'Тонировка стёкл',
      width: tinting.width,
      height: tinting.height,
    },
  },
  {
    id: 4,
    title: 'Бронирование кузова и фар',
    description: 'Антигравий · защита от пескоструя · внешний вид “как новый”.',
    image: {
      src: booking.src,
      alt: 'Бронирование кузова и фар',
      width: booking.width,
      height: booking.height,
    },
  },
];
