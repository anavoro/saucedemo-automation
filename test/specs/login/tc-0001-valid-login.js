const loginTestPage = require("../../pageobjects/logintestpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");

describe("Login", () => {
  it("should login successfully and redirect to inventory page", async () => {
    await loginTestPage.open();
    await loginTestPage.login("standard_user", "secret_sauce");

    await expect(browser).toHaveUrl(inventoryPage.url);
  });
});
