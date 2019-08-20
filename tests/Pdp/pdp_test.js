Feature('PDP');

Scenario('I see product specifications', (I, pdp) => {
  I.goToPdpWithVariantsDe();
  I.waitForElement(pdp.SELECTOR.SPECS);
}).retry(2);
