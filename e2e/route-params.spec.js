const { createBrowser } = require('./suite');

const browserName = process.env.BROWSER;

describe(`[${browserName}] route params`, () => {
  test(`default route component is visible`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/route-params/example');

      expect(await bs.$('h1').getText()).toEqual('This is Page 1.');
    } finally {
      await bs.quit();
    }
  });

  test(`route path with swapped params is visible as url`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/route-params/example');
      await (await bs.$('a[href="/route-params/example/1"]')).click();

      expect(await bs.getCurrentUrl()).toEqual(
        'http://localhost:3000/route-params/example/1'
      );

      await (await bs.$('a[href="/route-params/example/2/3"]')).click();

      expect(await bs.getCurrentUrl()).toEqual(
        'http://localhost:3000/route-params/example/2/3'
      );

    } finally {
      await bs.quit();
    }
  });

  test(`route params are accessible to components`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/route-params/example');
      await (await bs.$('a[href="/route-params/example/1"]')).click();

      expect(await bs.$('h1').getText()).toEqual('This is Page 2 with param a = 1.');

      await (await bs.$('a[href="/route-params/example/2/3"]')).click();

      expect(await bs.$('h1').getText()).toEqual('This is Page 3 with param a = 2 and param b = 3.');

    } finally {
      await bs.quit();
    }
  })
});
