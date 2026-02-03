# Тестирование

## Инструменты

| Инструмент | Версия | Назначение |
|------------|--------|------------|
| Jest | 30.2.0 | Unit-тестирование |
| Testing Library | - | Тестирование React компонентов |
| Playwright | 1.57.0 | E2E и визуальное тестирование |

## Команды

```bash
# Unit-тесты
pnpm test             # Запуск Jest тестов
pnpm test:watch       # Jest в режиме watch
pnpm test:coverage    # Отчёт о покрытии
pnpm test:up          # Обновить снапшоты Jest

# E2E и визуальные тесты
pnpm test:pw          # Запуск Playwright тестов
pnpm test:pw:up       # Обновить визуальные снапшоты

# Полная проверка
pnpm validate         # typecheck + lint + format:check + fsd + test + test:pw
```

## Структура тестов

Все тесты расположены в `src/pages/landing/tests/`:

```
tests/
├── unit/                    # Unit-тесты (Jest)
│   ├── header/
│   │   ├── header.test.tsx
│   │   ├── navigation-panel.test.tsx
│   │   └── trademark.test.tsx
│   └── contacts/
│       └── map.test.tsx
│
├── e2e/                     # E2E тесты (Playwright)
│   ├── brand.desktop.pw.spec.ts
│   ├── contacts-map.pw.spec.ts
│   ├── example.pw.spec.ts
│   └── nav-header.mobile.pw.spec.ts
│
└── visual/                  # Визуальные тесты (Playwright)
    ├── header.pw.spec.ts
    ├── landing-page.pw.spec.ts
    └── ...snapshots/        # Эталонные скриншоты
```

## Unit-тесты (Jest)

Unit-тесты проверяют изолированную логику компонентов и хуков.

### Конфигурация

Настройки Jest в `jest.config.js`:
- Окружение: jsdom
- Модульные пути соответствуют tsconfig
- Поддержка TypeScript через ts-jest

## E2E тесты (Playwright)

### Тестовые сценарии

| Файл | Сценарий |
|------|----------|
| `brand.desktop.pw.spec.ts` | Отображение бренда на desktop |
| `contacts-map.pw.spec.ts` | Загрузка и работа карты |
| `example.pw.spec.ts` | Базовый пример |
| `nav-header.mobile.pw.spec.ts` | Мобильная навигация |

## Визуальные тесты (Playwright)

### Тестовые конфигурации

| Браузер | Устройство |
|---------|------------|
| Chromium | Desktop |
| Firefox | Desktop |
| WebKit | Desktop |
| Chrome | Mobile |
| Safari | Mobile |

### Темы

Каждый визуальный тест выполняется для:
- Светлая тема
- Тёмная тема

## Рекомендации

### Именование файлов

- Unit-тесты: `*.test.tsx`
- Playwright тесты: `*.pw.spec.ts`
- Playwright тесты для desktop версии : `*.desktop.pw.spec.ts`
- Playwright тесты для mobile версии : `*.mobile.pw.spec.ts`
