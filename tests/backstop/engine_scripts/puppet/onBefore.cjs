module.exports = async (page, scenario, vp) => {
  await require('./loadCookies.cjs')(page, scenario);
};
