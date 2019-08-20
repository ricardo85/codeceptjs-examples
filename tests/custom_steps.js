const { cart, category, checkout, customerRegister, pdp, sale, search } = inject();

module.exports = function() {
  return actor({

    // PAGE CALLS //
    ///////////////
    goToHomepage: function(lang) {
      this.amOnPage(`/${lang}`);
      this.waitForPageLoad();
    },

    goToPdpWithVariantsDe: function() {
      pdp.goToPdpWithVariantsDe(this);
    },

    goToCategoryAccessoriesDe () {
      category.goToCategoryAccessoriesDe(this);
    },

    goToCategoryMainDe () {
      category.goToCategoryMainDe(this);
    },

    goToSalePageDe () {
      sale.goToSalePageDe(this);
    },

    goToSearchPageDe () {
      search.goToSearchPageDe(this);
    },

    goToCartPageDe () {
      cart.goToCartPageDe(this);
    },

    // ADD TO CART //
    ////////////////
    addProductWithVariantsToCart () {
      pdp.addProductWithVariantsToCart(this);
    },

    // CHECKOUT //
    /////////////
    registerInCheckout: function(){
      customerRegister.registerInCheckout(this);
    },

    fillAddressInCheckout: function() {
      checkout.fillAddress(this);
    },

    payWithDirectDebitInCheckout: function() {
      checkout.payWithDirectDebit(this);
    },

  });
};
