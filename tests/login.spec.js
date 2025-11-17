const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/pages/LoginPage');
const userName = "georgekaseri22@gmail.com";
const password = "Leeds85@";

test('Successful Login Page Tests', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login(userName, password);
});

test('Invalid Login without Username', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goTo();
    await login.login("", password);
   
    const errorMessage = await login.getErrorMessage(); 
    expect(errorMessage).toBe("*Email is required");
});