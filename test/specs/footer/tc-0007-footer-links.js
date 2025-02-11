const loginTestPage = require("../../pageobjects/logintestpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");

describe("Footer", () => {
  it("should open footer links in a new tab and navigate correctly", async () => {
    await loginTestPage.open();
    await loginTestPage.login("standard_user", "secret_sauce");
    await expect(browser).toHaveUrl(inventoryPage.url);

    for (const footerLink of inventoryPage.footerLinks) {
      await inventoryPage.clickFooterLink(footerLink);
    }
  });
});
