module.exports = {
  globals: {
    window: {
      addEventListener: () => {},
      location: {
        pathname: '/'
      },
      history: {
        pushState: function() {}
      }
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
      "@\/(.*)$": "<rootDir>/src/$1"
  }
};
