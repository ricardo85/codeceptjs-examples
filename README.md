# Codeceptjs-examples

http://codecept.io

This repository contains a raw codeceptjs testing stack/setup based on Selenium/WebdriverIO taken from a customers project.

### CodeceptJS best practices

Architecture and best practices are adopted from codeceptJS:

https://codecept.io/best

###### - page object definitions
###### - fragment definitions
###### - extending of I object within custom steps
###### - custom helper 
###### - usage of locator feature for element definitions
##### + an additional layer for static data: Fixtures

### Filestructure

Adopted to fit customers projects stack. All tests, page objects, fragments and fixtures are bundled per feature.

Helper and custom steps methods are defined globally.
