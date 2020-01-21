import createRouter from './createRouter';
import Router from './Router';

describe(`createRouter`, function() {
  it(`generates router instance`, function() {
    const router = createRouter({
      routes: [
        {
          path: '/',
          component: null
        }
      ]
    });

    expect(router).toBeInstanceOf(Router);
  });
});
