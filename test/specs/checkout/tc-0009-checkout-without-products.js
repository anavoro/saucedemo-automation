const loginTestPage = require("../../pageobjects/02-logintestpage.js");
const checkoutPage = require("../../pageobjects/05-checkoutpage.js");
const inventoryPage = require("../../pageobjects/03-inventorypage.js");
const cartPage = require("../../pageobjects/04-cartpage.js");

describe("Checkout", () => {
  it("should not proceed without any products in a cart", async () => {
    await loginTestPage.open();
    await loginTestPage.login("standard_user", "secret_sauce");

    await expect(browser).toHaveUrl(inventoryPage.url);

    await inventoryPage.goToCart();
    const itemCount = await inventoryPage.getItemCount();

    expect(itemCount).toBe(0);

    await cartPage.proceedToCheckout();
    const errorMessageText = await checkoutPage.errorMessage.getText();

    expect(errorMessageText).toContain("Cart is empty");
  });
});
