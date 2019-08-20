Feature('Category');

Scenario('I see items list on category page', (I, category) => {
  I.goToCategoryAccessoriesDe();
  I.seeElement(category.SELECTOR.CATEGORY_ITEMS_LIST);
}).retry();

Scenario('I can access a pdp from category page', (I, category, pdp) => {
  I.goToCategoryAccessoriesDe();
  I.seeElement(category.SELECTOR.CATEGORY_ITEMS_LIST);
  I.seeElement(category.SELECTOR.CATEGORY_ITEMS_LIST_FIRST_LINK);
  I.click(category.SELECTOR.CATEGORY_ITEMS_LIST_FIRST_LINK);
  I.waitForPageLoad();
  I.seeElement(pdp.SELECTOR.WRAPPER);
}).retry();

Scenario('I can navigate categories via sidebar', async (I, category) => {
  I.goToCategoryMainDe();
  I.seeElement(category.SELECTOR.SIDEBAR_NAV_LIST_LEVEL1);
  I.click(category.SELECTOR.SIDEBAR_NAV_LINK_ACCESSORIES);
  I.waitForPageLoad();
  I.seeElement(category.SELECTOR.SIDEBAR_NAV_LIST_LEVEL2);
  I.seeInCurrentUrl(category.PATH.ACCESSORIES_CATEGORY);
  I.click(category.SELECTOR.SIDEBAR_NAV_LINK_ACCESSORIES_HOME);
  I.waitForPageLoad();
  I.seeElement(category.SELECTOR.BREADCRUMB);
  I.seeInCurrentUrl(category.PATH.ACCESSORIES_HOME_CATEGORY);
  I.see(category.STRING.ACCESSORIES, category.SELECTOR.BREADCRUMB);
}).retry();

Scenario('I can see and navigate sidebar content', async (I, category) => {
  I.goToCategoryMainDe();
  I.seeElement(category.SELECTOR.SIDEBAR_NAV_LIST_LEVEL1);
  I.see(category.STRING.NEW_ARRIVALS, category.SELECTOR.SIDEBAR_CONTENT);
  I.see(category.STRING.TOPSELLER, category.SELECTOR.SIDEBAR_CONTENT);
  I.see(category.STRING.BASICS, category.SELECTOR.SIDEBAR_CONTENT);
  I.click(category.STRING.NEW_ARRIVALS, category.SELECTOR.SIDEBAR_CONTENT);
  I.waitForPageLoad();
  I.seeInCurrentUrl(category.PATH.NEW_ARRIVALS);
  I.seeElement(category.SELECTOR.SIDEBAR_NAV_LIST_LEVEL1);
  I.click(category.STRING.TOPSELLER, category.SELECTOR.SIDEBAR_CONTENT);
  I.waitForPageLoad();
  I.seeInCurrentUrl(category.PATH.TOPSELLER);
  I.seeElement(category.SELECTOR.SIDEBAR_NAV_LIST_LEVEL1);
  I.click(category.STRING.BASICS, category.SELECTOR.SIDEBAR_CONTENT);
  I.waitForPageLoad();
  I.seeInCurrentUrl(category.PATH.BASICS);
  I.seeElement(category.SELECTOR.SIDEBAR_NAV_LIST_LEVEL1);
}).retry();

Scenario('I can see breadcrumb on category pages', async (I, category) => {
  I.goToCategoryMainDe();
  I.seeElement(category.SELECTOR.BREADCRUMB);

  // new arrivals
  I.click(category.STRING.NEW_ARRIVALS, category.SELECTOR.SIDEBAR_CONTENT);
  I.seeInCurrentUrl(category.PATH.NEW_ARRIVALS);
  I.waitForElement(category.SELECTOR.BREADCRUMB);

  // topseller
  I.click(category.STRING.TOPSELLER, category.SELECTOR.SIDEBAR_CONTENT);
  I.seeInCurrentUrl(category.PATH.TOPSELLER);
  I.waitForElement(category.SELECTOR.BREADCRUMB);

  // basics
  I.click(category.STRING.BASICS, category.SELECTOR.SIDEBAR_CONTENT);
  I.seeInCurrentUrl(category.PATH.BASICS);
  I.waitForElement(category.SELECTOR.BREADCRUMB);
}).retry();
