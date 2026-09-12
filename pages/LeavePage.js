class LeavePage {

    constructor(page) {
        this.page = page;
    }

    async openApplyLeave() {
        await this.page.getByRole('link', { name: 'Leave' }).click();

        await this.page.getByRole('link', { name: 'Apply' }).click();
    }
}

module.exports = { LeavePage };