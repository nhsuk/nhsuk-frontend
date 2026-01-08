'use strict';

var index = require('../index.js');
var normaliseString = require('./normalise-string.js');

function cov_1pko95aq6u() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/extract-config-by-namespace.mjs";
  var hash = "836882af460c6191c2f43633e92ac61d43c9055a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/extract-config-by-namespace.mjs",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 19
        },
        end: {
          line: 16,
          column: 47
        }
      },
      "1": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 10
        }
      },
      "3": {
        start: {
          line: 24,
          column: 75
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "4": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "5": {
        start: {
          line: 30,
          column: 18
        },
        end: {
          line: 30,
          column: 27
        }
      },
      "6": {
        start: {
          line: 33,
          column: 21
        },
        end: {
          line: 33,
          column: 35
        }
      },
      "7": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 57,
          column: 5
        }
      },
      "8": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 56,
          column: 7
        }
      },
      "9": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 55,
          column: 9
        }
      },
      "10": {
        start: {
          line: 46,
          column: 10
        },
        end: {
          line: 48,
          column: 11
        }
      },
      "11": {
        start: {
          line: 47,
          column: 12
        },
        end: {
          line: 47,
          column: 30
        }
      },
      "12": {
        start: {
          line: 51,
          column: 10
        },
        end: {
          line: 51,
          column: 33
        }
      },
      "13": {
        start: {
          line: 52,
          column: 15
        },
        end: {
          line: 55,
          column: 9
        }
      },
      "14": {
        start: {
          line: 54,
          column: 10
        },
        end: {
          line: 54,
          column: 48
        }
      },
      "15": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 60,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "extractConfigByNamespace",
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 40
          }
        },
        loc: {
          start: {
            line: 15,
            column: 69
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 21,
            column: 3
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
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 56,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 56,
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
        line: 42
      },
      "2": {
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        }, {
          start: {
            line: 52,
            column: 15
          },
          end: {
            line: 55,
            column: 9
          }
        }],
        line: 44
      },
      "3": {
        loc: {
          start: {
            line: 46,
            column: 10
          },
          end: {
            line: 48,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 10
          },
          end: {
            line: 48,
            column: 11
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
        line: 46
      },
      "4": {
        loc: {
          start: {
            line: 52,
            column: 15
          },
          end: {
            line: 55,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 15
          },
          end: {
            line: 55,
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
        line: 52
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
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "836882af460c6191c2f43633e92ac61d43c9055a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1pko95aq6u = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1pko95aq6u();

/**
 * Extracts keys starting with a particular namespace from dataset ('data-*')
 * object, removing the namespace in the process, normalising all values
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {DOMStringMap} dataset - The object to extract key-value pairs from
 * @param {keyof ConfigurationType} namespace - The namespace to filter keys with
 * @returns {ObjectNested | undefined} Nested object with dot-separated key namespace removed
 */
function extractConfigByNamespace(schema, dataset, namespace) {
  cov_1pko95aq6u().f[0]++;
  const property = (cov_1pko95aq6u().s[0]++, schema.properties[namespace]);

  // Only extract configs for object schema properties
  cov_1pko95aq6u().s[1]++;
  if ((property == null ? void 0 : property.type) !== 'object') {
    cov_1pko95aq6u().b[0][0]++;
    cov_1pko95aq6u().s[2]++;
    return;
  } else {
    cov_1pko95aq6u().b[0][1]++;
  }

  // Add default empty config
  const newObject = (/** @type {Record<typeof namespace, ObjectNested>} */cov_1pko95aq6u().s[3]++, {
    [namespace]: {}
  });
  cov_1pko95aq6u().s[4]++;
  for (const [key, value] of Object.entries(dataset)) {
    /** @type {ObjectNested | ObjectNested[NestedKey]} */
    let current = (cov_1pko95aq6u().s[5]++, newObject);

    // Split the key into parts, using . as our namespace separator
    const keyParts = (cov_1pko95aq6u().s[6]++, key.split('.'));

    /**
     * Create new level per part
     *
     * e.g. 'i18n.textareaDescription.other' becomes
     * `{ i18n: { textareaDescription: { other } } }`
     */
    cov_1pko95aq6u().s[7]++;
    for (const [index$1, name] of keyParts.entries()) {
      cov_1pko95aq6u().s[8]++;
      if (index.isObject(current)) {
        cov_1pko95aq6u().b[1][0]++;
        cov_1pko95aq6u().s[9]++;
        // Drop down to nested object until the last part
        if (index$1 < keyParts.length - 1) {
          cov_1pko95aq6u().b[2][0]++;
          cov_1pko95aq6u().s[10]++;
          // New nested object (optionally) replaces existing value
          if (!index.isObject(current[name])) {
            cov_1pko95aq6u().b[3][0]++;
            cov_1pko95aq6u().s[11]++;
            current[name] = {};
          } else {
            cov_1pko95aq6u().b[3][1]++;
          }

          // Drop down into new or existing nested object
          cov_1pko95aq6u().s[12]++;
          current = current[name];
        } else {
          cov_1pko95aq6u().b[2][1]++;
          cov_1pko95aq6u().s[13]++;
          if (key !== namespace) {
            cov_1pko95aq6u().b[4][0]++;
            cov_1pko95aq6u().s[14]++;
            // Normalised value (optionally) replaces existing value
            current[name] = normaliseString.normaliseString(value);
          } else {
            cov_1pko95aq6u().b[4][1]++;
          }
        }
      } else {
        cov_1pko95aq6u().b[1][1]++;
      }
    }
  }
  cov_1pko95aq6u().s[15]++;
  return newObject[namespace];
}

/**
 * Schema for component config
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @typedef {object} Schema
 * @property {Record<keyof ConfigurationType, SchemaProperty | undefined>} properties - Schema properties
 * @property {SchemaCondition<ConfigurationType>[]} [anyOf] - List of schema conditions
 */

/**
 * Schema property for component config
 *
 * @typedef {object} SchemaProperty
 * @property {'string' | 'boolean' | 'number' | 'object' | 'array'} type - Property type
 */

/**
 * Schema condition for component config
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @typedef {object} SchemaCondition
 * @property {(keyof ConfigurationType)[]} required - List of required config fields
 * @property {string} errorMessage - Error message when required config fields not provided
 */

/**
 * @typedef {keyof ObjectNested} NestedKey
 * @typedef {{ [key: string]: string | boolean | number | (string | number | boolean)[] | ObjectNested | undefined }} ObjectNested
 */

exports.extractConfigByNamespace = extractConfigByNamespace;
//# sourceMappingURL=extract-config-by-namespace.js.map
