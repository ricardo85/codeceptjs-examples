module.exports = {

  SELECTOR: {
    PROCEED_CHECKOUT_BTN: '[data-qa="cart-proceed-to-checkout-button"]'
  },

  PATH: {
    CART_DE: '/warenkorb',
  },

  goToCartPageDe(I) {
    I.amOnPage('/de' + this.PATH.CART_DE);
    I.waitForPageLoad();
  },

};
