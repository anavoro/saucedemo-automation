const { expect } = require('@wdio/globals');
const LoginTestPage = require('../pageobjects/login-test.js');

describe('Wrong Password application', () => {
    it('should not login with an invalid password', async () => {
        // Open the login page
        await LoginTestPage.open();

        // Attempt to login with an invalid username and password
        await LoginTestPage.login('error_user', 'secret_sauce!');

        // Expect an error message to be visible on the page
        const errorMessageText = await LoginTestPage.errorMessage.getText();  // Use getter property

        // Assert that the error message contains the expected text
        expect(errorMessageText).toContain('Username and password do not match any user in this service');
    });
});

