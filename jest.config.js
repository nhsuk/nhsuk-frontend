module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*.js',
  ],
  globals: {
    window: true,
  },
  verbose: true,
};
