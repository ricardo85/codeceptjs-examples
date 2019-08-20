let { customerAddressData } = inject();

module.exports = {

  STRING: {
    TITLE_CREATE_ACCOUNT_DE: 'Ich bin Neukunde',
  },

  SELECTOR: {
    REGISTER_PROCESS_FURTHER_BUTTON: '[data-qa="checkout-register-toggle-button"]',
    FORM_FIELD_SELECTOR_FIRST_NAME: '#registerForm_customer_first_name',
    FORM_FIELD_SELECTOR_LAST_NAME: '#registerForm_customer_last_name',
    FORM_FIELD_SELECTOR_EMAIL: '#registerForm_customer_email',
    FORM_FIELD_SELECTOR_PASSWORD: '#registerForm_customer_password',
    FORM_FIELD_SELECTOR_SALUTATION: '[data-qa="checkout customer registration salutation"]/*/#registerForm_customer_salutation_0',
    FORM_FIELD_SELECTOR_CREATE_ACCOUNT: '[data-qa="customer_is_registration_checkbox"]',
    FORM_FIELD_SELECTOR_ACCEPT_TERMS: '[data-qa="label-accept-terms"]',
    SELECTOR_BUTTON_REGISTER: '[data-qa="checkout-register-button"]',
  },

  registerInCheckout(I) {
    const microtime = (Date.now() % 1000) / 1000;
    const email = `email-test@domain-${Math.floor(Math.random() * 899) + 100}-${microtime}.tld`;

    I.fillField(this.SELECTOR.FORM_FIELD_SELECTOR_FIRST_NAME, customerAddressData.ADDRESS.firstName);
    I.fillField(this.SELECTOR.FORM_FIELD_SELECTOR_LAST_NAME, customerAddressData.ADDRESS.lastName);
    I.fillField(this.SELECTOR.FORM_FIELD_SELECTOR_EMAIL, email);
    I.click(this.SELECTOR.FORM_FIELD_SELECTOR_CREATE_ACCOUNT);
    I.waitForElementInDom(this.SELECTOR.FORM_FIELD_SELECTOR_PASSWORD);
    I.fillField(this.SELECTOR.FORM_FIELD_SELECTOR_PASSWORD, email);
    I.click(this.SELECTOR.FORM_FIELD_SELECTOR_SALUTATION);
    I.click(this.SELECTOR.FORM_FIELD_SELECTOR_ACCEPT_TERMS);
    I.click(this.SELECTOR.SELECTOR_BUTTON_REGISTER);
    I.waitForPageLoad();
  },
};
