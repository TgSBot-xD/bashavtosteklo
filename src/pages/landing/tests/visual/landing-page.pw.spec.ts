import { test, expect } from '@playwright/test';

test.describe('landing page visual regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `[data-testid="header"]{display:none !important; }`,
    });
  });

  test('hero-content', async ({ page }) => {
    await expect(page.getByTestId('hero-content')).toHaveScreenshot('hero-content.png');
  });

  test('highlights-panel', async ({ page }) => {
    await expect(page.getByTestId('highlights-panel')).toHaveScreenshot('highlights-panel.png');
  });

  test('services', async ({ page }) => {
    await expect(page.getByTestId('services')).toHaveScreenshot('services.png');
  });

  test('features', async ({ page }) => {
    await expect(page.getByTestId('features')).toHaveScreenshot('features.png');
  });

  test('why-us', async ({ page }) => {
    await expect(page.getByTestId('why-us')).toHaveScreenshot('why-us.png');
  });
});
