# Компоненты и секции

## Структура лендинга

Лендинг состоит из 7 основных секций:

1. [Header](#1-header)
2. [Hero Section](#2-hero-section)
3. [Services](#3-services)
4. [Why We](#4-why-we)
5. [Examples Work](#5-examples-work)
6. [Reviews](#6-reviews)
7. [Contacts](#7-contacts)

---

## 1. Header

Шапка сайта с навигацией и контактами.

**Путь:** `src/pages/landing/ui/header/`

| Компонент                    | Назначение         |
| ---------------------------- | ------------------ |
| `header.tsx`                 | Основной компонент |
| `navigation-panel.tsx`       | Desktop навигация  |
| `sheet-navigation-panel.tsx` | Mobile навигация   |
| `trademark.tsx`              | Логотип/бренд      |

---

## 2. Hero Section

Главный экран с призывом к действию.

**Путь:** `src/pages/landing/ui/hero-section/`

| Компонент              | Назначение           |
| ---------------------- | -------------------- |
| `hero-section.tsx`     | Контейнер секции     |
| `hero-content.tsx`     | Основной контент     |
| `breadcrumbs.tsx`      | Навигационные крошки |
| `highlights-panel.tsx` | Панель преимуществ   |

---

## 3. Services

Карточки 6 основных услуг компании.

**Путь:** `src/pages/landing/ui/services/`

| Компонент            | Назначение     |
| -------------------- | -------------- |
| `services.tsx`       | Секция услуг   |
| `services-items.tsx` | Карточки услуг |

---

## 4. Why We

Преимущества работы с сервисом.

**Путь:** `src/pages/landing/ui/why-we/`

| Компонент           | Назначение         |
| ------------------- | ------------------ |
| `why-us.tsx`        | Контейнер секции   |
| `hero-section.tsx`  | Заголовок          |
| `features-list.tsx` | Список преимуществ |

---

## 5. Examples Work

Примеры выполненных работ (до/после).

**Путь:** `src/pages/landing/ui/examples-work/`

| Компонент           | Назначение            |
| ------------------- | --------------------- |
| `examples-work.tsx` | Секция примеров       |
| `image-compare.tsx` | Сравнение изображений |

---

## 6. Reviews

Отзывы клиентов с пагинацией.

**Путь:** `src/pages/landing/ui/reviews/`

| Компонент        | Назначение             |
| ---------------- | ---------------------- |
| `reviews.tsx`    | Секция отзывов         |
| `pagination.tsx` | Навигация по страницам |

---

## 7. Contacts

Контактная информация и форма обратной связи.

**Путь:** `src/pages/landing/ui/contacts/`

| Компонент          | Назначение            |
| ------------------ | --------------------- |
| `contacts.tsx`     | Секция контактов      |
| `contact-form.tsx` | Форма заявки          |
| `map.tsx`          | Яндекс.Карта          |
| `skeleton-map.tsx` | Skeleton при загрузке |
| `footer.tsx`       | Подвал сайта          |

---

## Дополнительные компоненты

**Путь:** `src/pages/landing/ui/`

| Компонент               | Назначение                        |
| ----------------------- | --------------------------------- |
| `main.tsx`              | Главный компонент сборки секций   |
| `messengers-dialog.tsx` | Модальное окно выбора мессенджера |

---

## Shared UI-kit

**Путь:** `src/shared/ui/`

| Компонент             | Назначение           |
| --------------------- | -------------------- |
| `button.tsx`          | Стилизованная кнопка |
| `input.tsx`           | Поле ввода           |
| `textarea.tsx`        | Текстовое поле       |
| `label.tsx`           | Метка                |
| `dialog.tsx`          | Модальное окно       |
| `hover-card.tsx`      | Всплывающая карточка |
| `navigation-menu.tsx` | Навигационное меню   |
| `select.tsx`          | Select dropdown      |
| `sheet.tsx`           | Боковая панель       |
| `pagination.tsx`      | Пагинация            |
| `breadcrumb.tsx`      | Хлебные крошки       |
| `divider.tsx`         | Разделитель          |
| `skeleton.tsx`        | Skeleton loader      |

---

## Кастомные хуки

**Путь:** `src/pages/landing/lib/`

| Хук                    | Назначение                              |
| ---------------------- | --------------------------------------- |
| `use-active-section`   | Отслеживание видимой секции при скролле |
| `use-contact-form`     | Логика формы обратной связи с EmailJS   |
| `use-scrolled-display` | Анимация появления при скролле (header) |

---

## Конфигурация данных

**Путь:** `src/pages/landing/config/`

| Файл | Содержимое |
| ---- | ---------- |

| `hero-data.ts`
| `services-data.ts`
| `header-data.ts`
| `contact-data.ts`
| `examples-data.ts`
| `reviews-data.ts`
| `why-we-data.ts`
| `messengers-dialog-data.ts`
