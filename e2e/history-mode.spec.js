const { createBrowser } = require('./suite');

const browserName = process.env.BROWSER;

describe(`[${browserName}] history mode`, () => {
  // test: first route

  test(`change route once`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/page2"]')).click();

      expect(await bs.getCurrentUrl()).toEqual('http://localhost:3000/page2');
    } finally {
      await bs.quit();
    }
  });

  test(`go back`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/page2"]')).click();
      await (await bs.$('a[href="/"]')).click();
      await bs.navigate().back();

      expect(await bs.getCurrentUrl()).toEqual('http://localhost:3000/page2');
    } finally {
      await bs.quit();
    }
  });

  // test: change the same route multiple times

  test(`component change on route change`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/"]')).click();

      expect(await bs.$('h1').getText()).toEqual('This is Page 1.');

      await (await bs.$('a[href="/page2"]')).click();

      expect(await bs.$('h1').getText()).toEqual('This is Page 2.');
    } finally {
      await bs.quit();
    }
  });

  test(`component change on route change (back)`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/"]')).click();
      await (await bs.$('a[href="/page2"]')).click();

      expect(await bs.$('h1').getText()).toEqual('This is Page 2.');

      await bs.navigate().back();

      expect(await bs.$('h1').getText()).toEqual('This is Page 1.');
    } finally {
      await bs.quit();
    }
  });
});
