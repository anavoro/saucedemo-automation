const loginPage = require("../../pageobjects/loginpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");
const cartPage = require("../../pageobjects/cartpage.js");
const logoutPage = require("../../pageobjects/logoutpage.js");

describe("Cart", () => {
  it("Should keep the products in the cart after logging back in", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl(inventoryPage.url);

    await inventoryPage.addItemToCart();

    let itemCount = await inventoryPage.getItemCount();
    expect(itemCount).toBe(1);

    await logoutPage.logout();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl(inventoryPage.url);

    itemCount = await inventoryPage.getItemCount();
    expect(itemCount).toBe(1);

    await inventoryPage.goToCart();
    const cartItemText = await cartPage.getCartItemText();
    expect(cartItemText).toBe("Sauce Labs Backpack");
  });
});
