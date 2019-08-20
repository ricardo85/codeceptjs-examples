module.exports = {
  SELECTOR: {
    PAGE_WRAPPER: '[data-qa="category-search-page"]',
    HEADLINE: '[data-qa="category-search-headline"]',
    SEARCH_FORM: '[data-qa="search-form"]',
    SEARCH_INPUT: '[data-qa="search-input"]',
    SEARCH_BUTTON: '[data-qa="search-submit"]',
    SEARCH_ITEM: '[data-qa="product-item"]',
  },
  STRING: {
    CANDLE: 'Duftkerze',
  },
  PARAMETER: {
    CANDLE: 'search?q=Duftkerze',
  },

  goToSearchPageDe(I) {
    I.amOnPage('/de/' + this.PARAMETER.CANDLE);
    I.waitForPageLoad();
  }
};
