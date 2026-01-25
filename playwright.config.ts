import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './src/',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  snapshotPathTemplate: '{testDir}/{testFileDir}/{testFileName}-snapshots/{projectName}/{arg}{ext}',

  testMatch: '**/*.pw.spec.ts',

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium-dark',
      use: { ...devices['Desktop Chrome'], colorScheme: 'dark' },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'chromium-light',
      use: { ...devices['Desktop Chrome'], colorScheme: 'light' },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'firefox-dark',
      use: { ...devices['Desktop Firefox'], colorScheme: 'dark' },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'firefox-light',
      use: { ...devices['Desktop Firefox'], colorScheme: 'light' },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'webkit-dark',
      use: { ...devices['Desktop Safari'], colorScheme: 'dark' },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'webkit-light',
      use: { ...devices['Desktop Safari'], colorScheme: 'light' },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },

    {
      name: 'Mobile Chrome-dark',
      use: { ...devices['Pixel 5'], colorScheme: 'dark' },
      testIgnore: '**/*.descktop.pw.spec.ts',
    },
    {
      name: 'Mobile Chrome-light',
      use: { ...devices['Pixel 5'], colorScheme: 'light' },
      testIgnore: '**/*.descktop.pw.spec.ts',
    },
    {
      name: 'webkit-iphone-light',
      use: {
        ...devices['iPhone 13'],
        browserName: 'webkit',
        colorScheme: 'light',
      },
    },
    {
      name: 'webkit-iphone-dark',
      use: {
        ...devices['iPhone 13'],
        browserName: 'webkit',
        colorScheme: 'dark',
      },
    },
  ],

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm build && pnpm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
