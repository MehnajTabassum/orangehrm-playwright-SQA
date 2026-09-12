const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PIMPage } = require('../pages/pimPage');

test('Q2 - Add new employee and verify', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PIMPage(page);

  // Step 1: Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.login('Admin', 'admin123');

  // Step 2: Navigate to PIM
  await pimPage.navigateToPIM();

  // Step 3: Add employee with random data
  const firstName = `John${Date.now()}`;
  const lastName = `Doe${Math.floor(Math.random() * 1000)}`;
  await pimPage.addEmployee(firstName, lastName);

  // Step 4: Verify employee appears in list
  const found = await pimPage.searchEmployee(firstName);
  expect(found).toBeTruthy();

  // Step 5: Logout
  await page.click('text=Logout');
});
