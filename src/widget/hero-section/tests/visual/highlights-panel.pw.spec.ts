import { test, expect } from '@playwright/test';

test('highlights block screenshot', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.addStyleTag({
    content: `[data-testid="header"]{display:none !important; }`,
  });

  const highlights = page.getByTestId('highlights-panel');
  expect(highlights).toBeVisible();

  await expect(highlights).toHaveScreenshot(`highlights-panel.png`);
});
