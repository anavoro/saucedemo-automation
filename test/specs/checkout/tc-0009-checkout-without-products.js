const loginTestPage = require('../../pageobjects/02-logintestpage.js');
const checkoutPage = require ('../../pageobjects/05-checkoutpage.js');
const inventoryPage = require ('../../pageobjects/03-inventorypage.js')

describe('Invalid Checkout', () => {
    it('should not proceed without any products in a cart', async () => {

        await loginTestPage.open();
        await loginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(inventoryPage.url);

        await inventoryPage.goToCart()

        const cartItems = await $$('[data-test="cart-item"]');
        expect(cartItems.length).toBe(0);

        await cartPage.proceedToCheckout();

        const errorMessageText = await checkoutPage.errorMessage.getText();  
        expect(errorMessageText).toContain('Cart is empty');

    });
});