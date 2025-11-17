const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/pages/LoginPage');
const { DashboardPage } = require('../pageObjects/pages/DashboardPage');
const { CartPage } = require('../pageObjects/pages/CartPage');
const { CheckoutPage } = require('../pageObjects/pages/CheckoutPage');
const { OrdersPage } = require('../pageObjects/pages/OrdersPage');

test('End to End Test', async ({ page }) => {
    const email = "georgekaseri22@gmail.com";
    const password = "Leeds85@";
    const productName = "ZARA COAT 3";

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(email, password);

    // Add product to cart
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchProductAddToCart(productName);
    await dashboardPage.navigateToCart();

    // Verify and checkout
    const cartPage = new CartPage(page);
    const isVisible = await cartPage.verifyProductIsDisplayed(productName);
    expect(isVisible).toBeTruthy();
    await cartPage.checkout();

    // Fill checkout details
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.selectCountry("India");
    await checkoutPage.verifyEmailDisplay(email);
    await checkoutPage.submitOrder();
    await checkoutPage.verifyOrderConfirmation();
    const orderId = await checkoutPage.getOrderId();

    // Verify order in orders page
    const ordersPage = new OrdersPage(page);
    await ordersPage.navigateToOrders();
    await ordersPage.searchOrderAndView(orderId);
    await ordersPage.verifyOrderDetails(orderId);
});