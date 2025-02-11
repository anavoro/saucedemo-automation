const loginTestPage = require('../../pageobjects/02-logintestpage.js');
const inventoryPage = require('../../pageobjects/03-inventorypage.js');

describe('Footer Links Test', () => {
    it('should open footer links in a new tab and navigate correctly', async () => {
        await loginTestPage.open();
        await loginTestPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(inventoryPage.url);

        for (const footerLink of inventoryPage.footerLinks) {
            await inventoryPage.clickFooterLink(footerLink);
        }
    });
});