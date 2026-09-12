# OrangeHRM Playwright Automation

## 1. Project Overview

This project contains automated UI tests for the OrangeHRM application using Playwright and JavaScript.

The purpose of this project is to automate important OrangeHRM workflows and verify that the application behaves as expected.


## 2. Technology Stack

- Playwright
- JavaScript
- Node.js
- OrangeHRM : https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- Git & GitHub

## 3. Setup
Prerequisites - Install the following:

Node.js
npm
Git
Install Project Dependencies

## Clone the repository and navigate to the project directory:

* cd orangehrm-playwright

* Install the required packages:
* npm install

* Install Playwright browsers:
* npx playwright install

## 4. Test Scenarios

Q1 - Invalid Login : Verifies that an error message is displayed when invalid login credentials are entered.

Q2 - Add Employee : Verifies that a new employee can be added successfully.

Q3 - Admin User Management : Verifies that an admin user can be searched, updated, and that the change persists after refreshing the page.

Q4 - Leave Management : Verifies that a user can apply for leave, verify the Pending Approval status, cancel the request, and verify the updated Cancelled status.

## 5. Run Test Scenarios Individually

1. npx playwright test tests/Q1-invalid-login.spec.js --project=chromium
2. npx playwright test tests/Q2-add-employee.spec.js --project=chromium
3. npx playwright test tests/Q3-admin-user.spec.js --project=chromium
4. npx playwright test tests/Q4-leave.spec.js --project=chromium

## 6. Generate and View Test Report

After running the tests, generate/open the Playwright HTML report using:

* npx playwright show-report

The report provides information about:

1. Passed tests
2. Failed tests
3. Test duration
4. Test steps
5. Errors
6. Screenshots and traces when available

## 4. Project Structure

```text
orangehrm-playwright/
│
├── pages/
│   ├── LoginPage.js
│   ├── AdminPage.js
│   └── LeavePage.js
│
├── tests/
│   ├── Q1-invalid-login.spec.js
│   ├── Q2-add-employee.spec.js
│   ├── Q3-admin-user.spec.js
│   └── Q4-leave.spec.js
│
├── package.json
├── playwright.config.js
└── README.md

