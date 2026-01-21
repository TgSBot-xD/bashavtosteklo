import { test, expect } from '@playwright/test';

const themes = ['light', 'dark'] as const;

test('header block screenshot', async ({ page }) => {
  for (const theme of themes) {
    await page.emulateMedia({ colorScheme: theme });
    await page.addInitScript((theme: 'light' | 'dark') => {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }, theme);

    await page.goto('/', { waitUntil: 'networkidle' });

    const header = page.getByTestId('header');

    await expect(header).toHaveScreenshot(`header-${theme}.png`);
  }
});
