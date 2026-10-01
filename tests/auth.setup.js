const { test: setup, expect } = require('@playwright/test');

const authFile = 'storageState.json';

setup('authenticate', async ({ page }) => {

    // Open SwagLabs
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Verify successful login
    await expect(page.locator('.title')).toHaveText('Products');

    // Save login session
    await page.context().storageState({ path: authFile });
});