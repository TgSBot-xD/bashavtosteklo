import { test, expect } from '@playwright/test';

test.describe('landing page visual regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `
        [data-testid="header"] { display: none !important; }
        [data-nextjs-toast] { display: none !important; }
      `,
    });
  });

  test('hero-section screenshot', async ({ page }) => {
    const heroSection = page.getByTestId('hero-section');
    await heroSection.scrollIntoViewIfNeeded();
    await expect(heroSection).toHaveScreenshot('hero-section.png');
  });

  test('services screenshot', async ({ page }) => {
    await expect(page.getByTestId('services')).toHaveScreenshot('services.png');
  });

  test('features scrinshot', async ({ page }) => {
    await expect(page.getByTestId('features')).toHaveScreenshot('features.png');
  });

  test('why-us screenshot', async ({ page }) => {
    await expect(page.getByTestId('why-us')).toHaveScreenshot('why-us.png');
  });
  test('examples work screenshot', async ({ page }) => {
    await expect(page.getByTestId('examples-work')).toHaveScreenshot('examples-work.png');
  });
});
