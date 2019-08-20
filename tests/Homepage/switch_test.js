Feature('Switches');

Scenario('I can switch the language', (I, homepage, select) => {
  I.goToHomepage('de');
  I.waitForElement(select.SELECTOR.SELECT, select.SELECTOR.LANG_SELECT);
  I.click(homepage.SELECTOR.CLOSE_COOKIE_CONSENT);
  I.see('Sprache', select.SELECTOR.LANG_SELECT);
  I.click(select.SELECTOR.SELECT, select.SELECTOR.LANG_SELECT);
  I.click('NL', select.SELECTOR.LANG_SELECT);
  I.waitForPageLoad();
  I.seeInCurrentUrl('/nl/');
  I.click(homepage.SELECTOR.CLOSE_COOKIE_CONSENT);
  I.see('Taal', select.SELECTOR.LANG_SELECT);
  I.click(select.SELECTOR.SELECT, select.SELECTOR.LANG_SELECT);
  I.click('EN', select.SELECTOR.LANG_SELECT);
  I.waitForPageLoad();
  I.seeInCurrentUrl('/en/');
  I.click(homepage.SELECTOR.CLOSE_COOKIE_CONSENT);
  I.see('Language', select.SELECTOR.LANG_SELECT);
  I.click(select.SELECTOR.SELECT, select.SELECTOR.LANG_SELECT);
  I.click('DE', select.SELECTOR.LANG_SELECT);
  I.waitForPageLoad();
  I.seeInCurrentUrl('/de/');
}).retry(2);

Scenario('I can switch to country NL', (I, homepage, select) => {
  I.goToHomepage('de');
  I.waitForElement(select.SELECTOR.SELECT, select.SELECTOR.COUNTRY_SELECT);
  I.click(homepage.SELECTOR.CLOSE_COOKIE_CONSENT);
  I.see('Shop', select.SELECTOR.COUNTRY_SELECT);
  I.click(select.SELECTOR.SELECT, select.SELECTOR.COUNTRY_SELECT);
  I.click('Niederlande', select.SELECTOR.COUNTRY_SELECT);
  I.waitForPageLoad();
  I.seeInCurrentUrl('//nl');
}).retry(2);

Scenario('I can switch to country AT', (I, homepage, select) => {
  I.goToHomepage('de');
  I.waitForElement(select.SELECTOR.SELECT, select.SELECTOR.COUNTRY_SELECT);
  I.click(homepage.SELECTOR.CLOSE_COOKIE_CONSENT);
  I.see('Shop', select.SELECTOR.COUNTRY_SELECT);
  I.click(select.SELECTOR.SELECT, select.SELECTOR.COUNTRY_SELECT);
  I.click('Österreich', select.SELECTOR.COUNTRY_SELECT);
  I.waitForPageLoad();
  I.seeInCurrentUrl('//at');
}).retry(2);

Scenario('I can switch the shop', (I, select) => {
  I.goToHomepage('de');
  // switch to opus
  I.waitForElementInDom(select.SELECTOR.SHOP_SELECT);
  I.see('OPUS', select.SELECTOR.SHOP_SELECT);
  I.click('OPUS', select.SELECTOR.SHOP_SELECT);
  I.waitForPageLoad();
  I.seeInCurrentUrl('opus');

  // switch to someday
  /*  I.amOnPage('http://redesign.opus-fashion.local/');
    I.waitForElement(homepage.SELECTOR.SHOP_SELECT);
    I.see('SOMEDAY', homepage.SELECTOR.SHOP_SELECT);
    I.click('SOMEDAY', homepage.SELECTOR.SHOP_SELECT);
    I.seeInCurrentUrl('someday');*/
}).retry(2);
