const { $ } = require('@wdio/globals');

class LoginTestPage {
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('#login-button'); }

    // Correct way to define an error message selector
    get errorMessage() { return $('.error-message-container'); }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return browser.url('https://www.saucedemo.com/');
    }
}

module.exports = new LoginTestPage();

