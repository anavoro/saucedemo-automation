const loginTestPage = require("../../pageobjects/logintestpage.js");
const logoutTestPage = require("../../pageobjects/logouttestpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");

describe("Login", () => {
  it("should log out after successful login", async () => {
    await loginTestPage.open();
    await loginTestPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl(inventoryPage.url);
    await logoutTestPage.logout();

    await expect(browser).toHaveUrl(loginTestPage.baseUrl);
  });
});
