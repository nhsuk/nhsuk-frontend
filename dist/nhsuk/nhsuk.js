'use strict';

var index = require('./index.js');

function cov_20784ckco0() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/nhsuk.mjs";
  var hash = "8c6fc9f9282f1e3e6bf597e789581bf103966023";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/nhsuk.mjs",
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
    hash: "8c6fc9f9282f1e3e6bf597e789581bf103966023"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20784ckco0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_20784ckco0();

// Initialise components
cov_20784ckco0().s[0]++;
document.addEventListener('DOMContentLoaded', () => {
  cov_20784ckco0().f[0]++;
  cov_20784ckco0().s[1]++;
  return index.initAll(document);
});
//# sourceMappingURL=nhsuk.js.map
