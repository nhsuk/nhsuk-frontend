
const path = require('path');

module.exports = {
  entry: './packages/nhsuk.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'nhsuk.bundle.js'
  }
};
