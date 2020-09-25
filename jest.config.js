module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*.js',
  ],
  globals: {
    window: true,
  },
  verbose: true,
};
