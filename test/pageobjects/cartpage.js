const BasePage = require("./basepage");

class CartPage extends BasePage {
  get cartItemName() {
    return $("#cart_contents_container .inventory_item_name");
  }

  async getCartItemText() {
    return await this.cartItemName.getText();
  }

  async proceedToCheckout() {
    await $("#checkout").click();
  }
}

module.exports = new CartPage();
