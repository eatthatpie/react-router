const { createBrowser } = require('./suite');

const browserName = process.env.BROWSER;

describe(`[${browserName}] history mode`, () => {
  test(`default route component is visible`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');

      expect(await bs.$('h1').getText()).toEqual('This is Page 1.');
    } finally {
      await bs.quit();
    }
  });

  test(`url change if route change`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/history-mode/example/page2"]')).click();

      expect(await bs.getCurrentUrl()).toEqual('http://localhost:3000/history-mode/example/page2');
    } finally {
      await bs.quit();
    }
  });

  test(`url change if previous page is requested`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/history-mode/example/page2"]')).click();
      await (await bs.$('a[href="/history-mode/example"]')).click();
      await bs.navigate().back();

      expect(await bs.getCurrentUrl()).toEqual('http://localhost:3000/history-mode/example/page2');
    } finally {
      await bs.quit();
    }
  });

  test(`don't allow pushing the same route more than once`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/history-mode/example"]')).click();
      await (await bs.$('a[href="/history-mode/example/page2"]')).click();
      await (await bs.$('a[href="/history-mode/example/page2"]')).click();
      await (await bs.$('a[href="/history-mode/example/page2"]')).click();
      await bs.navigate().back();

      expect(await bs.getCurrentUrl()).toEqual('http://localhost:3000/history-mode/example');
    } finally {
      await bs.quit();
    }
  });

  test(`component change on route change`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/history-mode/example"]')).click();

      expect(await bs.$('h1').getText()).toEqual('This is Page 1.');

      await (await bs.$('a[href="/history-mode/example/page2"]')).click();

      expect(await bs.$('h1').getText()).toEqual('This is Page 2.');
    } finally {
      await bs.quit();
    }
  });

  test(`component change on route change (back)`, async () => {
    const bs = await createBrowser(browserName);

    try {
      await bs.get('http://localhost:3000/history-mode/example');
      await (await bs.$('a[href="/history-mode/example"]')).click();
      await (await bs.$('a[href="/history-mode/example/page2"]')).click();

      expect(await bs.$('h1').getText()).toEqual('This is Page 2.');

      await bs.navigate().back();

      expect(await bs.$('h1').getText()).toEqual('This is Page 1.');
    } finally {
      await bs.quit();
    }
  });
});
