class BasePage {
  baseUrl = "https://www.saucedemo.com/";

  async open() {
    await browser.url(this.baseUrl);
  }
}

module.exports = BasePage;
