let { homepage } = inject();

module.exports = {

  SELECTOR: {
    WRAPPER: '[data-qa="pdp-wrapper"]',
    ADD_TO_CART_BUTTON: '[data-qa="add-to-cart-button"][data-disabled="false"]',
    ADD_TO_CART_BUTTON_DISABLED: '[data-qa="add-to-cart-button"][data-disabled="true"]',
    SPECS: '[data-qa="product-specs"]',
    VARIANT_SELECT: '[data-qa="variant-select"]',
    VARIANT_SELECT_OPTION: '[data-qa="select-option"]:first-child',
  },
  PATH: {
    SNEAKER: '/schuhe-sneaker-stella-mccartney-sneakers-weiss'
  },
  STRING: {
    SNEAKER: 'Stella McCartney Sneakers',
  },

  goToPdpWithVariantsDe(I) {
    I.amOnPage('/de' + this.PATH.SNEAKER);
    I.waitForPageLoad();
  },

  addProductWithVariantsToCart(I) {
    I.amOnPage('/de' + this.PATH.SNEAKER);
    I.waitForPageLoad();
    I.seeElement(this.SELECTOR.ADD_TO_CART_BUTTON_DISABLED);
    I.click(this.SELECTOR.VARIANT_SELECT);
    I.click(this.SELECTOR.VARIANT_SELECT_OPTION);
    I.waitForElementInDom(this.SELECTOR.ADD_TO_CART_BUTTON);
    I.click(this.SELECTOR.ADD_TO_CART_BUTTON);
    I.retry(4).waitForElementInDom(homepage.SELECTOR.HEADER_CART_COUNT);
    I.waitForText('1', 30, homepage.SELECTOR.HEADER_CART_COUNT);
  }
};
