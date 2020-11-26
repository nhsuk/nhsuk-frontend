const { scenarios } = require('../backstop/backstop');

module.exports = {
  urls: scenarios.map(({ url }) => url),
};
