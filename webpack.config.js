module.exports = {
  mode: 'production',
  output: {
    filename: 'nhsuk.bundle.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
