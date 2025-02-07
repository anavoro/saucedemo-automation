const { expect } = require('@wdio/globals');
const LoginTestPage = require('../../pageobjects/login-test.js');

describe('My Login application', () => {
    it('should login successfully and redirect to inventory page', async () => {
        // Open the login page
        await LoginTestPage.open();

        // Attempt to login with an invalid username and password
        await LoginTestPage.login('standard_user', 'secret_sauce');

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});