const loginTestPage = require('../../pageobjects/02-logintestpage.js');
const inventoryPage = require ('../../pageobjects/03-inventorypage.js');


describe('My Login application', () => {
    it('should login successfully and redirect to inventory page', async () => {
        
        await loginTestPage.open();

        await loginTestPage.login('standard_user', 'secret_sauce');

        await expect(browser).toHaveUrl(inventoryPage.url);
    });
});