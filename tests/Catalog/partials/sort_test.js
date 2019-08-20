Feature('Sort');

let assert = require('assert');

Scenario('I can sort products', async (I, category) => {
  I.goToCategoryAccessoriesDe();
  I.seeElement(category.SELECTOR.TAB_SORT);
  I.click(category.SELECTOR.TAB_SORT);
  I.waitForElementInDom(category.SELECTOR.TAB_SORT_CONTENT);

  // relevance
  I.click(category.SELECTOR.SORT_LINK_RELEVANCE);
  I.waitForPageLoad();
  I.seeInCurrentUrl(category.PARAMETER.SORT_RELEVANCE);
  const lastItemRelevance = await I.grabTextFrom(category.SELECTOR.CATEGORY_ITEMS_LIST_LAST_ITEM);

  // price
  I.seeElement(category.SELECTOR.TAB_SORT);
  I.click(category.SELECTOR.TAB_SORT);
  I.waitForElementInDom(category.SELECTOR.TAB_SORT_CONTENT);
  I.click(category.SELECTOR.SORT_LINK_PRICE);
  I.waitForPageLoad();
  I.seeInCurrentUrl(category.PARAMETER.SORT_PRICE);
  const lastItemPrice = await I.grabTextFrom(category.SELECTOR.CATEGORY_ITEMS_LIST_LAST_ITEM);
  I.say('product sorting is different for relevance and price');
  assert.notEqual(lastItemPrice, lastItemRelevance);
}).retry(2);
