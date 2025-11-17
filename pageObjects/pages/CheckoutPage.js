const { expect } = require('@playwright/test');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.countryInput = page.locator("[placeholder*='Country']");
        this.countryDropdown = page.locator(".ta-results");
        this.userEmail = page.locator(".user__name [type='text']");
        this.submitButton = page.locator(".action__submit");
        this.confirmationMessage = page.locator(".hero-primary");
        this.orderIdElement = page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async selectCountry(countryName) {
        await this.countryInput.pressSequentially("ind", { delay: 150 });
        await this.countryDropdown.waitFor();
        
        const optionsCount = await this.countryDropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await this.countryDropdown.locator("button").nth(i).textContent();
            if (text === ` ${countryName}`) {
                await this.countryDropdown.locator("button").nth(i).click();
                break;
            }
        }
    }

    async verifyEmailDisplay(email) {
        await expect(this.userEmail.first()).toHaveText(email);
    }

    async submitOrder() {
        await this.submitButton.click();
    }

    async verifyOrderConfirmation() {
        await expect(this.confirmationMessage).toHaveText(" Thankyou for the order. ");
    }

    async getOrderId() {
        const orderId = await this.orderIdElement.textContent();
        console.log(orderId);
        return orderId;
    }
}
module.exports = { CheckoutPage };