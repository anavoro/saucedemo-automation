const loginPage = require("../../pageobjects/loginpage.js");
const checkoutPage = require("../../pageobjects/checkoutpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");
const cartPage = require("../../pageobjects/cartpage.js");

describe("Checkout", () => {
  it("should not proceed without any products in a cart", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(browser).toHaveUrl(inventoryPage.url);

    await inventoryPage.goToCart();
    const itemCount = await inventoryPage.getItemCount();

    expect(itemCount).toBe(0);

    await cartPage.proceedToCheckout();
    const errorMessageText = await checkoutPage.errorMessage.getText();

    expect(errorMessageText).toContain("Cart is empty");
  });
});
