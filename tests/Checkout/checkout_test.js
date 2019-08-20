Feature('Checkout');

Scenario('I can see checkout button', (I, homepage, checkout, pdp) => {
  I.retry(2).addProductWithVariantsToCart();

  // cart offcanvas
  I.wait(6); // offcanvas disappears after 5 seconds
  I.click(homepage.SELECTOR.HEADER_CART_LINK);
  I.retry(2).waitForElementInDom(checkout.SELECTOR.CHECKOUT_BUTTON);
  I.waitForText(pdp.STRING.SNEAKER, 30, homepage.SELECTOR.CART_OFFCANVAS);
}).retry(2);

Scenario('I can checkout with DirectDebit payment method and see order in ZED', async (I, cart, checkout, customerRegister, zed) => {
  I.retry(2).addProductWithVariantsToCart();

  // go to checkout
  I.goToCartPageDe();
  I.click(cart.SELECTOR.PROCEED_CHECKOUT_BTN);
  I.waitForPageLoad();

  // checkout register
  I.see(customerRegister.STRING.TITLE_CREATE_ACCOUNT_DE);
  I.click(customerRegister.SELECTOR.REGISTER_PROCESS_FURTHER_BUTTON);
  I.registerInCheckout();

  // checkout address
  I.fillAddressInCheckout();

  // checkout payment
  I.payWithDirectDebitInCheckout();

  // checkout save order
  I.click(checkout.SELECTOR.NEXT_STEP_BUTTON);
  I.waitForPageLoad();
  I.see(checkout.STRING.MESSAGE_CHECKOUT_SUCCESS);

  // check order in zed
  session('zed', async () => {
    zed.login();
    zed.goToOrderList();
    I.seeElement(zed.SELECTOR.SALES_ORDER_TABLE);
    I.retry(2).waitForElement(zed.SELECTOR.SALES_ORDER_TABLE_FIRST_ORDER_IN_LIST);

    const idSalesOrder = await I.grabTextFrom(zed.SELECTOR.SALES_ORDER_TABLE_FIRST_ORDER_IN_LIST);

    zed.goToOrderDetailsPage(idSalesOrder);
    I.dontSee(zed.STRING.SALES_ORDER_CANCELED);
    I.see(zed.STRING.SALES_ORDER_SUCCESSFUL);
  });
}).retry(2);
