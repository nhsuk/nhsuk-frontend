module.exports = function (chromy, scenario, vp) {
  require('./loadCookies.cjs')(chromy, scenario);

  // IGNORE ANY CERT WARNINGS
  chromy.ignoreCertificateErrors();
};
