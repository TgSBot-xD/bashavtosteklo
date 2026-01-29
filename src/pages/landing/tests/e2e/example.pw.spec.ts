import { test, expect } from '@playwright/test';

const EXAMPLE_IDS = [1, 2, 3, 4];

test('change photo in example block', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  for (const id of EXAMPLE_IDS) {
    const examplesImage = page.getByTestId(`examples-image-${id}`);
    const examplesTriggerButton = page.getByTestId(`examples-triger-${id}`);

    await examplesTriggerButton.click();
    await expect(examplesImage).toBeVisible();
  }
});
