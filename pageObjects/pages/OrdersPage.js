const { expect } = require('@playwright/test');

class OrdersPage {
    constructor(page) {
        this.page = page;
        this.ordersButton = page.locator("button[routerlink*='myorders']");
        this.ordersTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderIdDetails = page.locator(".col-text");
    }

    async navigateToOrders() {
        await this.ordersButton.click();
        await this.ordersTable.waitFor();
    }

    async searchOrderAndView(orderId) {
        for (let i = 0; i < await this.rows.count(); ++i) {
            const rowOrderId = await this.rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator("button").first().click();
                break;
            }
        }
    }

    async verifyOrderDetails(orderId) {
        const orderIdDetails = await this.orderIdDetails.textContent();
        expect(orderId.includes(orderIdDetails)).toBeTruthy();
    }
}
module.exports = { OrdersPage };