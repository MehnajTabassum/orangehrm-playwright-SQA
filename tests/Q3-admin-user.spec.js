const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');


test('Q3 - Search, edit and verify user', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);


    // ==========================================
    // Test Data
    // ==========================================

    const username = 'anushaj';

    // Existing role is ESS.
    // We keep the role as ESS.
    const newRole = 'ESS';

    // Change status from Enabled to Disabled.
    const newStatus = 'Disabled';


    // ==========================================
    // Step 1: Open OrangeHRM
    // ==========================================

    await loginPage.goto();


    // ==========================================
    // Step 2: Login
    // ==========================================

    await loginPage.login(
        'Admin',
        'admin123'
    );


    // ==========================================
    // Step 3: Open Admin
    // ==========================================

    await adminPage.openAdmin();


    // ==========================================
    // Step 4: Open Users
    // ==========================================

    await adminPage.openUsers();


    // ==========================================
    // Step 5: Search user
    // ==========================================

    await adminPage.searchUser(username);


    // ==========================================
    // Step 6: Verify matching row
    // ==========================================

    const userRow =
        await adminPage.verifyUser(username);

    await expect(userRow)
        .toContainText(username);


    // ==========================================
    // Step 7: Edit user
    // ==========================================

    await adminPage.editUser(username);


    // ==========================================
    // Step 8: Change role
    // ==========================================

    await adminPage.changeUserRole(newRole);


    // ==========================================
    // Step 9: Change status
    // ==========================================

    await adminPage.changeUserStatus(newStatus);


    // ==========================================
    // Step 10: Save
    // ==========================================

    await adminPage.saveUser();


    // ==========================================
    // Step 11: Refresh
    // ==========================================

    await adminPage.refreshPage();


    // ==========================================
    // Step 12: Search again
    // ==========================================

    await adminPage.searchUser(username);


    // ==========================================
    // Step 13: Verify persistence
    // ==========================================

    const updatedUserRow =
        await adminPage.verifyUser(username);

    await expect(updatedUserRow)
        .toContainText(username);

    await expect(updatedUserRow)
        .toContainText(newRole);

    await expect(updatedUserRow)
        .toContainText(newStatus);


    // ==========================================
    // Step 14: Logout
    // ==========================================

    await adminPage.logout();

});
