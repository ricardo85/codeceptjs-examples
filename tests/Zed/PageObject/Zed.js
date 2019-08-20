let { I, zedData } = inject();

module.exports = {

  _init() {
    if(I === undefined) {
      I = actor();
    }
  },

  SELECTOR: {
    LOGIN_NAME: '#auth_username',
    LOGIN_PASSWORD: '#auth_password',
    LOGIN_SUBMIT: '[type="submit"]',
    SALES_ORDER_TABLE: '.dataTables_scrollBody',
    SALES_ORDER_TABLE_FIRST_ORDER_IN_LIST: '//*[@class="dataTables_scrollBody"]/table/tbody/tr[1]/td[1]',
  },

  PATH: {
    SALES_ORDER_LIST: '/sales',
    SALES_ORDER_DETAILS: '/sales/detail?id-sales-order=',
  },

  STRING: {
    SALES_ORDER_CANCELED: 'item canceled',
    SALES_ORDER_SUCCESSFUL: 'store order successful'
  },

  login() {
    I.amOnPage(zedData.url);
    I.waitForPageLoad();
    I.fillField(this.SELECTOR.LOGIN_NAME, zedData.user);
    I.fillField(this.SELECTOR.LOGIN_PASSWORD, zedData.password);
    I.click(this.SELECTOR.LOGIN_SUBMIT);
    I.waitForPageLoad();
  },

  goToOrderList() {
    I.amOnPage(zedData.url+this.PATH.SALES_ORDER_LIST);
    I.waitForPageLoad();
  },

  goToOrderDetailsPage(salesOrderId) {
    I.amOnPage(zedData.url+this.PATH.SALES_ORDER_DETAILS+salesOrderId);
    I.waitForPageLoad();
  }
};
