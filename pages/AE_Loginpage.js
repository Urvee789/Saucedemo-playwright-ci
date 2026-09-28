const {expect} = require("@playwright/test");

exports.AE_Loginpage = class AE_Loginpage {
    constructor(page){
    this.page = page;
    this.loginmenu = page.locator('a[href="/login"]');
    this.usernameInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginBtn = page.locator('button[data-qa="login-button"]');
    }

     async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
   
  }
};