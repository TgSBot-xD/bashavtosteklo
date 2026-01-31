import { test, expect } from '@playwright/test';

test.describe('contacts map block', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test('should display map container', async ({ page }) => {
    const contacts = page.getByTestId('contacts');
    await contacts.scrollIntoViewIfNeeded();

    const mapContainer = contacts.locator('[class*="ymaps"]').first();
    await expect(mapContainer).toBeVisible({ timeout: 10000 });
  });

  test('should display "Открыть в картах" link with correct href', async ({ page }) => {
    const contacts = page.getByTestId('contacts');
    await contacts.scrollIntoViewIfNeeded();

    const link = contacts.getByRole('link', { name: 'Открыть в картах' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /yandex\.ru\/maps/);
    await expect(link).toHaveAttribute('target', '_blank');
  });

  test('should open Yandex Maps in new tab when clicking link', async ({ page, context }) => {
    const contacts = page.getByTestId('contacts');
    await contacts.scrollIntoViewIfNeeded();

    const link = contacts.getByRole('link', { name: 'Открыть в картах' });

    const [newPage] = await Promise.all([context.waitForEvent('page'), link.click()]);

    await expect(newPage).toHaveURL(/yandex\.(ru|com)\/maps/);
    await newPage.close();
  });
});
