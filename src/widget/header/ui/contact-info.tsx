import { Button } from 'shared/ui';

// TODO: Сделать номер кликабельный с модальным окном на все часто использоуемые мессенджеры
export function ContactInfo() {
  return (
    <section aria-label="Контакты" className="flex flex-col items-center pr-4 md:flex-row">
      {/* TODO: [BAS-9] Перенести className в один из вариантов, а не перекрывать его */}
      <Button variant="link">
        <a href="tel:+79272365108">+7 (927) 236 51 08</a>
      </Button>
      <Button variant="contacts">Онлайн-запись</Button>
    </section>
  );
}
