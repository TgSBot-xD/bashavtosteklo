# Архитектура проекта

## Технологический стек

### Frontend

| Технология   | Версия  | Назначение                             |
| ------------ | ------- | -------------------------------------- |
| Next.js      | 16.1.1  | React-фреймворк с SSR/SSG и App Router |
| React        | 19.2.3  | Библиотека для построения UI           |
| TypeScript   | 5.9.3   | Типизированный JavaScript              |
| Tailwind CSS | 4.1.18  | Utility-first CSS фреймворк            |
| Radix UI     | -       | Доступные UI-компоненты                |
| Lucide React | 0.562.0 | Библиотека иконок                      |
| next-themes  | 0.4.6   | Поддержка светлой/тёмной темы          |

### Radix UI компоненты

- **Dialog** - модальные окна
- **Navigation Menu** - навигационное меню
- **Hover Card** - всплывающие карточки
- **Select** - выпадающие списки
- **Sheet** - боковые панели
- **Label** - метки форм

### Формы и интеграции

| Пакет                  | Назначение                   |
| ---------------------- | ---------------------------- |
| react-hook-form        | Управление состоянием форм   |
| @react-input/mask      | Маскирование ввода (телефон) |
| @emailjs/browser       | Отправка форм на email       |
| @pbe/react-yandex-maps | Интеграция Яндекс.Карт       |

### Инструменты разработки

| Инструмент  | Версия  | Назначение                    |
| ----------- | ------- | ----------------------------- |
| pnpm        | 10.28.0 | Пакетный менеджер             |
| ESLint      | 9.39.2  | Линтер кода                   |
| Prettier    | 3.8.0   | Форматирование кода           |
| Jest        | 30.2.0  | Юнит-тестирование             |
| Playwright  | 1.57.0  | E2E и визуальное тестирование |
| Steiger     | -       | Валидация FSD архитектуры     |
| Husky       | 9.1.7   | Git hooks                     |
| lint-staged | 16.2.7  | Проверка staged файлов        |

## Feature-Sliced Design

Проект следует методологии **FSD**:

```
src/
├── pages/            # Страницы и композиция
│   └── landing/      # Главная страница лендинга
│       ├── config/   # Данные для секций
│       ├── models/   # Типы и интерфейсы
│       ├── lib/      # Хуки и утилиты
│       ├── tests/    # Тесты (unit, e2e, visual)
│       └── ui/       # UI компоненты страницы
└── shared/           # Переиспользуемые ресурсы
    ├── config/       # Общие конфигурации
    ├── lib/          # Утилиты (cn, format-phone)
    ├── models/       # Общие типы
    └── ui/           # UI-kit компоненты
```

## Next.js App Router

```
app/
├── layout.tsx              # Root layout (SEO, шрифты, тема)
├── globals.css             # Глобальные стили
├── sitemap.ts              # Генерация sitemap.xml
├── (landing)/
│   └── page.tsx            # Главная страница
└── _config/
    └── theme-provider.tsx  # Провайдер темы
```

## Path Aliases

Настроены в `tsconfig.json`:

```typescript
{
  "paths": {
    "pages/*": ["./src/pages/*"],
    "features/*": ["./src/features/*"],
    "entities/*": ["./src/entities/*"],
    "shared/*": ["./src/shared/*"],
    "app/*": ["./src/app/*"],
    "public/*": ["./public/*"]
  }
}
```

## Сторонние сервисы

| Сервис         | Назначение                   |
| -------------- | ---------------------------- |
| Яндекс.Метрика | Аналитика посещений          |
| Яндекс.Карты   | Виджет с местоположением     |
| Яндекс.Директ  | Контекстная реклама          |
| EmailJS        | Отправка форм обратной связи |

## Браузерная поддержка

```json
["> 1%", "last 2 versions", "Firefox ESR", "not dead", "not op_mini all"]
```

## Особенности реализации

### Адаптивность

- Mobile-first подход
- Полная адаптация под мобильные устройства
- Мобильное навигационное меню (Sheet)

### Темы

- Светлая и тёмная тема
- Автоматическое определение системных настроек
- Сохранение выбора в localStorage
- Tailwind CSS классы `dark:`

### SEO

- Метаданные (title, description, keywords)
- Open Graph теги
- Автогенерация sitemap.xml
- Server-Side Rendering

### Производительность

- SSR через Next.js
- Оптимизация изображений
- Code splitting
- Tree shaking

## Pre-commit hooks

При каждом коммите автоматически запускается проверка изменённых файлов:

| Файлы                 | Проверки          |
| --------------------- | ----------------- |
| `*.ts, *.tsx`         | ESLint + Prettier |
| `*.json, *.md, *.css` | Prettier          |

### Конфигурация

**`.husky/pre-commit`** — запускает lint-staged

**`package.json`** — конфигурация lint-staged:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```
