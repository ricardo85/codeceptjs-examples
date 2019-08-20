Feature('Sale');

Before((I)  => {
  I.goToSalePageDe();
});

Scenario('I can see sidebar navigation', (I, category) => {
  I.seeElement(category.SELECTOR.SIDEBAR_NAV_LIST_LEVEL1);
}).retry();

Scenario('I can see breadcrumb', (I, category) => {
  I.seeElement(category.SELECTOR.BREADCRUMB);
}).retry();
