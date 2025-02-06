class CartActions {
    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack'); 
    }
    
    async addItemToCart() {
        const button = await this.addToCartButton;
        await button.waitForDisplayed(); // Wait until the button is visible
        await button.click();
    }
}

module.exports = new CartActions();