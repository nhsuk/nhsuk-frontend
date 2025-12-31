function cov_mz6ensqpa() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/validate-config.mjs";
  var hash = "7e04748624a3d4e7192a6cfeb951dc9f00718b1a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/validate-config.mjs",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 27
        },
        end: {
          line: 15,
          column: 29
        }
      },
      "1": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "2": {
        start: {
          line: 19,
          column: 19
        },
        end: {
          line: 19,
          column: 21
        }
      },
      "3": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "4": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "5": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 26,
          column: 9
        }
      },
      "6": {
        start: {
          line: 24,
          column: 37
        },
        end: {
          line: 24,
          column: 50
        }
      },
      "7": {
        start: {
          line: 25,
          column: 10
        },
        end: {
          line: 25,
          column: 35
        }
      },
      "8": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 32,
          column: 7
        }
      },
      "9": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 40
        }
      },
      "10": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "validateConfig",
        decl: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 30
          }
        },
        loc: {
          start: {
            line: 14,
            column: 47
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 29
          }
        },
        loc: {
          start: {
            line: 24,
            column: 37
          },
          end: {
            line: 24,
            column: 50
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 30
      },
      "3": {
        loc: {
          start: {
            line: 30,
            column: 10
          },
          end: {
            line: 30,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 30,
            column: 10
          },
          end: {
            line: 30,
            column: 26
          }
        }, {
          start: {
            line: 30,
            column: 30
          },
          end: {
            line: 30,
            column: 71
          }
        }],
        line: 30
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
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7e04748624a3d4e7192a6cfeb951dc9f00718b1a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_mz6ensqpa = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_mz6ensqpa();
/**
 * Validate component config by schema
 *
 * Follows limited examples in JSON schema for wider support in future
 *
 * {@link https://ajv.js.org/json-schema.html#compound-keywords}
 * {@link https://ajv.js.org/packages/ajv-errors.html#single-message}
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {ConfigurationType} config - Component config
 * @returns {string[]} List of validation errors
 */
function validateConfig(schema, config) {
  cov_mz6ensqpa().f[0]++;
  const validationErrors = (cov_mz6ensqpa().s[0]++, []);

  // Check errors for each schema
  cov_mz6ensqpa().s[1]++;
  for (const [name, conditions] of Object.entries(schema)) {
    const errors = (cov_mz6ensqpa().s[2]++, []);

    // Check errors for each schema condition
    cov_mz6ensqpa().s[3]++;
    if (Array.isArray(conditions)) {
      cov_mz6ensqpa().b[0][0]++;
      cov_mz6ensqpa().s[4]++;
      for (const {
        required,
        errorMessage
      } of conditions) {
        cov_mz6ensqpa().s[5]++;
        if (!required.every(key => {
          cov_mz6ensqpa().f[1]++;
          cov_mz6ensqpa().s[6]++;
          return !!config[key];
        })) {
          cov_mz6ensqpa().b[1][0]++;
          cov_mz6ensqpa().s[7]++;
          errors.push(errorMessage); // Missing config key value
        } else {
          cov_mz6ensqpa().b[1][1]++;
        }
      }

      // Check one condition passes or add errors
      cov_mz6ensqpa().s[8]++;
      if ((cov_mz6ensqpa().b[3][0]++, name === 'anyOf') && (cov_mz6ensqpa().b[3][1]++, !(conditions.length - errors.length >= 1))) {
        cov_mz6ensqpa().b[2][0]++;
        cov_mz6ensqpa().s[9]++;
        validationErrors.push(...errors);
      } else {
        cov_mz6ensqpa().b[2][1]++;
      }
    } else {
      cov_mz6ensqpa().b[0][1]++;
    }
  }
  cov_mz6ensqpa().s[10]++;
  return validationErrors;
}

/**
 * @import { Schema } from './index.mjs'
 */

export { validateConfig };
//# sourceMappingURL=validate-config.mjs.map
