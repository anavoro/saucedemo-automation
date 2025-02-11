const loginTestPage = require("../../pageobjects/02-logintestpage.js");
const logoutTestPage = require("../../pageobjects/05-logouttestpage.js");
const inventoryPage = require("../../pageobjects/03-inventorypage.js");

describe("Login", () => {
  it("should log out after successful login", async () => {
    await loginTestPage.open();
    await loginTestPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl(inventoryPage.url);
    await logoutTestPage.logout();

    await expect(browser).toHaveUrl(loginTestPage.baseUrl);
  });
});
