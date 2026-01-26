import { test, expect } from '@playwright/test';

test('hero block screenshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.addStyleTag({
    content: `[data-testid="header"]{display:none !important; }`,
  });

  const hero = page.getByTestId('hero-section');

  await expect(hero).toHaveScreenshot(`hero-section.png`);
});
