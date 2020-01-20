module.exports = {
  globals: {
    window: {
      addEventListener: function() {},
      location: {
        href: ''
      }
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
      "@\/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ['./jest.setup.js']
};
