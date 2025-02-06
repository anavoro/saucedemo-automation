class CheckoutTestPage {
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
}

module.exports = new CheckoutTestPage();
