const { expect } = require('@wdio/globals');
const LoginTestPage = require('../../pageobjects/login-test.js');
const CartTestPage = require('../../pageobjects/cart-test.js');
const CartActions = require('../../pageobjects/cart-add.js'); 
const LogoutTestPage = require('../../pageobjects/logout-test.js');

describe('Saving the cart after logout', () => {
    it('Should keep the products in the cart after logging back in', async () => {
     
        await LoginTestPage.open();
        await LoginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    
        await CartActions.addItemToCart();
    
        let itemCount = await CartTestPage.getItemCount();
        expect(itemCount).toBe(1);

        await LogoutTestPage.logout();
        await LoginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        const cartItemCount = await CartTestPage.getItemCount();
        expect(cartItemCount).toBe(1); 
        
        const cartButton = await $('.shopping_cart_link').click();
        const cartItemName = await $('#cart_contents_container .inventory_item_name');
        const cartItemText = await cartItemName.getText();
        
        expect(cartItemText).toBe('Sauce Labs Backpack');
    });
});
