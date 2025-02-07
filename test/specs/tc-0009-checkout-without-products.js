const { expect } = require('@wdio/globals');
const LoginTestPage = require('../pageobjects/login-test.js');
const CheckoutTestPage = require ('../pageobjects/checkout.js');

describe('Invalid Checkout', () => {
    it('should not proceed without any products in a cart', async () => {

        await LoginTestPage.open();
        await LoginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        await $('.shopping_cart_link').click();

        const cartItems = await $$('[data-test="cart-item"]');
        expect(cartItems.length).toBe(0);

        await $('#checkout').click();

        const errorMessageText = await CheckoutTestPage.errorMessage.getText();  
        expect(errorMessageText).toContain('Cart is empty');

    });
});