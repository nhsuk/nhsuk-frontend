export { extractConfigByNamespace } from './extract-config-by-namespace.mjs';
export { mergeConfigs } from './merge-configs.mjs';
export { normaliseDataset } from './normalise-dataset.mjs';
export { normaliseOptions } from './normalise-options.mjs';
export { normaliseString } from './normalise-string.mjs';
export { validateConfig } from './validate-config.mjs';

function cov_7jtwi3ffo() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/index.mjs";
  var hash = "d662151a955f9c7adf071813447c16da29d25caa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/index.mjs",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d662151a955f9c7adf071813447c16da29d25caa"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7jtwi3ffo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_7jtwi3ffo();
//# sourceMappingURL=index.mjs.map
