import { test, expect } from '@playwright/test';

test('hover block screenshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const hoverTriger = page.getByTestId('header-hover-triger');
  await hoverTriger.hover();

  const hoverContent = page.getByTestId('header-hover-content');
  await expect(hoverContent).toHaveScreenshot(`hover-menu.png`);
});
