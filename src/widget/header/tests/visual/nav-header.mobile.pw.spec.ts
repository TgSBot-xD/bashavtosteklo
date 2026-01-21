import { test, expect } from '@playwright/test';

const themes = ['light', 'dark'] as const;

test('navigation mobile menu screenshot', async ({ page }) => {
  for (const theme of themes) {
    await page.emulateMedia({ colorScheme: theme });
    await page.addInitScript((theme: 'light' | 'dark') => {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }, theme);

    await page.goto('/', { waitUntil: 'networkidle' });

    const navBarTriger = page.getByTestId('nav-mobile-triger');
    await navBarTriger.click();

    const navBarMenu = page.getByTestId('nav-mobile-menu');
    await expect(navBarMenu).toHaveScreenshot(`nav-menu-${theme}.png`);
  }
});
