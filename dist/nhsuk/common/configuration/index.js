'use strict';

var extractConfigByNamespace = require('./extract-config-by-namespace.js');
var mergeConfigs = require('./merge-configs.js');
var normaliseDataset = require('./normalise-dataset.js');
var normaliseOptions = require('./normalise-options.js');
var normaliseString = require('./normalise-string.js');
var validateConfig = require('./validate-config.js');

function cov_2dhb9xuhk1() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/index.mjs";
  var hash = "9e0ef9fc31fb9db60eb949b0aa06d4e36e93e225";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/index.mjs",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9e0ef9fc31fb9db60eb949b0aa06d4e36e93e225"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dhb9xuhk1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2dhb9xuhk1();

exports.extractConfigByNamespace = extractConfigByNamespace.extractConfigByNamespace;
exports.mergeConfigs = mergeConfigs.mergeConfigs;
exports.normaliseDataset = normaliseDataset.normaliseDataset;
exports.normaliseOptions = normaliseOptions.normaliseOptions;
exports.normaliseArray = normaliseString.normaliseArray;
exports.normaliseString = normaliseString.normaliseString;
exports.validateConfig = validateConfig.validateConfig;
//# sourceMappingURL=index.js.map
