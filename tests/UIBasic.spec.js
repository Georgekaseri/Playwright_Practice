const {test, expect} = require('@playwright/test');


test ('Browser Context Playwright Test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://youtube.com/');
     //print title in console
    console.log(await page.title());
     //get title assertion
    await expect(page).toHaveTitle('YouTube');
});

test ('Page Playwright Test', async ({page})=>
{
    await page.goto('https://google.co.uk/');
    //get title assertion
    await expect(page).toHaveTitle('Google');
    //print title in console
    console.log(await page.title());
    
});
test('InValid Login Test,', async ({page})=>
{
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const terms = page.locator('#terms');
    const signInBtn = page.locator('#signInBtn');
    const alert = page.locator("[style*='display: block;']");
    const cardTitle = page.locator('.card-body a');


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.fill('#username', 'rahulshettyacademy');
    await page.fill('#password', 'learning123');
    await page.check('#terms');
    await page.click('#signInBtn');
    //get assertion for invalid login
    await expect(page.locator("[style*='display: block;']")).toHaveText(' Incorrect username/password.');
    await expect(page.locator("[style*='display: block;']")).toContainText('Incorrect username/password.');
    console.log(await page.locator("[style*='display: block;']").textContent());
   
});
test('Valid Login Test,', async ({page})=>
{
    const cardTitle = page.locator('.card-body a');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.fill('#username', 'rahulshettyacademy');
    await page.fill('#password', 'learning');
    await page.check('#terms');
    await page.click('#signInBtn');
    console.log(await cardTitle.nth(0).textContent());
    console.log(await cardTitle.nth(1).textContent());
    console.log(await cardTitle.allTextContents());

});
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