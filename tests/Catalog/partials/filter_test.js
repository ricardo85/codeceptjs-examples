Feature('Filter');

let assert = require('assert');

Scenario('I can filter products', async (I, category) => {
  I.goToCategoryAccessoriesDe();

  const productsCount = await I.grabNumberOfVisibleElements(category.SELECTOR.CATEGORY_ITEM, category.SELECTOR.CATEGORY_ITEMS_LIST);
  I.say('products count unfiltered:' + productsCount);

  // color filtering
  I.seeElement(category.SELECTOR.TAB_FILTER);
  I.click(category.SELECTOR.TAB_FILTER);
  I.waitForElementInDom(category.SELECTOR.TAB_FILTER_CONTENT);
  I.seeElement(category.SELECTOR.FILTER_OPTION_COLOR);
  I.click(category.SELECTOR.FILTER_OPTION_COLOR);
  I.waitForPageLoad();
  I.seeInCurrentUrl(category.PARAMETER.FILTER_COLOR);
  const productsCountColorFiltered = await I.grabNumberOfVisibleElements(category.SELECTOR.CATEGORY_ITEM, category.SELECTOR.CATEGORY_ITEMS_LIST);
  I.say('products count color filtered:' + productsCountColorFiltered);
  assert.notEqual(productsCountColorFiltered, productsCount);
  I.click(category.SELECTOR.FILTER_RESET);
  I.waitForPageLoad();
  I.dontSeeInCurrentUrl(category.PARAMETER.FILTER_COLOR);

  // size filtering
  I.seeElement(category.SELECTOR.TAB_FILTER);
  I.click(category.SELECTOR.TAB_FILTER);
  I.waitForElementInDom(category.SELECTOR.TAB_FILTER_CONTENT);
  I.seeElement(category.SELECTOR.FILTER_OPTION_TEXT);
  I.click(category.SELECTOR.FILTER_OPTION_TEXT);
  I.waitForPageLoad();
  I.seeInCurrentUrl(category.PARAMETER.FILTER_SIZE);
  I.click(category.SELECTOR.FILTER_RESET);
  I.waitForPageLoad();
  I.dontSeeInCurrentUrl(category.PARAMETER.FILTER_SIZE);
}).retry(2);
