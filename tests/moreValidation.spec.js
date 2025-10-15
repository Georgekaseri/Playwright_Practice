const {test,expect} = require('@playwright/test');

test.only('More validation', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   await page.goto("https://google.co.uk/");
//   await page.goBack();  
//   await page.goForward();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

// JavaScript Alerts
await page.locator("#name").fill("George");
await page.locator("#confirmbtn").click();
page.on('dialog', dialog => dialog.accept()); 

// Hovering mouse
await page.locator("#mousehover").hover();
await page.locator("a[href='#top']").click();

// Iframes
const framePage = page.frameLocator("#courses-iframe");
await framePage.locator("a[href*='lifetime-access']:visible").click();
const noSub = await framePage.locator(".text h2").textContent();
console.log(noSub.split(" ")[1]);





});