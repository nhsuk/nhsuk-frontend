'use strict';

require('./common/configuration/index.js');
var index = require('./common/index.js');
var component = require('./component.js');
var index$1 = require('./errors/index.js');
var normaliseDataset = require('./common/configuration/normalise-dataset.js');
var mergeConfigs = require('./common/configuration/merge-configs.js');

function cov_1ml2zs12pk() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/configurable-component.mjs";
  var hash = "5cb8d37c79add421ce85a61af070f367dc465c5f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/configurable-component.mjs",
    statementMap: {
      "0": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 16
        }
      },
      "1": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 24
        }
      },
      "2": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 44,
          column: 5
        }
      },
      "3": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 43,
          column: 7
        }
      },
      "4": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 60
        }
      },
      "5": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "6": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "7": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 13
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 29
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 29
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 38
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 76
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 44,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 44,
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
        line: 37
      },
      "1": {
        loc: {
          start: {
            line: 52,
            column: 46
          },
          end: {
            line: 52,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 52,
            column: 46
          },
          end: {
            line: 52,
            column: 52
          }
        }, {
          start: {
            line: 52,
            column: 56
          },
          end: {
            line: 52,
            column: 58
          }
        }],
        line: 52
      },
      "2": {
        loc: {
          start: {
            line: 76,
            column: 17
          },
          end: {
            line: 76,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 76,
            column: 34
          },
          end: {
            line: 76,
            column: 36
          }
        }],
        line: 76
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5cb8d37c79add421ce85a61af070f367dc465c5f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ml2zs12pk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ml2zs12pk();

/**
 * Configurable base component class
 *
 * @abstract
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} [ConfigurationType=ObjectNested]
 * @template {HTMLElement} [RootElementType=HTMLElement]
 * @augments {Component<RootElementType>}
 */
class ConfigurableComponent extends component.Component {
  /**
   * Constructs a new component, validating that NHS.UK frontend is supported
   *
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<ConfigurationType>} [config] - HTML element to use for component
   */
  constructor($root, config) {
    var _ref;
    cov_1ml2zs12pk().f[0]++;
    cov_1ml2zs12pk().s[0]++;
    super($root);
    /**
     * @type {ConfigurationType}
     */
    this.config = void 0;
    const childConstructor = (/** @type {ComponentConstructor<typeof ConfigurableComponent>} */cov_1ml2zs12pk().s[1]++, this.constructor);
    cov_1ml2zs12pk().s[2]++;
    if (!index.isObject(childConstructor.defaults)) {
      cov_1ml2zs12pk().b[0][0]++;
      cov_1ml2zs12pk().s[3]++;
      throw new index$1.ConfigError(index.formatErrorMessage(childConstructor, 'Config passed as parameter into constructor but no defaults defined'));
    } else {
      cov_1ml2zs12pk().b[0][1]++;
    }
    const datasetConfig = (/** @type {Partial<ConfigurationType>} */cov_1ml2zs12pk().s[4]++, normaliseDataset.normaliseDataset(childConstructor, this.$root.dataset));

    // Override defaults with JavaScript config
    cov_1ml2zs12pk().s[5]++;
    this.config = /** @type {ConfigurationType} */
    mergeConfigs.mergeConfigs(childConstructor.defaults, (_ref = (cov_1ml2zs12pk().b[1][0]++, config)) != null ? _ref : (cov_1ml2zs12pk().b[1][1]++, {}));

    // Override merged config with dataset config
    cov_1ml2zs12pk().s[6]++;
    this.config = /** @type {ConfigurationType} */
    mergeConfigs.mergeConfigs(this.config, this.configOverride(datasetConfig), datasetConfig);
  }

  /**
   * Config override
   *
   * It should take a subset of configuration as input and return
   * a new configuration object with properties that should be
   * overridden based on the root element's dataset
   *
   * @abstract
   * @param {Partial<ConfigurationType>} _datasetConfig - Config specified by dataset
   * @returns {Partial<ConfigurationType>} Config to override by dataset
   */
  configOverride(_datasetConfig = (cov_1ml2zs12pk().b[2][0]++, {})) {
    cov_1ml2zs12pk().f[1]++;
    cov_1ml2zs12pk().s[7]++;
    return {};
  }
}

/**
 * @import { ObjectNested } from './common/configuration/index.mjs'
 * @import { ComponentConstructor } from './component.mjs'
 */

exports.ConfigurableComponent = ConfigurableComponent;
//# sourceMappingURL=configurable-component.js.map
