## Project Overview
This project is a QA Automation process task by using the www.automationexercise.com demo application.

The goal of the project is to demonstrate a my testing approach, including API automation, test strategy, execution instructions, exploratory testing notes, and improvement considerations.

The solution focuses on my opinio on critical user flows such as product listing, authentication, account creation, and account deletion.

## Technology Stack
The project is built using the following technologies:
Playwright
TypeScript
npm
Node.js
Visual Studio Code

The test suite currently focuses on API automation and is configured to run on Chromium.

## Prerequisites
Before running the project, ensure that the following tools are installed:
Node.js (v24.18.0 or later)
npm (v11.16.0 or later)
Playwright browsers (eve though we use only Chromiim)

Detailed execution instructions are available in the `TEST_EXECUTION_AND_WIRING.md` document.

## Installation
Clone the repository and install the required dependencies:
npm install

Install Playwright browsers:
npx playwright install

For detailed setup and execution instructions, refer to the `TEST_EXECUTION_AND_WIRING.md` document.

## Running the Tests
Run the entire test suite:
npm test

Run API tests only:
npm run test:api

Open the Playwright HTML report:
npm run report

Additional execution options and available scripts are documented in `TEST_EXECUTION_AND_WIRING.md` document.

## Project Structure
├── tests 
│ └── api 
│   ├── products-api.spec.ts 
│   └── authentication-api.spec.ts 

The project structure is intentionally kept simple and focused on eady readability and maintainability
API tests are grouped under the tests/api directory, while project documentation is separated into dedicated documents for easier navigation and easier review.

## Assumptions
The Automation Exercise application and its API endpoints are available and stable
Test accounts can be created and deleted during execution
The scope of the assignment focuses on demonstrating testing approach and code review
The current API account-related tests use serial execution because they share the same dynamically created user

## Additional Documentation
1 --> TEST_STRATEGY_AND_PLANNIG.md – test strategy, scope, priorities, and testing approach.
2 --> API AUTOMATION - the code and classes is in api folder

3 --> END TO END AUTOMATION - As I already mentioned in the first interview with Andre, but I also have to point out with Edin now, I have no experience on worrking with Playwrigth workwise (like working on some actual project). The experience I have gained in the last few weeks was with the Udemy platform and it was mostly for API testing and it was enough for me to cover that part. I have become familiar that I can do these types of tasks. As for the end-to-end tests, I'm in the process of listening and I believe I could answer them in a couple of days/weeks. As for a lot of things I am clear and readable, I just need a little more to pick up the whole syntax as well as the style of test writting. Since I know c# and java, and I have already switched from one to another programming language once, I believe that I would very quickly become efficient in typescript as well. Regarding that I will answer to this part in c# hoping that you can see something there that can convince of what I just said. 

4 --> TEST_EXECUTION_AND_WIRING.md – installation, execution instructions, configuration, and CI/CD notes
4a --> ADDITIONAL_NOTES.md – reporting, flakiness considerations, and future improvements
5 --> EXPLORATORY_TESTING_AND_REPORTING.md – exploratory testing charter, risks, and observations