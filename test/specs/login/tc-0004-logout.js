const { expect } = require('@wdio/globals');
const LoginTestPage = require('../../pageobjects/login-test.js');
const LogoutTestPage = require('../../pageobjects/logout-test.js');

describe('Logout from Current account', () => {
    it('should log out after successful login', async () => {

        await LoginTestPage.open();

        await LoginTestPage.login('standard_user', 'secret_sauce');

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        await LogoutTestPage.logout();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });
});

