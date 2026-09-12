class PIMPage {
    constructor(page) {
        this.page = page;

        // =========================
        // Main Menu
        // =========================
        this.pimMenu = page.getByText('PIM', { exact: true });

        // =========================
        // PIM Submenus
        // =========================
        this.addEmployeeMenu = page.getByText('Add Employee', { exact: true });
        this.employeeListMenu = page.getByText('Employee List', { exact: true });

        // =========================
        // Add Employee Form
        // =========================
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');

        // =========================
        // Buttons
        // =========================
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.searchButton = page.getByRole('button', { name: 'Search' });

        // =========================
        // Logout
        // =========================
        this.userDropdown = page.locator('.oxd-userdropdown');
        this.logoutButton = page.getByText('Logout', { exact: true });
    }

    // =========================
    // Open PIM
    // =========================
    async openPIM() {
        await this.pimMenu.click();

        await this.employeeListMenu.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }

    // =========================
    // Open Add Employee
    // =========================
    async openAddEmployee() {
        await this.addEmployeeMenu.click();

        await this.firstNameInput.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }

    // =========================
    // Add Employee
    // =========================
    async addEmployee(firstName, middleName, lastName, employeeId) {

        await this.firstNameInput.fill(firstName);

        await this.middleNameInput.fill(middleName);

        await this.lastNameInput.fill(lastName);

        const employeeIdInput = this.page
            .locator('.oxd-input-group')
            .filter({ hasText: 'Employee Id' })
            .locator('input');

        await employeeIdInput.fill(employeeId);

        await this.saveButton.click();

        // Allow save operation to complete
        await this.page.waitForTimeout(1500);
    }

    // =========================
    // Open Employee List
    // =========================
    async openEmployeeList() {
        await this.employeeListMenu.click();

        await this.page.waitForTimeout(1500);
    }

    // =========================
    // Search Employee
    // =========================
    async searchEmployee(employeeId) {

        const employeeIdSearch = this.page
            .locator('.oxd-input-group')
            .filter({ hasText: 'Employee Id' })
            .locator('input');

        await employeeIdSearch.fill(employeeId);

        await this.searchButton.click();

        await this.page.waitForTimeout(1500);
    }

    // =========================
    // Logout
    // =========================
    async logout() {

        await this.userDropdown.click();

        await this.logoutButton.click();

        await this.page.waitForURL(/\/auth\/login/, {
            timeout: 10000
        });
    }
}

module.exports = { PIMPage };