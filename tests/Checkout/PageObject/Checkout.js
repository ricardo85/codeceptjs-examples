let { customerAddressData } = inject();

module.exports = {

  SELECTOR: {
    CHECKOUT_BUTTON: '[data-qa="go-to-checkout"]',
    NEXT_STEP_BUTTON: '[data-qa="checkout-next-step-button"]',
    PAYMENT_TYPE_DIRECT_DEBIT: '[value="simDirectDebit"]',
    PAYMENT_TYPE_DIRECT_DEBIT_HOLDER: '#paymentForm_simDirectDebit_holder',
    PAYMENT_TYPE_DIRECT_DEBIT_IBAN: '#paymentForm_simDirectDebit_iban',
    PAYMENT_TYPE_DIRECT_DEBIT_BIC: '#paymentForm_simDirectDebit_bic'
  },

  STRING: {
    HEADING_SHIPPING_ADDRESS_DE: 'Lieferadresse',
    TITLE_PAYMENT_DIRECT_DEBIT: 'Lastschrift',
    MESSAGE_CHECKOUT_SUCCESS: 'Vielen Dank für Ihren Einkauf!',
  },

  fillAddress(I) {
    const address = customerAddressData.ADDRESS;

    I.see(this.STRING.HEADING_SHIPPING_ADDRESS_DE);
    I.fillField('//*[@id="addressesForm_billingAddress_first_name"]', address.firstName);
    I.fillField('//*[@id="addressesForm_billingAddress_last_name"]', address.lastName);
    I.fillField('//*[@id="addressesForm_billingAddress_address1"]', address.address1);
    I.fillField('//*[@id="addressesForm_billingAddress_address2"]', address.address2);
    I.fillField('//*[@id="addressesForm_billingAddress_zip_code"]', address.zipCode);
    I.fillField('//*[@id="addressesForm_billingAddress_city"]', address.city);
    // if ($fillOutBirthdayField) {
      I.fillField('//*[@id="addressesForm_billingAddress_date_of_birth"]', '05.02.1987');
    // }
    I.click('//input[@id="addressesForm_billingAddress_is_show_extra_fields"]');
    I.click(this.SELECTOR.NEXT_STEP_BUTTON);
    I.waitForPageLoad();
  },

  payWithDirectDebit(I) {
    I.see(this.STRING.TITLE_PAYMENT_DIRECT_DEBIT);
    I.click(this.SELECTOR.PAYMENT_TYPE_DIRECT_DEBIT);
    I.waitForElementInDom(this.SELECTOR.PAYMENT_TYPE_DIRECT_DEBIT_HOLDER);
    I.fillField(this.SELECTOR.PAYMENT_TYPE_DIRECT_DEBIT_HOLDER, 'iDEAL');
    I.fillField(this.SELECTOR.PAYMENT_TYPE_DIRECT_DEBIT_IBAN, 'NL91 ABNA 0417 1643 00');
    I.fillField(this.SELECTOR.PAYMENT_TYPE_DIRECT_DEBIT_BIC, 'RABONL2U');
    I.click(this.SELECTOR.NEXT_STEP_BUTTON);
    I.waitForPageLoad();
  }
};
