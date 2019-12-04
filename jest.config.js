module.exports = {
  globals: {
    window: {
      location: {
        href: ''
      }
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
      "@\/(.*)$": "<rootDir>/src/$1"
  }
};
