const loginPage = require("../../pageobjects/loginpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");

describe("Login", () => {
  it("should login successfully and redirect to inventory page", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(browser).toHaveUrl(inventoryPage.url);
  });
});
