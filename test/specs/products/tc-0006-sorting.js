const { expect } = require('@wdio/globals');
const LoginTestPage = require('../../pageobjects/login-test.js');

describe('Sorting test', () => {
   const sortOptionMap = {
       'Name (A to Z)': 'az',
       'Name (Z to A)': 'za',
       'Price (low to high)': 'lohi',
       'Price (high to low)': 'hilo'
   };

   const sortTests = [
       {
           name: 'Name (A to Z)',
           selector: "[data-test='inventory-item-name']",
           sortMethod: (names) => [...names].sort()
       },
       {
           name: 'Name (Z to A)',
           selector: "[data-test='inventory-item-name']",
           sortMethod: (names) => [...names].sort().reverse()
       },
       {
           name: 'Price (low to high)',
           selector: "[data-test='inventory-item-price']",
           sortMethod: (prices) => [...prices].sort((a, b) => 
               parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', ''))
           )
       },
       {
           name: 'Price (high to low)',
           selector: "[data-test='inventory-item-price']",
           sortMethod: (prices) => [...prices].sort((a, b) => 
               parseFloat(b.replace('$', '')) - parseFloat(a.replace('$', ''))
           )
       }
   ];

   sortTests.forEach(({ name, selector, sortMethod }) => {
       it(`Should sort items by ${name}`, async () => {
           await LoginTestPage.open();
           await LoginTestPage.login('standard_user', 'secret_sauce');

           await $('.product_sort_container').click();

           const sortValue = sortOptionMap[name];
           const sortOption = await $(`option[value="${sortValue}"]`);
           await sortOption.click();

           await browser.waitUntil(
               async () => (await $$(selector)).length > 0,
               { timeout: 5000, timeoutMsg: 'Inventory items did not load in time' }
           );

           const itemData = await browser.execute((sel) => {
               const elements = document.querySelectorAll(sel);
               return Array.from(elements).map(el => el.textContent);
           }, selector);

           console.log(`${name} - Item data:`, itemData);

           const sortedData = sortMethod(itemData);
           expect(itemData).toEqual(sortedData);

           await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
       });
   });
});