const { chromium } = require('playwright');
const { test, expect } = require('@jest/globals');

describe('Snapshot test', () => {
  let browser;
  let page;

  async function makeCounterSnapShot(childElem, nameOfTest) {
    await page.waitForSelector(childElem);
    const elementOfWebPage = await page.$(childElem);
    const parentElem = await elementOfWebPage.evaluateHandle(node => node.closest('.desktop-impact-item-eeQO3'));
    await parentElem.screenshot({ path: `./output/${nameOfTest}.jpg` });
  }




  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://www.avito.ru/avito-care/eco-impact');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('of CO2 counter', async () => {
     await makeCounterSnapShot('.desktop-bird-xXtiX','testCase1');
  }, 20000); 

  test('of water counter', async () => {
     await makeCounterSnapShot('.desktop-water1-LWlZZ', 'testCase2');
  }, 20000); 

  test('of power counter', async () => {
      await makeCounterSnapShot('.desktop-sun-JCEQH', 'testCase3');  
  }, 20000); 
  
});