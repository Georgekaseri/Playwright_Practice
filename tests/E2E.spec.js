const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObjects/pages/POManager');

test('End to End Test', async ({ page }) => {
    const email = "georgekaseri22@gmail.com";
    const password = "Leeds85@";
    const productName = "ZARA COAT 3";

    // Single instantiation!
    const poManager = new POManager(page);
    
    // Login
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(email, password);

    // Add product to cart
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddToCart(productName);
    await dashboardPage.navigateToCart();

    // Verify and checkout
    const cartPage = poManager.getCartPage();
    const isVisible = await cartPage.verifyProductIsDisplayed(productName);
    expect(isVisible).toBeTruthy();
    await cartPage.checkout();

    // Fill checkout details
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.selectCountry("India");
    await checkoutPage.verifyEmailDisplay(email);
    await checkoutPage.submitOrder();
    await checkoutPage.verifyOrderConfirmation();
    const orderId = await checkoutPage.getOrderId();

    // Verify order
    const ordersPage = poManager.getOrdersPage();
    await ordersPage.navigateToOrders();
    await ordersPage.searchOrderAndView(orderId);
    await ordersPage.verifyOrderDetails(orderId);
});