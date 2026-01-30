import { test, expect } from '@playwright/test';

test.describe('landing page visual regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `
        [data-testid="header"] { display: none !important; }
        [data-nextjs-toast] { display: none !important; }
        [data-nextjs-dev-overlay] { display: none !important; }
        [data-nextjs-dialog-overlay] { display: none !important; }
        button[data-nextjs-data-runtime-error-collapsed-action] { display: none !important; }
        nextjs-portal { display: none !important; }
      `,
    });
  });

  test('hero-section screenshot', async ({ page }) => {
    const heroSection = page.getByTestId('hero-section');
    await heroSection.scrollIntoViewIfNeeded();
    await expect(heroSection).toHaveScreenshot('hero-section.png');
  });

  test('services screenshot', async ({ page }) => {
    const services = page.getByTestId('services');
    await services.scrollIntoViewIfNeeded();
    await expect(services).toHaveScreenshot('services.png');
  });

  test('features screenshot', async ({ page }) => {
    const features = page.getByTestId('features');
    await features.scrollIntoViewIfNeeded();
    await expect(features).toHaveScreenshot('features.png');
  });

  test('why-us screenshot', async ({ page }) => {
    const whyUs = page.getByTestId('why-us');
    await whyUs.scrollIntoViewIfNeeded();
    await expect(whyUs).toHaveScreenshot('why-us.png');
  });

  test('examples work screenshot', async ({ page }) => {
    const examplesWork = page.getByTestId('examples-work');
    await examplesWork.scrollIntoViewIfNeeded();
    await expect(examplesWork).toHaveScreenshot('examples-work.png');
  });

  test('reviews block screenshot', async ({ page }) => {
    const reviews = page.getByTestId('reviews');
    await reviews.scrollIntoViewIfNeeded();
    await expect(reviews).toHaveScreenshot('reviews.png');
  });

  test('footer block screenshot', async ({ page }) => {
    const reviews = page.getByTestId('footer');
    await reviews.scrollIntoViewIfNeeded();
    await expect(reviews).toHaveScreenshot('footer.png');
  });
});
