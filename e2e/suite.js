const { Builder, By } = require('selenium-webdriver');

async function createBrowser(browserName) {
  const driver = await new Builder().forBrowser(browserName).build();

  driver.$ = selector => driver.findElement(By.css(selector));

  return driver;
}

module.exports = { createBrowser };
