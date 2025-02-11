const { $ } = require("@wdio/globals");
const BasePage = require("./01-basepage");

class InventoryPage extends BasePage {
  sortOptionMap = {
    "Name (A to Z)": "az",
    "Name (Z to A)": "za",
    "Price (low to high)": "lohi",
    "Price (high to low)": "hilo",
  };

  get url() {
    return `${this.baseUrl}inventory.html`;
  }

  get addToCartButton() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get cartItemCount() {
    return $("span.shopping_cart_badge");
  }

  get sortDropdown() {
    return $(".product_sort_container");
  }

  async addItemToCart() {
    const button = await this.addToCartButton;
    await button.waitForDisplayed();
    await button.click();
  }

  async getItemCount() {
    const isDisplayed = await this.cartItemCount.isExisting();
    if (!isDisplayed) return 0;

    const cartItemCountText = await this.cartItemCount.getText();
    return parseInt(cartItemCountText) || 0;
  }

  async goToCart() {
    await $(".shopping_cart_link").click();
  }

  footerLinks = [
    {
      name: "Twitter",
      selector: 'a[href="https://twitter.com/saucelabs"]',
      expectedUrl: "https://x.com/saucelabs",
    },
    {
      name: "Facebook",
      selector: 'a[href="https://www.facebook.com/saucelabs"]',
      expectedUrl: "https://www.facebook.com/saucelabs",
    },
    {
      name: "LinkedIn",
      selector: 'a[href="https://www.linkedin.com/company/sauce-labs/"]',
      expectedUrl: "https://www.linkedin.com/company/sauce-labs",
    },
  ];

  async clickFooterLink(footerLink) {
    const linkElement = await $(footerLink.selector);
    await linkElement.waitForDisplayed();
    await linkElement.waitForClickable();

    const originalWindow = await browser.getWindowHandle();

    await linkElement.click();

    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length > 1,
      {
        timeout: 10000,
        interval: 500,
        timeoutMsg: `New tab did not open for ${footerLink.name}`,
      }
    );

    const handles = await browser.getWindowHandles();
    const newTabHandle = handles.find((handle) => handle !== originalWindow);
    await browser.switchToWindow(newTabHandle);

    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes(footerLink.expectedUrl);
      },
      {
        timeout: 10000,
        interval: 500,
        timeoutMsg: `URL did not match expected ${footerLink.expectedUrl}`,
      }
    );

    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toContain(footerLink.expectedUrl);

    await browser.closeWindow();
    await browser.switchToWindow(originalWindow);
  }

  async selectSortOption(sortOption) {
    await this.sortDropdown.click();
    const sortValue = this.sortOptionMap[sortOption];
    const sortOptionElement = await $(`option[value="${sortValue}"]`);
    await sortOptionElement.click();
  }

  async getItemData(selector) {
    return await browser.execute((sel) => {
      const elements = document.querySelectorAll(sel);
      return Array.from(elements).map((el) => el.textContent);
    }, selector);
  }
}

module.exports = new InventoryPage();
