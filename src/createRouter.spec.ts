import createRouter from './createRouter';
import Router from './Router';

describe(`createRouter`, function() {
  it(`generates router instance`, function() {
    const router = createRouter({});

    expect(router).toBeInstanceOf(Router);
  });
});
