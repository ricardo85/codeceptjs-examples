module.exports = {

  SELECTOR: {
    PAGE_WRAPPER: '[data-qa="category-search-page"]',
    CATEGORY_ITEMS_LIST: '[data-qa="category-items-list"]',
    CATEGORY_ITEMS_LIST_FIRST_LINK: locate('[data-qa="category-items-list"] > div').first().find('a'),
    CATEGORY_ITEMS_LIST_LAST_ITEM: locate('[data-qa="category-items-list"] > div').last(),
    CATEGORY_ITEM: '[data-qa="product-item"]',

    // breadcrumb
    BREADCRUMB: '[data-qa="breadcrumb"]',

    // sidebar nav
    SIDEBAR_CONTENT: '[data-qa="sidebar-content"]',
    SIDEBAR_NAV_LIST_LEVEL1: '[data-qa="sidebar-nav-list-l1"]',
    SIDEBAR_NAV_LIST_LEVEL2: '[data-qa="sidebar-nav-list-l2"]',
    SIDEBAR_NAV_LINK_ACCESSORIES: '[data-qa="sidebar-nav-link-Accessoires"]',
    SIDEBAR_NAV_LINK_ACCESSORIES_HOME: '[data-qa="sidebar-nav-link-Home"]',

    // filter
    TAB_FILTER: locate('[data-qa="tab-list"] > li').first().find('a'),
    TAB_FILTER_CONTENT: '[data-qa="filter-tab-content"]',
    FILTER_OPTION_COLOR: locate('[data-qa="filter-option-color"]').withAttr({ title: 'beige' }),
    FILTER_OPTION_TEXT: locate('[data-qa="filter-option-text"]').withAttr({ title: '34' }),
    FILTER_RESET: '[data-qa="filter-reset"]',

    // sort
    TAB_SORT: locate('[data-qa="tab-list"] > li').last().find('a'),
    TAB_SORT_CONTENT: '[data-qa="sort-content"]',
    SORT_LINK_RELEVANCE: '[data-qa="sort-relevance"]',
    SORT_LINK_PRICE: '[data-qa="sort-price"]',
  },

  PATH: {
    ACCESSORIES_CATEGORY: '/accessoires',
    ACCESSORIES_HOME_CATEGORY: '/accessoires/home',
    SHOP_CATEGORY: '/mode-online',
    NEW_ARRIVALS: '/neuheiten',
    TOPSELLER: '/topseller',
    BASICS: '/basics',
  },

  STRING: {
    NEW_ARRIVALS: 'Neuheiten',
    TOPSELLER: 'Topseller',
    BASICS: 'Basics',
    ACCESSORIES: 'Accessoires',
  },

  PARAMETER: {
    FILTER_COLOR: 'colorGroups',
    FILTER_SIZE: 'sizeGroups',
    SORT_RELEVANCE: '?sort=relevance',
    SORT_PRICE: '?sort=price',
  },

  goToCategoryAccessoriesDe(I) {
    I.amOnPage('/de' + this.PATH.ACCESSORIES_CATEGORY);
    I.waitForPageLoad();
  },

  goToCategoryMainDe(I) {
    I.amOnPage('/de' + this.PATH.SHOP_CATEGORY);
    I.waitForPageLoad();
  },

};
