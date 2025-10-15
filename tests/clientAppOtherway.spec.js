const {test, expect} = require('@playwright/test');
const { forEach, has } = require('lodash');
const { text } = require('stream/consumers');

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
test.only('GetbyRole', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "georgekaseri22@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Leeds85@");
   await page.getByRole('button', {name: 'Login'}).click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

   await page.locator(".card-body").filter({ hasText: 'ADIDAS ORIGINAL' })
   .getByRole("button", { name: "Add To Cart" }).click();
 
   await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();

   await page.getByRole("button", { name: "Checkout" }).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("Ind");
   await page.getByRole('button', { name: 'India' }).nth(1).click();
   await page.getByText('PLACE ORDER').click();
   await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();

   
   
   
 
   // expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   // await page.getByRole("button", { name: "Place Order" }).click();

   // await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   // const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   // console.log(orderId);
 
   // await page.locator("button[routerlink*='myorders']").click();
   // await page.locator("tbody").waitFor();
   // const rows = await page.locator("tbody tr");
 
 
   // for (let i = 0; i < await rows.count(); ++i) {
   //    const rowOrderId = await rows.nth(i).locator("th").textContent();
   //    if (orderId.includes(rowOrderId)) {
   //       await rows.nth(i).locator("button").first().click();
   //       break;
   //    }
   // }
   // const orderIdDetails = await page.locator(".col-text").textContent();
   // expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
  

});