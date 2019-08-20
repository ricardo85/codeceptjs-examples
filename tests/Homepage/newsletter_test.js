Feature('Newsletter');

Scenario('I can register for newsletter', (I, homepage, newsletter) => {
  I.goToHomepage('de');
  I.seeElement(newsletter.SELECTOR.NEWSLETTER_MAIL_INPUT);
  I.fillField(newsletter.SELECTOR.NEWSLETTER_MAIL_INPUT, 'xyz');
  I.click(newsletter.SELECTOR.NEWSLETTER_MAIL_SUBMIT);
  I.waitForElementInDom(newsletter.SELECTOR.NEWSLETTER_MAIL_ERROR);
  I.fillField(newsletter.SELECTOR.NEWSLETTER_MAIL_INPUT, newsletter.STRING.NEWSLETTER_MAIL_INPUT);
  I.click(newsletter.SELECTOR.NEWSLETTER_LABEL_SOMEDAY);
  I.click(newsletter.SELECTOR.NEWSLETTER_LABEL_OPUS);
  I.click(newsletter.SELECTOR.NEWSLETTER_MAIL_SUBMIT);
  I.waitForElementInDom(newsletter.SELECTOR.NEWSLETTER_CHECKBOX_ERROR);
  I.click(newsletter.SELECTOR.NEWSLETTER_LABEL_SOMEDAY);
  I.click(newsletter.SELECTOR.NEWSLETTER_MAIL_SUBMIT);
  I.retry(2).waitForElementInDom(newsletter.SELECTOR.NEWSLETTER_CONFIRMATION_MODAL);
  I.see(newsletter.STRING.NEWSLETTER_CONFIRMATION_TITLE, newsletter.SELECTOR.NEWSLETTER_CONFIRMATION_MODAL);
}).retry(2);
