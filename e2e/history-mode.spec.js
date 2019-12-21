const { createBrowser } = require('./suite');

const browserName = process.env.BROWSER;

describe(`[${browserName}] history mode`, () => {
  test(`url changes on push`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000');
      await (await bs.$('a')).click();
      await (await bs.$('a[href="/page2"]')).click();

      expect(await bs.getCurrentUrl()).toEqual('http://localhost:3000/page2');
    } finally {
      await bs.quit();
    }
  });

  test(`url changes on history back`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000');
      await (await bs.$('a')).click();
      await (await bs.$('a[href="/page2"]')).click();
      await (await bs.$('a[href="/"]')).click();
      await bs.navigate().back();

      expect(await bs.getCurrentUrl()).toEqual('http://localhost:3000/page2');
    } finally {
      await bs.quit();
    }
  });
});
