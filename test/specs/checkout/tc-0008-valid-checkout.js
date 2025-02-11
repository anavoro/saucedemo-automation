const loginPage = require("../../pageobjects/loginpage.js");
const cartPage = require("../../pageobjects/cartpage.js");
const checkoutPage = require("../../pageobjects/checkoutpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");
const { faker } = require("@faker-js/faker");

describe("Checkout", () => {
  it("should fill out all information and checkout successfully", async () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const zipCode = faker.location.zipCode();

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl(inventoryPage.url);

    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillOutCheckoutDetails(firstName, lastName, zipCode);
    await checkoutPage.finishCheckout();
    await checkoutPage.returnToProducts();

    await expect(browser).toHaveUrl(inventoryPage.url);

    const cartItemCount = await inventoryPage.getItemCount();
    expect(cartItemCount).toBe(0);
  });
});
