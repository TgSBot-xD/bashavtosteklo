export function ContactInfo() {
  return (
    <div>
      <div>
        <b>Адрес</b>
        <span>
          Уфа, Черниковка · ул. Дмитрия Донского, 50а
          <br />
          Подъезд со стороны улицы Свободы.
        </span>
      </div>

      <div>
        <b>График</b>
        <span>Пн-Вс: 10:00–20:00</span>
      </div>

      <div>
        <b>Телефон</b>
        <span>
          <a href="tel:+73472661784">+7 (347) 266-17-84</a>
          {' · '}
          <a href="tel:+79272361784">+7 (927) 236-17-84</a>
        </span>
      </div>

      <div>
        <b>Почта</b>
        <span>
          <a href="mailto:bashavtosteklo@yandex.ru">bashavtosteklo@yandex.ru</a>
        </span>
      </div>
    </div>
  );
}
