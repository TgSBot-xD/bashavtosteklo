import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Bashavtosteklo
 * @see https://playwright.dev/docs/test-configuration
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
  reporter: process.env.CI
    ? [['html', { open: 'never' }], ['github']]
    : [['html', { open: 'on-failure' }]],

  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.002,
      animations: 'disabled',
      caret: 'hide',
    },
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.002,
    },
  },

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },

  snapshotPathTemplate: '{testDir}/{testFileDir}/{testFileName}-snapshots/{projectName}/{arg}{ext}',

  testMatch: '**/*.pw.spec.ts',

  projects: [
    /* Desktop devices */
    {
      name: 'chromium-dark',
      use: {
        ...devices['Desktop Chrome'],
        colorScheme: 'dark',
      },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'chromium-light',
      use: {
        ...devices['Desktop Chrome'],
        colorScheme: 'light',
      },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'firefox-dark',
      use: {
        ...devices['Desktop Firefox'],
        colorScheme: 'dark',
      },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'firefox-light',
      use: {
        ...devices['Desktop Firefox'],
        colorScheme: 'light',
      },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'webkit-dark',
      use: {
        ...devices['Desktop Safari'],
        colorScheme: 'dark',
      },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },
    {
      name: 'webkit-light',
      use: {
        ...devices['Desktop Safari'],
        colorScheme: 'light',
      },
      testIgnore: '**/*.mobile.pw.spec.ts',
    },

    /*  Mobile devices */
    {
      name: 'mobile-chrome-dark',
      use: {
        ...devices['Pixel 5'],
        colorScheme: 'dark',
      },
      testIgnore: '**/*.desktop.pw.spec.ts',
    },
    {
      name: 'mobile-chrome-light',
      use: {
        ...devices['Pixel 5'],
        colorScheme: 'light',
      },
      testIgnore: '**/*.desktop.pw.spec.ts',
    },
    {
      name: 'mobile-safari-dark',
      use: {
        ...devices['iPhone 13'],
        colorScheme: 'dark',
      },
      testIgnore: '**/*.desktop.pw.spec.ts',
    },
    {
      name: 'mobile-safari-light',
      use: {
        ...devices['iPhone 13'],
        colorScheme: 'light',
      },
      testIgnore: '**/*.desktop.pw.spec.ts',
    },
  ],

  webServer: {
    command: process.env.CI ? 'pnpm build && pnpm start' : 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
