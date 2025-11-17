class CartPage {
    constructor(page) {
      this.page = page;
        this.cartProducts = page.locator("div li");
        this.checkoutButton = page.locator("text=Checkout");
    }
    async verifyProductIsDisplayed(productName) {
        await this.cartProducts.first().waitFor();
        const bool = await this.page.locator(`h3:has-text('${productName}')`).isVisible();
        return bool;
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}
module.exports = { CartPage };