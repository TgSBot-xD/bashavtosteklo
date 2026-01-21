import { test, expect } from '@playwright/test';

const themes = ['light', 'dark'] as const;

test('highlights block screenshot', async ({ page }) => {
  for (const theme of themes) {
    await page.emulateMedia({ colorScheme: theme });
    await page.addInitScript((theme: 'light' | 'dark') => {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }, theme);

    await page.goto('/', { waitUntil: 'networkidle' });

    await page.addStyleTag({
      content: `[data-testid="header"]{display:none !important; }`,
    });

    const highlights = page.getByTestId('highlights-panel');
    expect(highlights).toBeVisible();

    await expect(highlights).toHaveScreenshot(`highlights-panel-${theme}.png`);
  }
});
