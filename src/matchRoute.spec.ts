import matchRoute from './matchRoute';

describe(`matchRoute`, function() {
  const routes = [
    { name: 'a', path: '/', component: null },
    { name: 'b', path: '/b', component: null },
    { name: 'c', path: 'c', component: null }
  ];

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
});
