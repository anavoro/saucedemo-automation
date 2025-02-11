const { $ } = require('@wdio/globals');
class BasePage {
    baseUrl = 'https://www.saucedemo.com';

    async open(path = '') {
        await browser.url(`${this.baseUrl}${path}`);
    }

    async expectCurrentUrl(url) {
        await expect(browser).toHaveUrl(url);
    }
}

module.exports = BasePage; 
