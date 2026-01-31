const PHONE_NUMBER = '79272365108';

export const messengers = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    href: `https://wa.me/${PHONE_NUMBER}`,
    color: 'bg-green-500 hover:bg-green-600',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    href: `https://t.me/+${PHONE_NUMBER}`,
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    id: 'max',
    name: 'MAX',
    href: `https://max.ru/call/${PHONE_NUMBER}`,
    color: 'bg-purple-500 hover:bg-purple-600',
  },
] as const;
