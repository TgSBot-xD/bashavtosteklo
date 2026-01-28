import { test, expect } from '@playwright/test';

test('header', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.getByTestId('header')).toHaveScreenshot('header.png');
});
