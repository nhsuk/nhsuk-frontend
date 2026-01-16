module.exports = {
  browserslistEnv: 'node',
  env: {
    test: {
      plugins: ['transform-import-meta'],
      presets: [
        [
          '@babel/preset-env',
          {
            // Allow dynamic import in browser tests
            exclude: ['transform-dynamic-import']
          }
        ]
      ]
    }
  }
}
