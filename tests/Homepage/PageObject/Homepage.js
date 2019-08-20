module.exports = {
  SELECTOR: {
    HEADER: '//*[@data-qa="header"]',
    FOOTER: '//*[@data-qa="footer"]',
    TOP_NAV: '[data-qa="top-navigation"]',
    TOP_NAV_FIRST_ITEM: locate('[data-qa="top-navigation"] > ul > li').first(),
    TOP_NAV_FIRST_LINK: locate('[data-qa="top-navigation"] > ul > li').first().find('a').first(),
    TOP_NAV_FLYOUT: locate('[data-qa="top-navigation-flyout"]'),
    CART_OFFCANVAS: '[data-qa="cart-offcanvas"]',
    CART_OFFCANVAS_SUCCESS_HEADLINE: '[data-qa="add-to-cart-success-headline"]',
    HEADER_CART_LINK: '[data-qa="header-cart-link"]',
    HEADER_CART_COUNT: '[data-qa="header-cart-count"]',
    SEARCH_BUTTON: '[data-qa="header-search-button"]',
    CLOSE_COOKIE_CONSENT: '[data-qa="close-cookie-consent"]',
  }
};
