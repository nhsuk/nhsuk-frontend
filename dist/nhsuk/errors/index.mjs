import { formatErrorMessage } from '../common/index.mjs';

function cov_10yqi595qc() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/errors/index.mjs";
  var hash = "7c1fbd2651224c03456b65521b529bf074e1e0c2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/errors/index.mjs",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 9
        },
        end: {
          line: 24,
          column: 29
        }
      },
      "1": {
        start: {
          line: 31,
          column: 9
        },
        end: {
          line: 31,
          column: 23
        }
      },
      "2": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 42,
          column: 60
        }
      },
      "3": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 48,
          column: 5
        }
      },
      "4": {
        start: {
          line: 56,
          column: 9
        },
        end: {
          line: 56,
          column: 22
        }
      },
      "5": {
        start: {
          line: 63,
          column: 9
        },
        end: {
          line: 63,
          column: 23
        }
      },
      "6": {
        start: {
          line: 69,
          column: 61
        },
        end: {
          line: 69,
          column: 68
        }
      },
      "7": {
        start: {
          line: 71,
          column: 18
        },
        end: {
          line: 71,
          column: 28
        }
      },
      "8": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 76,
          column: 20
        }
      },
      "9": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 81,
          column: 5
        }
      },
      "10": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 54
        }
      },
      "11": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 18
        }
      },
      "12": {
        start: {
          line: 91,
          column: 9
        },
        end: {
          line: 91,
          column: 20
        }
      },
      "13": {
        start: {
          line: 98,
          column: 6
        },
        end: {
          line: 103,
          column: 11
        }
      },
      "14": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 38
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 38
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 23
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 68
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 96,
            column: 3
          }
        },
        loc: {
          start: {
            line: 96,
            column: 34
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 96
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 38,
            column: 14
          },
          end: {
            line: 38,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 38,
            column: 23
          },
          end: {
            line: 38,
            column: 36
          }
        }],
        line: 38
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 42,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 41,
            column: 10
          },
          end: {
            line: 41,
            column: 122
          }
        }, {
          start: {
            line: 42,
            column: 10
          },
          end: {
            line: 42,
            column: 60
          }
        }],
        line: 40
      },
      "2": {
        loc: {
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 47,
            column: 72
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 46,
            column: 10
          },
          end: {
            line: 46,
            column: 24
          }
        }, {
          start: {
            line: 47,
            column: 10
          },
          end: {
            line: 47,
            column: 72
          }
        }],
        line: 45
      },
      "3": {
        loc: {
          start: {
            line: 74,
            column: 15
          },
          end: {
            line: 76,
            column: 20
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 75,
            column: 58
          }
        }, {
          start: {
            line: 76,
            column: 8
          },
          end: {
            line: 76,
            column: 20
          }
        }],
        line: 74
      },
      "4": {
        loc: {
          start: {
            line: 75,
            column: 27
          },
          end: {
            line: 75,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 75,
            column: 27
          },
          end: {
            line: 75,
            column: 39
          }
        }, {
          start: {
            line: 75,
            column: 43
          },
          end: {
            line: 75,
            column: 56
          }
        }],
        line: 75
      },
      "5": {
        loc: {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 81,
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
        line: 79
      },
      "6": {
        loc: {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 103,
            column: 11
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 99,
            column: 10
          },
          end: {
            line: 99,
            column: 28
          }
        }, {
          start: {
            line: 100,
            column: 10
          },
          end: {
            line: 103,
            column: 11
          }
        }],
        line: 98
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
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7c1fbd2651224c03456b65521b529bf074e1e0c2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10yqi595qc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10yqi595qc();

/**
 * NHS.UK frontend error
 *
 * A base class for `Error`s thrown by NHS.UK frontend.
 *
 * It is meant to be extended into specific types of errors
 * to be thrown by our code.
 *
 * @example
 * ```js
 * class MissingRootError extends NHSUKFrontendError {
 *   // Setting an explicit name is important as extending the class will not
 *   // set a new `name` on the subclass. The `name` property is important
 *   // to ensure intelligible error names even if the class name gets
 *   // mangled by a minifier
 *   name = "MissingRootError"
 * }
 * ```
 * @abstract
 */
class NHSUKFrontendError extends Error {
  constructor(...args) {
    super(...args);
    this.name = (cov_10yqi595qc().s[0]++, 'NHSUKFrontendError');
  }
}

/**
 * Indicates that NHS.UK frontend is not supported
 */
class SupportError extends NHSUKFrontendError {
  /**
   * Checks if NHS.UK frontend is supported on this page
   *
   * @param {HTMLElement | null} [$scope] - HTML element `<body>` checked for browser support
   */
  constructor($scope = (cov_10yqi595qc().b[0][0]++, document.body)) {
    cov_10yqi595qc().f[0]++;
    const supportMessage = (cov_10yqi595qc().s[2]++, 'noModule' in HTMLScriptElement.prototype ? (cov_10yqi595qc().b[1][0]++, 'NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet') : (cov_10yqi595qc().b[1][1]++, 'NHS.UK frontend is not supported in this browser'));
    cov_10yqi595qc().s[3]++;
    super($scope ? (cov_10yqi595qc().b[2][0]++, supportMessage) : (cov_10yqi595qc().b[2][1]++, 'NHS.UK frontend initialised without `<script type="module">`'));
    this.name = (cov_10yqi595qc().s[1]++, 'SupportError');
  }
}

/**
 * Indicates that a component has received an illegal configuration
 */
class ConfigError extends NHSUKFrontendError {
  constructor(...args) {
    super(...args);
    this.name = (cov_10yqi595qc().s[4]++, 'ConfigError');
  }
}

/**
 * Indicates an issue with an element (possibly `null` or `undefined`)
 */
class ElementError extends NHSUKFrontendError {
  /**
   * @param {ElementErrorOptions} options - Element error options
   */
  constructor(options) {
    var _ref;
    cov_10yqi595qc().f[1]++;
    const {
      component,
      identifier,
      element,
      expectedType
    } = (cov_10yqi595qc().s[6]++, options);
    let message = (cov_10yqi595qc().s[7]++, identifier);

    // Append reason
    cov_10yqi595qc().s[8]++;
    message += element ? (cov_10yqi595qc().b[3][0]++, ` is not of type ${(_ref = (cov_10yqi595qc().b[4][0]++, expectedType)) != null ? _ref : (cov_10yqi595qc().b[4][1]++, 'HTMLElement')}`) : (cov_10yqi595qc().b[3][1]++, ' not found');

    // Prepend with module name (optional)
    cov_10yqi595qc().s[9]++;
    if (component) {
      cov_10yqi595qc().b[5][0]++;
      cov_10yqi595qc().s[10]++;
      message = formatErrorMessage(component, message);
    } else {
      cov_10yqi595qc().b[5][1]++;
    }
    cov_10yqi595qc().s[11]++;
    super(message);
    this.name = (cov_10yqi595qc().s[5]++, 'ElementError');
  }
}

/**
 * Indicates that a component is already initialised
 */
class InitError extends NHSUKFrontendError {
  /**
   * @param {CompatibleClass | string} componentOrMessage - Component or init error message
   */
  constructor(componentOrMessage) {
    cov_10yqi595qc().f[2]++;
    const message = (cov_10yqi595qc().s[13]++, typeof componentOrMessage === 'string' ? (cov_10yqi595qc().b[6][0]++, componentOrMessage) : (cov_10yqi595qc().b[6][1]++, formatErrorMessage(componentOrMessage, 'Root element (`$root`) already initialised')));
    cov_10yqi595qc().s[14]++;
    super(message);
    this.name = (cov_10yqi595qc().s[12]++, 'InitError');
  }
}

/**
 * Element error options
 *
 * @typedef {object} ElementErrorOptions
 * @property {Element | Document | null} [element] - The element in error (optional)
 * @property {CompatibleClass} [component] - Component throwing the error (optional)
 * @property {string} identifier - An identifier that'll let the user understand which element has an error. This is whatever makes the most sense
 * @property {string} [expectedType] - The type that was expected for the identifier
 */

/**
 * @import { CompatibleClass } from '../component.mjs'
 */

export { ConfigError, ElementError, InitError, NHSUKFrontendError, SupportError };
//# sourceMappingURL=index.mjs.map
