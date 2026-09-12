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

## 3. Project Structure

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