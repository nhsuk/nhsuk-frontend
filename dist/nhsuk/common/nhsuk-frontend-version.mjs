function cov_1n6gnrs4jo() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/nhsuk-frontend-version.mjs";
  var hash = "9a05dc45acf84313e3c7d92ac264c0e1b05b79dc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/nhsuk-frontend-version.mjs",
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
    hash: "9a05dc45acf84313e3c7d92ac264c0e1b05b79dc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1n6gnrs4jo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1n6gnrs4jo();
/*
 * This variable is automatically overwritten during builds and releases.
 * It doesn't need to be updated manually.
 */

/**
 * NHS.UK frontend release version
 *
 * {@link https://github.com/nhsuk/nhsuk-frontend/releases}
 */
const version = (cov_1n6gnrs4jo().s[0]++, 'development');

export { version };
//# sourceMappingURL=nhsuk-frontend-version.mjs.map
