## Test Tagging and Selective Execution
For the current scope, tests are separated by folder structure:

API tests are located under `tests/api`
They can be executed with: npm run test:api

## Reporting and Diagnostics
Playwright provides an HTML report out of the box, which was used for this project.
The report can be opened with: npm run report

The HTML report provides: Test execution summary, passed and failed tests, error details and stack traces, execution duration

## Flakiness Considerations
The current API tests are stable because they do not depend on UI interactions, element synchronization, or browser timing.

A known off thing in the current implementation that could probably create some flakiness and problems is the use of serial execution for account related tests in authentication folder. The tests share the same dynamically created user, which introduces a dependency between test cases.
For a larger production test suite, each test should create and manage its own test data to remain fully independent and executable in parallel.

## Performance and Security Considerations
Performance and security testing were excluded from the scope of this assignment.

Additional activities could include:
Basic performance testing of critical API endpoints
Response time monitoring and benchmarking
Authentication and authorization checks
Basic security validations and vulnerability assessment

## Future Improvements
Make API tests fully independent and executable in parallel
Introduce test tagging for smoke, regression, and API test suites
Improve test data management and introduce reusable test utilities
