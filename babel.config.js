module.exports = {
  browserslistEnv: 'javascripts',
  ignore: ['./src/nhsuk/lib'],
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
