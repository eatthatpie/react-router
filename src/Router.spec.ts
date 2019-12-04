import Router from './Router';

describe(`Router`, function() {
  const router = new Router({
    routes: [
      {
        name: 'a',
        path: '/a',
        component: null
      }
    ]
  });

  describe(`push`, function() {
    it(`throws error if the path or route name is not defined`, function() {
      expect(() => router.push({ path: '/' })).toThrow();
      expect(() => router.push({ name: 'b' })).toThrow();
    });
  });
});
