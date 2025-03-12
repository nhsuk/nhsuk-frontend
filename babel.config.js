module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Apply bug fixes to avoid transforms
        bugfixes: true,

        // Apply smaller "loose" transforms for browsers
        loose: true
      }
    ]
  ],
  env: {
    test: {
      browserslistEnv: 'node'
    }
  }
}
