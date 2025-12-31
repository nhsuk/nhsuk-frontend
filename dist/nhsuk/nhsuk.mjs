import { initAll } from './index.mjs';

function cov_24c8wvoptg() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/nhsuk.mjs";
  var hash = "9997a3ae5038044f9896a46ff4b1907d21acdc16";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/nhsuk.mjs",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 70
        }
      },
      "1": {
        start: {
          line: 4,
          column: 52
        },
        end: {
          line: 4,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 46
          },
          end: {
            line: 4,
            column: 47
          }
        },
        loc: {
          start: {
            line: 4,
            column: 52
          },
          end: {
            line: 4,
            column: 69
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9997a3ae5038044f9896a46ff4b1907d21acdc16"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_24c8wvoptg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_24c8wvoptg();

// Initialise components
cov_24c8wvoptg().s[0]++;
document.addEventListener('DOMContentLoaded', () => {
  cov_24c8wvoptg().f[0]++;
  cov_24c8wvoptg().s[1]++;
  return initAll(document);
});
//# sourceMappingURL=nhsuk.mjs.map
