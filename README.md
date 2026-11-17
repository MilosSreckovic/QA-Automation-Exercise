
# Playwright API Automation Framework


[![Playwright API Tests](https://github.com/MilosSreckovic/QA-Automation-Exercise/actions/workflows/playwright-api.yml/badge.svg)](https://github.com/MilosSreckovic/QA-Automation-Exercise/actions/workflows/playwright-api.yml)

API test automation project built with **Playwright and TypeScript**, using the Automation Exercise demo application.

The project demonstrates practical API testing techniques, including positive and negative test scenarios, response validation, test isolation, reusable test utilities, and test data cleanup.

## Project Overview

The main objective is to build a reliable, maintainable, and easy-to-understand API automation suite.

The framework focuses on:

- REST API functional testing
- Positive and negative test scenarios
- HTTP status and business response validation
- API response structure and data validation
- Independent test execution
- Dynamic test data generation
- Test account creation and cleanup
- Parallel test execution
- HTML reporting and CI-ready configuration

**Application under test:** https://automationexercise.com

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Playwright | API test automation |
| TypeScript | Test implementation |
| Node.js | JavaScript runtime |
| npm | Dependency management |
| Git & GitHub | Version control |
| Playwright HTML Reporter | Test execution reporting |

The project uses Playwright's APIRequestContext for HTTP requests and does not require browser installation for API test execution.

## Test Coverage

### Authentication API

- Verify login request with missing credentials
- Create a new user account
- Verify login with valid credentials
- Delete an existing user account

### Products API

- Retrieve the product list
- Validate product response structure
- Verify product identifiers, names, prices, and brands
- Verify unsupported HTTP method handling

Additional test scenarios are maintained in the project's test suite.

## Framework Design

### Test Independence

Tests are designed to execute independently without relying on the execution order of other tests.

### Dynamic Test Data

Unique email addresses are generated for test accounts to reduce conflicts between executions.

### Reusable Functions

Common account operations are implemented as reusable functions to reduce code duplication and improve readability.

### Test Data Cleanup

Tests that create accounts include cleanup logic to remove temporary test data.

Cleanup is attempted when the relevant test fails, although successful cleanup also depends on API availability and response handling.

### API Validation

Tests validate both HTTP status codes and application-specific response codes.

Product responses are checked for expected data types and required values.

## Project Structure

```text
QA-Automation-Exercise/
|
|-- tests/
|   |-- api/
|       |-- authentication-api.spec.ts
|       |-- products-api.spec.ts
|
|-- playwright.config.ts
|-- package.json
|-- README.md
```

Additional documentation files provide information about test strategy, execution, exploratory testing, and improvement considerations.

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/MilosSreckovic/QA-Automation-Exercise.git
```

Navigate to the project directory:

```bash
cd QA-Automation-Exercise
```

Install dependencies:

```bash
npm install
```

## Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run authentication API tests:

```bash
npx playwright test authentication-api.spec.ts
```

Run products API tests:

```bash
npx playwright test products-api.spec.ts
```

Run a specific test:

```bash
npx playwright test --grep "POST verify login with valid credentials"
```

Open the HTML report:

```bash
npx playwright show-report
```

## Test Configuration

The Playwright configuration includes:

- Parallel test execution
- CI-specific retry configuration
- CI worker limits
- Test execution timeout
- Centralized API base URL
- HTML and console reporting
- Trace collection on retries

The configuration is intended to support both local execution and future CI/CD integration.

## Test Strategy

The testing approach prioritizes:

1. Critical API functionality
2. Authentication and account management
3. Product data integrity
4. Negative scenarios and error handling
5. Test reliability and maintainability

Tests are designed to validate observable API behavior rather than implementation details.

## Future Improvements

- Expand negative API test coverage
- Introduce API response schema validation
- Improve test data management and cleanup reliability
- Add GitHub Actions CI/CD execution
- Introduce environment-based configuration
- Extend API test coverage to additional endpoints

## Additional Documentation

The repository also includes supporting documentation covering:

- Test strategy and planning
- Test execution and configuration
- Exploratory testing and reporting
- Additional observations and improvement considerations

## Author

**Milos Sreckovic**

Senior QA Automation Engineer

6+ years of experience in test automation, API testing, performance engineering, and software quality assurance.

**GitHub:** https://github.com/MilosSreckovic
