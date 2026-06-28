## Prerequisites
The following tools are required to run the test suite:

Node.js (v24.18.0 or later)
npm (v11.16.0 or later)
Playwright browsers

## Installation
Install project dependencies:
npm install

Install Playwright browsers:
npx playwright install

## Running Tests
Run the entire test suite:
npm test

Run API tests only:
npm run test:api

Run tests in Playwright UI mode:
npm run test:ui

Open the latest HTML report:
npm run report

## Available Scripts
// they can be found in package.json file

npm test – Runs the entire Playwright test suite
npm run test:api – Runs API tests only
npm run test:headed – Runs tests in headed mode (with visible browser)
npm run test:ui – Opens the Playwright UI runner
npm run report – Opens the latest Playwright HTML report

## Configuration
The project is built using:
Playwright with TypeScript language through Visual Studio Code

Tests are located under the `tests` directory and are organized by test type (products nad authentication).

The current configuration executes tests in Chromium only:

playwright.config.ts
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
]

This approach was purpesly chosen to keep the scope of the assignment focused on test design, maintainability, and reliability rather than full cross-browser coverage

