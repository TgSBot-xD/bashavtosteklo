import { test, expect } from '@playwright/test';

test('header block screenshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const header = page.getByTestId('header');

  await expect(header).toHaveScreenshot(`header.png`);
});
