import { test, expect } from '@playwright/test';

const themes = ['light', 'dark'] as const;

test('hover block screenshot', async ({ page }) => {
  for (const theme of themes) {
    await page.emulateMedia({ colorScheme: theme });
    await page.addInitScript((theme: 'light' | 'dark') => {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }, theme);

    await page.goto('/', { waitUntil: 'networkidle' });

    const hoverTriger = page.getByTestId('header-hover-triger');
    await hoverTriger.hover();

    const hoverContent = page.getByTestId('header-hover-content');
    await expect(hoverContent).toHaveScreenshot(`hover-menu-${theme}.png`);
  }
});
