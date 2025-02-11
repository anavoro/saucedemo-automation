const LoginTestPage = require('../../pageobjects/02-logintestpage.js');
const LogoutTestPage = require('../../pageobjects/05-logouttestpage.js');
const InventoryPage = require('../../pageobjects/03-inventorypage.js');

describe('Logout from Current account', () => {
    it('should log out after successful login', async () => {

        await loginTestPage.open();

        await loginTestPage.login('standard_user', 'secret_sauce');

        await expect(browser).toHaveUrl(inventoryPage.url);
       
        await logoutTestPage.logout();

        await expect(browser).toHaveUrl(loginTestPage.baseUrl);
    });
});
