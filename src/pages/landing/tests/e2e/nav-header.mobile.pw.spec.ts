import { test, expect } from '@playwright/test';

test('navigation mobile menu screenshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const navBarTrigger = page.getByTestId('header-sheet-mobile-trigger');
  await navBarTrigger.click();

  const navBarCloseButton = page.getByTestId('header-sheet-mobile-close-button');
  await expect(navBarCloseButton).toBeVisible();

  await navBarCloseButton.click();

  await expect(page.getByTestId('header-sheet-mobile-content')).not.toBeVisible();
});
