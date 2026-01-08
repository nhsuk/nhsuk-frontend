export { extractConfigByNamespace } from './extract-config-by-namespace.mjs';
export { mergeConfigs } from './merge-configs.mjs';
export { normaliseDataset } from './normalise-dataset.mjs';
export { normaliseOptions } from './normalise-options.mjs';
export { normaliseArray, normaliseString } from './normalise-string.mjs';
export { validateConfig } from './validate-config.mjs';

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
//# sourceMappingURL=index.mjs.map
