const loginTestPage = require('../../pageobjects/02-logintestpage.js');
const inventoryPage = require('../../pageobjects/03-inventorypage.js');
const cartPage = require('../../pageobjects/04-cartpage.js');
const logoutTestPage = require('../../pageobjects/05-logouttestpage.js');

describe('Saving the cart after logout', () => {
    it('Should keep the products in the cart after logging back in', async () => {
        
        await loginTestPage.open();
        await loginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(inventoryPage.url);

        await inventoryPage.addItemToCart();

        let itemCount = await InventoryPage.getItemCount();
        expect(itemCount).toBe(1);

        await logoutTestPage.logout();
        await loginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(InventoryPage.url);

        itemCount = await inventoryPage.getItemCount();
        expect(itemCount).toBe(1);

        await inventoryPage.goToCart();
        const cartItemText = await cartPage.getCartItemText();
        expect(cartItemText).toBe('Sauce Labs Backpack');
    });
});
