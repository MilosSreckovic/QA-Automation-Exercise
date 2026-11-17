
import { defineConfig } from '@playwright/test';

const isCI = Boolean(
  (globalThis as typeof globalThis & { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.CI,
);

export default defineConfig({
  testDir: './tests',

  // Allow independent tests to run in parallel
  fullyParallel: true,

  // Prevent accidentally committed test.only on CI
  forbidOnly: isCI,

  // Retry failed tests only in CI
  retries: isCI ? 2 : 0,

  // Limit parallel execution on CI
  workers: isCI ? 1 : undefined,

  // Maximum execution time per test
  timeout: 30_000,

  // Timeout for supported Playwright assertions
  expect: {
    timeout: 5_000,
  },

  // Test execution reports
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    // API base URL
    baseURL: 'https://automationexercise.com/api',

    // Default HTTP headers
    extraHTTPHeaders: {
      Accept: 'application/json',
    },

    // Capture traces when retrying failed tests
    trace: 'on-first-retry',
  },
});
