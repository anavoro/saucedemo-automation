const { $ } = require('@wdio/globals');


class LogoutPage  {
    get btnBurger() { return $('#react-burger-menu-btn'); }
    get btnLogout() { return $('#logout_sidebar_link'); }

    async logout() {
        await this.btnBurger.click();
        await this.btnLogout.click();
    }
}

module.exports = new LogoutPage();