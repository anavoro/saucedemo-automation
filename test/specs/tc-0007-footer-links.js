const { expect } = require('@wdio/globals');
const LoginTestPage = require('../pageobjects/login-test.js');

const footerLink = [
  {
    name: 'Twitter',
    selector: '[data-test="social-twitter"]',
    expectedUrl: 'https://x.com/saucelabs?mx=2',
  },
  {
    name: 'Facebook',
    selector: '[data-test="social-facebook"]',
    expectedUrl: 'https://www.facebook.com/saucelabs',
  },
  {
    name: 'LinkedIn',
    selector: '[data-test="social-linkedin"]',
    expectedUrl: 'https://www.linkedin.com/company/sauce-labs/',
  },
];

describe('Footer Links Test', () => {
  footerLink.forEach(({ name, selector, expectedUrl }) => {
    it(`should open ${name} link in a new tab and navigate correctly`, async () => {
      await LoginTestPage.open();
      await LoginTestPage.login('standard_user', 'secret_sauce');
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

      const linkElement = await $(selector);
      await linkElement.waitForDisplayed();
      await linkElement.waitForClickable();

      // Get current window handle
      const originalWindow = await browser.getWindowHandle();

      // Click the link
      await linkElement.click();

      // Wait for a new tab to open
      await browser.waitUntil(
        async () => (await browser.getWindowHandles()).length > 1,
        {
          timeout: 5000,
          timeoutMsg: `New tab did not open for ${name}`,
        }
      );

      // Switch to the new tab
      const handles = await browser.getWindowHandles();
      const newTabHandle = handles.find((handle) => handle !== originalWindow);
      await browser.switchToWindow(newTabHandle);

      // Validate the new tab URL
      const currentUrl = await browser.getUrl();
      await expect(currentUrl).toBe(expectedUrl);

      // Close the new tab and switch back
      await browser.closeWindow();
      await browser.switchToWindow(originalWindow);
    });
  });
});


