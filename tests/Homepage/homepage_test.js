Feature('Homepage');

Scenario('I see header and footer on homepage', (I, homepage) => {
  I.goToHomepage('de');
  I.waitForElement(homepage.SELECTOR.HEADER);
  I.waitForElement(homepage.SELECTOR.FOOTER);
}).retry(2);

Scenario('I can access a category from top navigation', (I, homepage, category) => {
  I.goToHomepage('de');
  I.seeElement(homepage.SELECTOR.TOP_NAV);
  I.moveCursorTo(homepage.SELECTOR.TOP_NAV_FIRST_ITEM);
  I.waitForElement(homepage.SELECTOR.TOP_NAV_FLYOUT, homepage.SELECTOR.TOP_NAV_FIRST_ITEM);
  I.waitForElement(homepage.SELECTOR.TOP_NAV_FIRST_LINK);
  I.click(homepage.SELECTOR.TOP_NAV_FIRST_LINK);
  I.waitForPageLoad();
  I.seeElement(category.SELECTOR.PAGE_WRAPPER);
}).retry(2);
