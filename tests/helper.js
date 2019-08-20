const Helper = codecept_helper;

// Promises
const pageLoaded = (browser, smartWait) =>
  browser.waitUntil(async () => {
    const state = await browser.execute('return document.readyState');
    return state === 'complete';
  }, smartWait, 'pageLoaded timeout', 500);

const elementInDom = (element, browser, smartWait) =>
  browser.waitUntil(async () => {
    const el = await browser.execute(`return document.querySelectorAll('${element}')`);
    return el.length > 0;
  }, smartWait, 'elementInDom timeout', 100);

class CustomHelper extends Helper {

  /**
   * @returns {Promise<void>}
   */
  async waitForPageLoad() {
    const { browser, smartWait } = this.helpers.WebDriver;
    await pageLoaded(browser, smartWait);
  }

  /**
   * works not with elements defined by locator function / has to be string
   * @param element<string>
   * @returns {Promise<void>}
   */
  async waitForElementInDom(element) {
    const { browser, smartWait } = this.helpers.WebDriver;
    await elementInDom(element, browser, smartWait);
  }

}

module.exports = CustomHelper;
