const loginPage = require("../../pageobjects/loginpage.js");
const inventoryPage = require("../../pageobjects/inventorypage.js");

describe("Products", () => {
  const sortTests = [
    {
      name: "Name (A to Z)",
      selector: "[data-test='inventory-item-name']",
      sortMethod: (names) => [...names].sort(),
    },
    {
      name: "Name (Z to A)",
      selector: "[data-test='inventory-item-name']",
      sortMethod: (names) => [...names].sort().reverse(),
    },
    {
      name: "Price (low to high)",
      selector: "[data-test='inventory-item-price']",
      sortMethod: (prices) =>
        [...prices].sort(
          (a, b) =>
            parseFloat(a.replace("$", "")) - parseFloat(b.replace("$", ""))
        ),
    },
    {
      name: "Price (high to low)",
      selector: "[data-test='inventory-item-price']",
      sortMethod: (prices) =>
        [...prices].sort(
          (a, b) =>
            parseFloat(b.replace("$", "")) - parseFloat(a.replace("$", ""))
        ),
    },
  ];

  sortTests.forEach(({ name, selector, sortMethod }) => {
    it(`Should sort items by ${name}`, async () => {
      await loginPage.open();
      await loginPage.login("standard_user", "secret_sauce");

      await expect(browser).toHaveUrl(inventoryPage.url);

      await inventoryPage.selectSortOption(name);
      const itemData = await inventoryPage.getItemData(selector);
      const sortedData = sortMethod(itemData);

      expect(itemData).toEqual(sortedData);
      await expect(browser).toHaveUrl(inventoryPage.url);
    });
  });
});
