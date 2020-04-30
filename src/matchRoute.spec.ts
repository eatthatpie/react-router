import matchRoute from './matchRoute';

describe(`matchRoute`, function() {
  let routes;

  beforeEach(() => {
    routes = [
      { name: 'a', path: '/', component: null },
      { name: 'b', path: '/b', component: null },
      { name: 'c', path: 'c', component: null },
      { name: 'd', path: '/d/:e', component: null },
      { name: 'e', path: '/e/:f/:g', component: null },
      { name: 'f', path: '/d/:h', component: null }
    ];
  });

  describe(`matching`, function() {
    it(`matches route by name`, function() {
      const location = { name: 'a' };
  
      expect(matchRoute(routes, location)).toMatchObject(routes[0]);
    });
  
    it(`matches route by path`, function() {
      const location = { path: '/b' };
  
      expect(matchRoute(routes, location)).toMatchObject(routes[1]);
    });
  
    it(`ignores lack of first slash in path string`, function() {
      const locationB = { path: 'b' };
  
      expect(matchRoute(routes, locationB)).toMatchObject(routes[1]);
  
      const locationC = { path: '/c' };
  
      expect(matchRoute(routes, locationC)).toMatchObject(routes[2]);
    });
  
    it(`returns false if route with given path is not defined`, function() {
      const location = { path: '/not-defined-path' };
  
      expect(matchRoute(routes, location)).toBe(false);
    });
  
    it(`returns false if route with given route name is not defined`, function() {
      const location = { name: 'not-defined-name' };
    
      expect(matchRoute(routes, location)).toBe(false);
    });
  
    it(`throws error if both path and route name is given`, function() {
      const location = { name: 'a', path: '/' };
    
      expect(() => matchRoute(routes, location)).toThrow();
    });
  
    it(`treats *-d path as wildcard`, function() {
      const routesWithWildCard = [
        { name: 'a', path: '/a', component: null },
        { name: 'w', path: '*', component: null }
      ];
  
      const location = { path: '/not-strictly-defined-path' };
    
      expect(matchRoute(routesWithWildCard, location)).toMatchObject(routesWithWildCard[1]);
    });
  });

  describe(`route params`, function() {
    it(`returns the first matched route with params`, function() {
      const location = { path: '/d/param1' };

      expect(matchRoute(routes, location)).toMatchObject(routes[3]);
    });

    it(`contains matched route url params`, function() {
      const location = { path: '/e/param1/param2' };

      expect(matchRoute(routes, location)).toMatchObject({
        name: 'e',
        path: '/e/:f/:g',
        component: null,
        params: {
          f: 'param1',
          g: 'param2'
        }
      });
    });

    test(`matched route object contains matched path url`, function() {
      const location = { path: '/e/param1/param2' };

      expect(matchRoute(routes, location)).toMatchObject({
        matchedPath: '/e/param1/param2'
      });
    });
  });
});
