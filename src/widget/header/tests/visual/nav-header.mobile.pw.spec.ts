import { test, expect } from '@playwright/test';

test('navigation mobile menu screenshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const navBarTriger = page.getByTestId('header-sheet-mobile-trigger');
  await navBarTriger.click();

  const navBarMenu = page.getByTestId('header-sheet-mobile-content');
  await expect(navBarMenu).toHaveScreenshot(`nav-menu.png`);
});
