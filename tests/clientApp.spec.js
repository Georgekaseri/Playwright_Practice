const {test, expect} = require('@playwright/test');

test('Register New User Test,', async ({page})=>
{
    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const userEmail = page.locator('#userEmail');
    const phoneNumber = page.locator('#userMobile');
    const occupation = page.locator('select[formcontrolname="occupation"]');
    const selectGender = page.locator('input[formcontrolname="gender"]');
    const fillPassword = page.locator('#userPassword');
    const confirmPassword = page.locator('#confirmPassword');
    const clickOnAge = page.locator("input[type='checkbox']");
    const registerBtn = page.locator('#login');
    await page.goto('https://rahulshettyacademy.com/client/#/auth/register');
    await firstName.fill('George');
    await lastName.fill('Kaseri');
    await userEmail.fill('georgekaseri22@gmail.com');
    await phoneNumber.fill('1234567890');
    await occupation.selectOption({ value: '3: Engineer' });
    await selectGender.nth(0).check();
    await fillPassword.fill('Leeds85@');
    await confirmPassword.fill('Leeds85@'); 
    await clickOnAge.check();
    await registerBtn.click();
});
test.only('login with new user', async ({page})=>    
{
    const userEmail = page.locator('#userEmail');
    const fillPassword = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    const cardTile1 = page.locator('.card-body b')

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await userEmail.fill('georgekaseri22@gmail.com');
    await fillPassword.fill('Leeds85@');
    await loginBtn.click();
    console.log(await cardTile1.nth(0).textContent());
    console.log(await cardTile1.allTextContents())
});