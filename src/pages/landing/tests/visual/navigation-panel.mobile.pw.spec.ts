import { test, expect } from '@playwright/test';

test('mobile navigation menu', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const navBarTrigger = page.getByTestId('header-sheet-mobile-trigger');
  await navBarTrigger.click();

  await expect(page.getByTestId('header-sheet-mobile-content')).toHaveScreenshot('nav-menu.png');
});
