import { test, expect } from '@playwright/test';

test('services block screenshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.addStyleTag({
    content: `[data-testid="header"]{display:none !important; }`,
  });

  const hero = page.getByTestId('services');

  await expect(hero).toHaveScreenshot(`services.png`);
});
