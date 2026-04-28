module.exports = {
  browserslistEnv: 'javascripts',
  presets: [
    [
      '@babel/preset-env',
      {
        // Apply bug fixes to avoid transforms
        bugfixes: true,

        // Skip unnecessary transforms
        exclude: [
          'transform-unicode-regex',
          'transform-unicode-property-regex'
        ],

        // Apply smaller "loose" transforms for browsers
        loose: true
      }
    ]
  ],
  overrides: [
    {
      browserslistEnv: 'node',
      include: [
        './src/nhsuk/lib',
        './src/nhsuk/components/**/fixtures.mjs',
        './src/nhsuk/components/**/macro-options.mjs'
      ]
    }
  ],
  env: {
    test: {
      browserslistEnv: 'node'
    }
  }
}
