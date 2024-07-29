const { chromium } = require('playwright');
const { test, expect } = require('@jest/globals');

describe('Snapshot test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://www.avito.ru/avito-care/eco-impact');
  });

  afterAll(async () => {
    await browser.close();
  });


  
  test('of CO2 counter', async () => {
      await page.waitForSelector('.desktop-bird-xXtiX');
      const elementOfWebPage = await page.$('.desktop-bird-xXtiX');
      const parentElem = await elementOfWebPage.evaluateHandle(el =>   el.closest('.desktop-impact-item-eeQO3'));
      await parentElem.screenshot({ path: './output/testCase1.jpg' });
  }, 20000); 



  test('of water counter', async () => {
    await page.waitForSelector('.desktop-water1-LWlZZ');
    const elementOfWebPage = await page.$('.desktop-water1-LWlZZ');
    const parentElem = await elementOfWebPage.evaluateHandle(el =>   el.closest('.desktop-impact-item-eeQO3'));
    await parentElem.screenshot({ path: './output/testCase2.jpg' });
  }, 20000); 



  test('of power counter', async () => {
  await page.waitForSelector('.desktop-bird-xXtiX');
  const elementOfWebPage = await page.$('.desktop-sun-JCEQH');
  const parentElem = await elementOfWebPage.evaluateHandle(el =>   el.closest('.desktop-impact-item-eeQO3'));
  await parentElem.screenshot({ path: './output/testCase3.jpg' });
  }, 20000); 


});
