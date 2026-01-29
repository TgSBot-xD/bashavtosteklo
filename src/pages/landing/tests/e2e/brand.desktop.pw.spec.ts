import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test('trademark hover in header block', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const hoverTrigger = page.getByTestId('header-hover-trigger');
  await expect(hoverTrigger).toBeVisible();

  await hoverTrigger.scrollIntoViewIfNeeded();
  await hoverTrigger.hover({ force: true });

  const hoverContent = page.getByTestId('header-hover-content');
  await expect(hoverContent).toBeVisible({ timeout: 5000 });
});
