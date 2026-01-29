import { test, expect } from '@playwright/test';

const EXAMPLES_DATA = [
  { id: 1, title: 'Замена лобового стекла' },
  { id: 2, title: 'Ремонт сколов' },
  { id: 3, title: 'Тонировка' },
  { id: 4, title: 'Бронирование кузова и фар' },
];

test.describe('examples work block', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test('should display correct image when clicking on example buttons', async ({ page }) => {
    for (const { id } of EXAMPLES_DATA) {
      const examplesImage = page.getByTestId(`examples-image-${id}`);
      const examplesTriggerButton = page.getByTestId(`examples-trigger-${id}`);

      await examplesTriggerButton.click();
      await expect(examplesImage).toBeVisible();
    }
  });

  test('should highlight active example button', async ({ page }) => {
    for (const { id } of EXAMPLES_DATA) {
      const examplesTriggerButton = page.getByTestId(`examples-trigger-${id}`);

      await examplesTriggerButton.click();
      await expect(examplesTriggerButton).toHaveClass(/ring/);
    }
  });

  test('should display example titles in examples block', async ({ page }) => {
    const examplesBlock = page.getByTestId('examples-work');
    for (const { id, title } of EXAMPLES_DATA) {
      const triggerButton = examplesBlock.getByTestId(`examples-trigger-${id}`);
      await expect(triggerButton.getByText(title)).toBeVisible();
    }
  });

  test('first example should be active by default', async ({ page }) => {
    const firstExampleImage = page.getByTestId('examples-image-1');
    await expect(firstExampleImage).toBeVisible();
  });
});
