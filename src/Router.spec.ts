import Router from './Router';

describe(`Router`, function() {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        name: 'a',
        path: '/a',
        component: null
      }
    ]
  });

  describe(`push`, function() {
    it(`returns true if the route is matched`, function() {
      expect(router.push({ path: '/a' })).toBe(true);
    });

    it(`throws error if the path or route name are not defined`, function() {
      expect(() => router.push({ path: '/' })).toThrow();
      expect(() => router.push({ name: 'b' })).toThrow();
    });

    it(`throws error if both path and route name are given`, function() {
      expect(() => router.push({ path: '/a', name: 'a' })).toThrow();
    });

    it(`ignores lack of first slash in path string`, function() {
      expect(router.push({ path: 'a' })).toBe(true);
    });
  });
});
