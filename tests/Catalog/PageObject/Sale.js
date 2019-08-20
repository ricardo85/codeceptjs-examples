module.exports = {
  PATH: {
    SALE: '/sale',
  },

  goToSalePageDe(I) {
    I.amOnPage('/de' + this.PATH.SALE);
    I.waitForPageLoad();
  }
};
