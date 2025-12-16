'use strict';

var index$1 = require('../../errors/index.js');
var index = require('../index.js');
var extractConfigByNamespace = require('./extract-config-by-namespace.js');
var normaliseString = require('./normalise-string.js');

function cov_6ftc3n0la() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/normalise-dataset.mjs";
  var hash = "02bf19379284cbdcfaeaca22cb84f028255f4e37";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/normalise-dataset.mjs",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "2": {
        start: {
          line: 29,
          column: 43
        },
        end: {
          line: 29,
          column: 45
        }
      },
      "3": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 47
        }
      },
      "4": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 56,
          column: 3
        }
      },
      "5": {
        start: {
          line: 36,
          column: 34
        },
        end: {
          line: 36,
          column: 39
        }
      },
      "6": {
        start: {
          line: 39,
          column: 18
        },
        end: {
          line: 39,
          column: 38
        }
      },
      "7": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "8": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 60
        }
      },
      "9": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "10": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "11": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "normaliseDataset",
        decl: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 32
          }
        },
        loc: {
          start: {
            line: 19,
            column: 53
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 27,
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
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 43,
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
        line: 41
      },
      "2": {
        loc: {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 55,
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
        line: 49
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
      "11": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "02bf19379284cbdcfaeaca22cb84f028255f4e37"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6ftc3n0la = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_6ftc3n0la();

/**
 * Normalise dataset
 *
 * Loop over an object and normalise each value using {@link normaliseString},
 * optionally expanding `data-i18n.property` nested values
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @template {[keyof ConfigurationType, SchemaProperty | undefined][]} SchemaEntryType
 * @param {CompatibleClass & { schema?: Schema<ConfigurationType> }} Component - Component class
 * @param {DOMStringMap} dataset - HTML element dataset
 * @returns {ObjectNested} Normalised dataset
 */
function normaliseDataset(Component, dataset) {
  cov_6ftc3n0la().f[0]++;
  cov_6ftc3n0la().s[0]++;
  if (!index.isObject(Component.schema)) {
    cov_6ftc3n0la().b[0][0]++;
    cov_6ftc3n0la().s[1]++;
    throw new index$1.ConfigError(index.formatErrorMessage(Component, 'Config passed as parameter into constructor but no schema defined'));
  } else {
    cov_6ftc3n0la().b[0][1]++;
  }
  const out = (/** @type {ObjectNested} */cov_6ftc3n0la().s[2]++, {});
  const entries = (/** @type {SchemaEntryType} */cov_6ftc3n0la().s[3]++, Object.entries(Component.schema.properties));

  // Normalise top-level dataset ('data-*') values using schema types
  cov_6ftc3n0la().s[4]++;
  for (const entry of entries) {
    const [namespace, property] = (cov_6ftc3n0la().s[5]++, entry);

    // Cast the `namespace` to string so it can be used to access the dataset
    const field = (cov_6ftc3n0la().s[6]++, namespace.toString());
    cov_6ftc3n0la().s[7]++;
    if (field in dataset) {
      cov_6ftc3n0la().b[1][0]++;
      cov_6ftc3n0la().s[8]++;
      out[field] = normaliseString.normaliseString(dataset[field], property);
    } else {
      cov_6ftc3n0la().b[1][1]++;
    }

    /**
     * Extract and normalise nested object values automatically using
     * {@link normaliseString} but only schema object types are allowed
     */
    cov_6ftc3n0la().s[9]++;
    if ((property == null ? void 0 : property.type) === 'object') {
      cov_6ftc3n0la().b[2][0]++;
      cov_6ftc3n0la().s[10]++;
      out[field] = extractConfigByNamespace.extractConfigByNamespace(Component.schema, dataset, namespace);
    } else {
      cov_6ftc3n0la().b[2][1]++;
    }
  }
  cov_6ftc3n0la().s[11]++;
  return out;
}

/**
 * @import { CompatibleClass } from '../../component.mjs'
 * @import { ObjectNested, Schema, SchemaProperty } from './index.mjs'
 */

exports.normaliseDataset = normaliseDataset;
//# sourceMappingURL=normalise-dataset.js.map
