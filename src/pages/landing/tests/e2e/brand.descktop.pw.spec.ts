import { test, expect } from '@playwright/test';

test('trademark hover in header block', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const hoverTrigger = page.getByTestId('header-hover-triger');
  await expect(hoverTrigger).toBeVisible();
  await hoverTrigger.hover();

  const hoverContent = page.getByTestId('header-hover-content');
  await expect(hoverContent).toBeVisible({ timeout: 5000 });
});
