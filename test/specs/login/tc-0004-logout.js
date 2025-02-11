const loginPage = require("../../pageobjects/loginpage.js");
const logoutPage = require("../../pageobjects/logoutpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");

describe("Login", () => {
  it("should log out after successful login", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl(inventoryPage.url);
    await logoutPage.logout();

    await expect(browser).toHaveUrl(loginPage.baseUrl);
  });
});
