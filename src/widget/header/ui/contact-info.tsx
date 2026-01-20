import Link from 'next/link';

import { Button } from 'shared/ui';

// TODO: Сделать номер кликабельный с модальным окном на все часто использоуемые мессенджеры
export function ContactInfo() {
  return (
    <section aria-label="Контакты" className="flex flex-col items-center pr-4 md:flex-row">
      {/* TODO: [BAS-9] Перенести className в один из вариантов, а не перекрывать его */}
      <Button variant="link" asChild>
        <Link href="tel:+79272365108" className="md:text-lg">
          +7 (927) 236 51 08
        </Link>
      </Button>
      <Button data-testid="ref-form" variant="contacts" className="md:text-lg lg:text-xl">
        Онлайн-запись
      </Button>
    </section>
  );
}
