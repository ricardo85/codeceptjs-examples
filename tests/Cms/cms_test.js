Feature('CMS');

Scenario('I go to imprint page and see content', (I, homepage, cms) => {
  I.goToHomepage('de');
  I.seeElement(homepage.SELECTOR.FOOTER);
  I.click(homepage.SELECTOR.CLOSE_COOKIE_CONSENT);
  I.click(cms.IMPRINT.TITLE_DE, homepage.SELECTOR.FOOTER);
  I.waitForPageLoad();
  I.seeInCurrentUrl(cms.IMPRINT.PATH_DE);
  I.see(cms.IMPRINT.TITLE_DE, 'h1');

  I.goToHomepage('en');
  I.seeElement(homepage.SELECTOR.FOOTER);
  I.click(homepage.SELECTOR.CLOSE_COOKIE_CONSENT);
  I.click(cms.IMPRINT.TITLE_EN, homepage.SELECTOR.FOOTER);
  I.waitForPageLoad();
  I.seeInCurrentUrl(cms.IMPRINT.PATH_EN);
  I.see(cms.IMPRINT.TITLE_EN, 'h1');

  I.goToHomepage('nl');
  I.seeElement(homepage.SELECTOR.FOOTER);
  I.click(homepage.SELECTOR.CLOSE_COOKIE_CONSENT);
  I.click(cms.IMPRINT.TITLE_NL, homepage.SELECTOR.FOOTER);
  I.waitForPageLoad();
  I.seeInCurrentUrl(cms.IMPRINT.PATH_NL);
  I.see(cms.IMPRINT.TITLE_NL, 'h1');
}).retry(2);
