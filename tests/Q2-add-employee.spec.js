const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PIMPage } = require('../pages/PIMPage');
const { generateEmployeeData } = require('../utils/testData');

test('Q2 - Add new employee and verify employee appears in search', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const pimPage = new PIMPage(page);

    // Generate random employee data
    const employee = generateEmployeeData();

    console.log('Employee data:', employee);

    // Step 1: Open OrangeHRM
    await loginPage.goto();

    // Step 2: Login
    await loginPage.login('Admin', 'admin123');

    // Step 3: Open PIM
    await pimPage.openPIM();

    // Step 4: Open Add Employee
    await pimPage.openAddEmployee();

    // Step 5: Add employee
    await pimPage.addEmployee(
        employee.firstName,
        employee.middleName,
        employee.lastName,
        employee.employeeId
    );

    console.log('Employee saved');

    // Step 6: Open Employee List
    await pimPage.openEmployeeList();

    // Step 7: Search employee
    await pimPage.searchEmployee(employee.employeeId);

    console.log('Employee searched');

    // Step 8: Verify employee appears
    const employeeName = page.getByText(employee.lastName, {
        exact: true
    });

    await expect(employeeName).toBeVisible({
        timeout: 10000
    });

    console.log('Employee verified successfully');

    // Step 9: Logout
    await pimPage.logout();

    console.log('Logout successful');
});