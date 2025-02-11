const { $ } = require("@wdio/globals");
const BasePage = require("./basepage");

class LoginTestPage extends BasePage {
  get inputUsername() {
    return $("#user-name");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $("#login-button");
  }

  get errorMessage() {
    return $(".error-message-container");
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

module.exports = new LoginTestPage();
