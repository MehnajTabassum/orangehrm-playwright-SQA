const { test } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { LeavePage } = require('../pages/LeavePage');

test('Q4 - Apply, verify and cancel leave', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const leavePage = new LeavePage(page);

    // Login
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    // Open Leave → Apply
    await leavePage.openApplyLeave();

    await page.waitForTimeout(3000);
});