'use strict';

function cov_1uoq3cvw59() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/nhsuk-frontend-version.mjs";
  var hash = "16a4e81f9ee61cc89048ed0381661371428b66ce";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/nhsuk-frontend-version.mjs",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 23
        },
        end: {
          line: 11,
          column: 36
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "16a4e81f9ee61cc89048ed0381661371428b66ce"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1uoq3cvw59 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1uoq3cvw59();
/*
 * This variable is automatically overwritten during builds and releases.
 * It doesn't need to be updated manually.
 */

/**
 * NHS.UK frontend release version
 *
 * {@link https://github.com/nhsuk/nhsuk-frontend/releases}
 */
const version = (cov_1uoq3cvw59().s[0]++, 'development');

exports.version = version;
//# sourceMappingURL=nhsuk-frontend-version.js.map
