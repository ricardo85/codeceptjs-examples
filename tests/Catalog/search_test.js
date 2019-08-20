Feature('Search');

Before((I) => {
  I.goToSearchPageDe();
});

Scenario('I can search', (I, search) => {
  I.seeElement(search.SELECTOR.PAGE_WRAPPER);
  I.see(search.STRING.CANDLE, search.SELECTOR.HEADLINE);
  I.see(search.STRING.CANDLE, search.SELECTOR.SEARCH_ITEM);
}).retry();

Scenario('I can open search form', (I, search, homepage) => {
  I.seeElement(homepage.SELECTOR.SEARCH_BUTTON);
  I.click(homepage.SELECTOR.SEARCH_BUTTON);
  I.retry(2).waitForElementInDom(search.SELECTOR.SEARCH_FORM);
}).retry();

Scenario('I can see sidebar navigation', (I, search, category) => {
  I.seeElement(category.SELECTOR.SIDEBAR_NAV_LIST_LEVEL1);
}).retry();

Scenario('I can see breadcrumb', (I, category) => {
  I.seeElement(category.SELECTOR.BREADCRUMB);
}).retry();

Scenario('I can filter for search', (I, search, category) => {
  I.see(search.STRING.CANDLE, search.SELECTOR.HEADLINE);
  I.seeElement(category.SELECTOR.TAB_FILTER);
  I.click(category.SELECTOR.TAB_FILTER);
  I.waitForElementInDom(category.SELECTOR.TAB_FILTER_CONTENT);
  I.click(category.SELECTOR.FILTER_OPTION_TEXT);
  I.waitForPageLoad();
  I.seeInCurrentUrl(category.PARAMETER.FILTER_SIZE);
  I.seeInCurrentUrl(search.PARAMETER.CANDLE);
  I.waitForElementInDom(category.SELECTOR.FILTER_RESET);
  I.click(category.SELECTOR.FILTER_RESET);
  I.waitForPageLoad();
  I.seeInCurrentUrl(search.PARAMETER.CANDLE);
}).retry();
