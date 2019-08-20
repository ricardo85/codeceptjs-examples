exports.config = {
  tests: './tests/**/*_test.js',
  output: './tests/_output',
  helpers: {
    WebDriver : {
      url: `http://${process.env.DOMAIN}'}`,
      host: 'selenium',
      browser: 'chrome',
      restart: true,
      windowSize: '1920x1080',
      smartWait: 60000,
      waitForTimeout: 60000,
      desiredCapabilities: {
        chromeOptions: {
          args: [ '--headless', '--disable-gpu', '--no-sandbox' ]
        }
      }
    },
    CustomHelper: {
      require: './tests/helper.js',
    },
  },
  include: {
    // extend I object
    I: "./tests/custom_steps.js",

    // fixtures (data)
    customerAddressData: './tests/Customer/Fixtures/AddressData.js',
    zedData: './tests/Zed/Fixtures/ZedData.js',

    // fragments
    customerRegister: './tests/Customer/Fragments/Register.js',
    newsletter: './tests/Homepage/Fragments/Newsletter.js',
    select: './tests/Homepage/Fragments/Select.js',

    // page objects
    cart: './tests/Cart/PageObject/Cart.js',
    category: './tests/Catalog/PageObject/Category.js',
    checkout: './tests/Checkout/PageObject/Checkout.js',
    cms: './tests/Cms/PageObject/Cms.js',
    homepage: './tests/Homepage/PageObject/Homepage.js',
    pdp: './tests/Pdp/PageObject/Pdp.js',
    sale: './tests/Catalog/PageObject/Sale.js',
    search: './tests/Catalog/PageObject/Search.js',
    zed: './tests/Zed/PageObject/Zed.js',
  },
  multiple: {
    parallel: {
      // Splits tests into 2 chunks
      chunks: 2
    }
  },
  plugins: {
    autoDelay: {
      enabled: true
    }
  },
  mocha: {
    timeout: 10,
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: "-",
        options: {
          steps: true,
        }
      },
      'mocha-junit-reporter': {
        stdout: "-",
        options: {
          mochaFile: './tests/_output/result.xml', //FIXME: this is not working...should merge all reports on one file
          jenkinsMode: true,
          attachments: true //https://github.com/Codeception/CodeceptJS/issues/1502#issuecomment-494112578
        },
        attachments: true //add screenshot for a failed test
      }
    }
  }
};
