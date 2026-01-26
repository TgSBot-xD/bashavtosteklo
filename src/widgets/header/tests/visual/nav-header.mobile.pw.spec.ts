import { test, expect } from '@playwright/test';

test('navigation mobile menu screenshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const navBarTriger = page.getByTestId('header-sheet-mobile-trigger');
  await navBarTriger.click();

  await expect(page.getByTestId('header-sheet-mobile-content')).toHaveScreenshot(`nav-menu.png`);

  const navBarCloseButton = page.getByTestId('header-sheet-mobile-close-button');
  await expect(navBarCloseButton).toBeVisible();

  await navBarCloseButton.click();

  await expect(navBarCloseButton).not.toBeVisible();
  await expect(page.getByTestId('header-sheet-mobile-content')).not.toBeVisible();
});
