const { test, expect } = require("@playwright/test");
const { AE_Loginpage } = require("../pages/AE_Loginpage.js");


test('Automation exercise page', async ({ page }) => {

    const ae_Loginpage = new AE_Loginpage(page);

    //Login
    await page.goto("https://automationexercise.com/");
    await page.click('a[href="/login"]');

    await ae_Loginpage.login('urvitest@yopmail.com', 'urvitest@123');

});

test('Account Info fill up', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const ae_Loginpage = new AE_Loginpage(page);

    await ae_Loginpage.loginmenu.click();
    await ae_Loginpage.login('urvitest123@yopmail.com', 'urvitest@123');
    // await page.locator('input[data-qa="login-button"]').click();
    await ae_Loginpage.loginBtn.click();
})



