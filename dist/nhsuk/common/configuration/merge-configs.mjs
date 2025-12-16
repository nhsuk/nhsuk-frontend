import { isObject } from '../index.mjs';

function cov_hp2mz3zi6() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/merge-configs.mjs";
  var hash = "82e1eb5ceb1d799bfe57e4eb14ec45b2e7c2febd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/merge-configs.mjs",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 32
        },
        end: {
          line: 15,
          column: 34
        }
      },
      "1": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "3": {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 20,
          column: 47
        }
      },
      "4": {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 21,
          column: 40
        }
      },
      "5": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "6": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 67
        }
      },
      "7": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 45
        }
      },
      "8": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "mergeConfigs",
        decl: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 12,
            column: 28
          }
        },
        loc: {
          start: {
            line: 12,
            column: 47
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 31,
            column: 7
          }
        }, {
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 31,
            column: 7
          }
        }],
        line: 26
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 10
          },
          end: {
            line: 26,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 26,
            column: 10
          },
          end: {
            line: 26,
            column: 26
          }
        }, {
          start: {
            line: 26,
            column: 30
          },
          end: {
            line: 26,
            column: 48
          }
        }],
        line: 26
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "82e1eb5ceb1d799bfe57e4eb14ec45b2e7c2febd"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hp2mz3zi6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_hp2mz3zi6();

/**
 * Config merging function
 *
 * Takes any number of objects and combines them together, with
 * greatest priority on the LAST item passed in.
 *
 * @param {...{ [key: string]: unknown }} configObjects - Config objects to merge
 * @returns A merged config object
 */
function mergeConfigs(...configObjects) {
  cov_hp2mz3zi6().f[0]++;
  // Start with an empty object as our base
  /** @type {{ [key: string]: unknown }} */
  const formattedConfigObject = (cov_hp2mz3zi6().s[0]++, {});

  // Loop through each of the passed objects
  cov_hp2mz3zi6().s[1]++;
  for (const configObject of configObjects) {
    cov_hp2mz3zi6().s[2]++;
    for (const key of Object.keys(configObject)) {
      const option = (cov_hp2mz3zi6().s[3]++, formattedConfigObject[key]);
      const override = (cov_hp2mz3zi6().s[4]++, configObject[key]);

      // Push their keys one-by-one into formattedConfigObject. Any duplicate
      // keys with object values will be merged, otherwise the new value will
      // override the existing value.
      cov_hp2mz3zi6().s[5]++;
      if ((cov_hp2mz3zi6().b[1][0]++, isObject(option)) && (cov_hp2mz3zi6().b[1][1]++, isObject(override))) {
        cov_hp2mz3zi6().b[0][0]++;
        cov_hp2mz3zi6().s[6]++;
        formattedConfigObject[key] = mergeConfigs(option, override);
      } else {
        cov_hp2mz3zi6().b[0][1]++;
        cov_hp2mz3zi6().s[7]++;
        // Apply override
        formattedConfigObject[key] = override;
      }
    }
  }
  cov_hp2mz3zi6().s[8]++;
  return formattedConfigObject;
}

export { mergeConfigs };
//# sourceMappingURL=merge-configs.mjs.map
