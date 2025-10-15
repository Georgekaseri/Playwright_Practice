import { test, expect } from "@playwright/test";

test.only('Playwright Special locators', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');

await page.getByLabel('Check me out if you Love IceCreams!').click();
await page.getByLabel("Employed").click();
await page.getByLabel("Gender").selectOption("Male");
await page.getByPlaceholder("Password").fill("Iamking@000");
await page.getByRole("button", { name: "Submit" }).click();
await page.getByText(" The Form has been submitted successfully!.").isVisible();
await page.getByRole("link", { name: "shop" }).click();
await page.locator('app-card').filter({hasText: 'Blackberry'}).getByRole("button").click();

});