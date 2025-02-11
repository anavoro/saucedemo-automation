const BasePage = require("./basepage");

class CheckoutPage extends BasePage {
  get inputFirstName() {
    return $("#first-name");
  }

  get inputLastName() {
    return $("#last-name");
  }

  get inputPostalCode() {
    return $("#postal-code");
  }

  get btnContinue() {
    return $("#continue");
  }

  get errorMessageText() {
    return $(".error-message-container").getText();
  }

  async fillOutCheckoutDetails(firstName, lastName, postalCode) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputPostalCode.setValue(postalCode);
    await this.btnContinue.click();
  }

  async finishCheckout() {
    await $("#finish").click();
  }

  async returnToProducts() {
    await $("#back-to-products").click();
  }
}

module.exports = new CheckoutPage();
