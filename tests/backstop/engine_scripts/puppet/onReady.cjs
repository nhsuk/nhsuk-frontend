module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper.cjs')(page, scenario);

  // add more ready handlers here...
};
