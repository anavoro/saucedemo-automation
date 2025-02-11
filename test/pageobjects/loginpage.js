const BasePage = require("./basepage");

class LoginPage extends BasePage {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }

  get errorMessageText() {
    return $(".error-message-container").getText();
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

module.exports = new LoginPage();
