const { expect } = require('@wdio/globals');
const LoginTestPage = require('../pageobjects/login-test.js');
const CheckoutTestPage = require ('../pageobjects/checkout.js');

describe('Invalid Checkout', () => {
    it('should not proeced without any products in a cart', async () => {

        await LoginTestPage.open();
        await LoginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        const cartButton = await $('.shopping_cart_link').click();

        const checkoutButton = await $('#checkout').click();

        const errorMessageText = await CheckoutTestPage.errorMessage.getText();  
        expect(errorMessageText).toContain('Cart is empty');

    });
});