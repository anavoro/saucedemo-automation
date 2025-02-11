const loginTestPage = require('../../pageobjects/02-logintestpage.js');
const cartPage = require('../../pageobjects/04-cartpage.js'); 
const checkoutPage = require ('../../pageobjects/05-checkoutpage.js');
const inventoryPage = require ('../../pageobjects/03-inventorypage.js')
const { faker } = require('@faker-js/faker');

describe('Valid Chekout', () => {
    it('should fill out all information and checkout successfully', async () => {

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const zipCode = faker.location.zipCode();

        await loginTestPage.open();
        await loginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(inventoryPage.url);

        await inventoryPage.addItemToCart();

        await inventoryPage.goToCart();

        await cartPage.proceedToCheckout();
        
        await checkoutPage.fillOutCheckoutDetails(firstName, lastName, zipCode);

        await checkoutPage.finishCheckout();
        await checkoutPage.returnToProducts();
        
        await expect(browser).toHaveUrl(inventoryPage.url);

        const cartItemCount = await inventoryPagePage.getItemCount();
        expect(cartItemCount).toBe(0);

    });
});