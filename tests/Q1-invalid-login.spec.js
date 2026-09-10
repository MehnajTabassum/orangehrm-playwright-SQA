const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Q1 - Invalid login should display error message', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('WrongUser', 'WrongPassword');

    await expect(loginPage.getErrorMessage()).toBeVisible();
});