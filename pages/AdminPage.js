
class AdminPage {

    constructor(page) {
        this.page = page;

        // ==========================================
        // Admin Menu
        // ==========================================
        this.adminMenu = page.getByText('Admin', {
            exact: true
        });

        // ==========================================
        // User Management / Users
        // ==========================================
        this.userManagement = page
            .getByRole('navigation', { name: 'Topbar Menu' })
            .getByText('User Management', {
                exact: true
            });

        this.usersMenu = page
            .getByRole('navigation', { name: 'Topbar Menu' })
            .getByText('Users', {
                exact: true
            });

        // ==========================================
        // Search
        // ==========================================
        this.usernameSearch = page
            .locator('.oxd-input-group')
            .filter({
                has: page.locator('input')
            })
            .first()
            .locator('input');

        this.searchButton = page
            .locator('.oxd-form-actions')
            .getByRole('button')
            .last();

        // ==========================================
        // User Table
        // ==========================================
        this.tableRows = page.locator(
            '.oxd-table-body .oxd-table-row'
        );

        // ==========================================
        // Save
        // ==========================================
        this.saveButton = page.getByRole('button', {
            name: 'Save'
        });

        // ==========================================
        // User Role
        // ==========================================
        this.userRoleDropdown = page
            .locator('.oxd-input-group')
            .filter({
                hasText: 'User Role'
            })
            .locator('.oxd-select-text');

        // ==========================================
        // Status
        // ==========================================
        this.statusDropdown = page
            .locator('.oxd-input-group')
            .filter({
                hasText: 'Status'
            })
            .locator('.oxd-select-text');

        // ==========================================
        // Logout
        // ==========================================
        this.userDropdown = page.locator(
            '.oxd-userdropdown'
        );

        this.logoutButton = page.getByText('Logout', {
            exact: true
        });
    }

    async openAdmin() {
    // Admin page is already available after login.
    // No navigation needed.
    }


    // ==========================================
    // Open Users
    // ==========================================
    async openUsers() {
    await this.page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    await this.searchButton.waitFor({
        state: 'visible',
        timeout: 10000
        });
    }

    // ==========================================
    // Search User
    // ==========================================
    async searchUser(username) {
    await this.usernameSearch.waitFor({
        state: 'visible',
        timeout: 10000
    });

    await this.usernameSearch.fill(username);

    await this.searchButton.click();

    await this.page.waitForTimeout(1000);
    }


    // ==========================================
    // Get User Row
    // ==========================================
    getUserRow(username) {

        return this.tableRows.filter({
            hasText: username
        });
    }


    // ==========================================
    // Verify User
    // ==========================================
    async verifyUser(username) {

        const userRow = this.getUserRow(username);

        await userRow.waitFor({
            state: 'visible',
            timeout: 10000
        });

        return userRow;
    }


    // ==========================================
    // Edit User
    // ==========================================
    async editUser(username) {

        const userRow = this.getUserRow(username);

        await userRow
            .getByRole('button')
            .last()
            .click();

        await this.saveButton.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }


    // ==========================================
    // Change User Role
    // ==========================================
    async changeUserRole(role) {

        await this.userRoleDropdown.click();

        const roleOption = this.page
            .getByRole('listbox')
            .getByText(role, {
                exact: true
            });

        await roleOption.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await roleOption.click();
    }


    // ==========================================
    // Change User Status
    // ==========================================
    async changeUserStatus(status) {

        await this.statusDropdown.click();

        const statusOption = this.page
            .getByRole('listbox')
            .getByText(status, {
                exact: true
            });

        await statusOption.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await statusOption.click();
    }


    // ==========================================
    // Save User
    // ==========================================
    async saveUser() {

        await this.saveButton.click();

        await this.page.waitForTimeout(1500);
    }


    // ==========================================
    // Refresh Page
    // ==========================================
    async refreshPage() {

        // Refresh the current page
        await this.page.reload({
            waitUntil: 'domcontentloaded'
        });

        // After refresh, make sure we are
        // on the Users list page.
        //
        // OrangeHRM may remain on the Edit User
        // page after saving.

        await this.openUsers();

        // Final confirmation that Search is available
        await this.searchButton.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }


    // ==========================================
    // Logout
    // ==========================================
    async logout() {

        await this.userDropdown.click();

        await this.logoutButton.click();

        await this.page.waitForURL(
            /\/auth\/login/,
            {
                timeout: 10000
            }
        );
    }
}


module.exports = { AdminPage };