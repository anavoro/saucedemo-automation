const { $ } = require('@wdio/globals');
const BasePage = require('./01-basepage');

class CheckoutPage extends BasePage {
    get inputFirstName() {
        return $('#first-name'); 
    }

    get inputLastName() {
        return $('#last-name'); 
    }

    get inputPostalCode() {
        return $('#postal-code'); 
    }

    get btnContinue() {
        return $('#continue'); 
    }

    get errorMessage() {
        return $('.error-message-container'); 
    }

    async fillOutCheckoutDetails(firstName, lastName, postalCode) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPostalCode.setValue(postalCode);
        await this.btnContinue.click(); 
    }

    async finishCheckout() {
        await $('#finish').click();
    }

    async returnToProducts() {
        await $('#back-to-products').click();
    }
}

module.exports = new CheckoutPage();
