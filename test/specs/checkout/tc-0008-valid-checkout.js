const { expect } = require('@wdio/globals');
const LoginTestPage = require('../../pageobjects/login-test.js');
const CartActions = require('../../pageobjects/cart-add.js'); 
const CheckoutTestPage = require ('../../pageobjects/checkout.js');
const CartTestPage = require('../../pageobjects/cart-test.js');

describe('Valid Chekout', () => {
    it('should fill out all information and checkout successfully', async () => {

        await LoginTestPage.open();
        await LoginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        await CartActions.addItemToCart();

        const cartButton = await $('.shopping_cart_link').click();

        const checkoutButton = await $('#checkout').click();
        
        await CheckoutTestPage.fillOutCheckoutDetails('Harry', 'Potter', '47001');

        const finishButton = await $('#finish').click();
        const homeButton = await $('#back-to-products').click();
        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        const cartItemCount = await CartTestPage.getItemCount();
        expect(cartItemCount).toBe(0);

    });
});