const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const { Builder, By } = require('selenium-webdriver');

async function createBrowser(browserName) {
  const driver = await new Builder()
    .forBrowser(browserName)
    .setChromeOptions(new chrome.Options().headless())
    .setFirefoxOptions(new firefox.Options().headless())
    .build();

  driver.$ = selector => driver.findElement(By.css(selector));

  return driver;
}

module.exports = { createBrowser };
