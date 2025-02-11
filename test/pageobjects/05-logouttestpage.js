const { $ } = require('@wdio/globals');
const BasePage = require('./01-basepage');

class LogoutPage  {
    get btnBurger() { return $('#react-burger-menu-btn'); }
    get btnLogout() { return $('#logout_sidebar_link'); }

    async logout() {
        await this.btnBurger.click();
        await this.btnLogout.click();
    }
}

module.exports = new LogoutPage();