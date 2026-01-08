import { isInitialised, isSupported } from './common/index.mjs';
import { ElementError, InitError, SupportError } from './errors/index.mjs';

function cov_29z900k6in() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/component.mjs";
  var hash = "29f8450aebacf4e837b66803c8abc438a0edcd10";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/component.mjs",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 10
        }
      },
      "1": {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 21,
          column: 40
        }
      },
      "2": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 22
        }
      },
      "3": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 45,
          column: 5
        }
      },
      "4": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 44,
          column: 8
        }
      },
      "5": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 55
        }
      },
      "6": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 35
        }
      },
      "7": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 27
        }
      },
      "8": {
        start: {
          line: 53,
          column: 27
        },
        end: {
          line: 53,
          column: 43
        }
      },
      "9": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 58
        }
      },
      "10": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 22
        }
      },
      "11": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 69,
          column: 5
        }
      },
      "12": {
        start: {
          line: 68,
          column: 6
        },
        end: {
          line: 68,
          column: 43
        }
      },
      "13": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 80,
          column: 5
        }
      },
      "14": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 30
        }
      },
      "15": {
        start: {
          line: 86,
          column: 22
        },
        end: {
          line: 86,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 21
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 33
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        },
        loc: {
          start: {
            line: 62,
            column: 21
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 62
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 24
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 77
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 7,
            column: 10
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 6,
            column: 6
          },
          end: {
            line: 6,
            column: 16
          }
        }, {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 7,
            column: 10
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 45,
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
        line: 38
      },
      "2": {
        loc: {
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 14
          }
        }, {
          start: {
            line: 38,
            column: 18
          },
          end: {
            line: 38,
            column: 66
          }
        }],
        line: 38
      },
      "3": {
        loc: {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 69,
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
        line: 67
      },
      "4": {
        loc: {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
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
        line: 78
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
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "29f8450aebacf4e837b66803c8abc438a0edcd10"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_29z900k6in = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_29z900k6in();
const _self = (cov_29z900k6in().s[0]++, typeof globalThis !== 'undefined' ? (cov_29z900k6in().b[0][0]++, globalThis // Modern browsers, Node.js
) : (cov_29z900k6in().b[0][1]++, self)); // Old browsers, web workers

/**
 * Base component class
 *
 * Centralises the behaviours shared by our components
 *
 * @abstract
 * @template {Element} [RootElementType=HTMLElement]
 */
class Component {
  /**
   * Constructs a new component, validating that NHS.UK frontend is supported
   *
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    /**
     * @type {RootElementType}
     */
    this.$root = void 0;
    cov_29z900k6in().f[0]++;
    const childConstructor = (/** @type {ComponentConstructor} */cov_29z900k6in().s[2]++, this.constructor);
    cov_29z900k6in().s[3]++;
    if ((cov_29z900k6in().b[2][0]++, !$root) || (cov_29z900k6in().b[2][1]++, !($root instanceof childConstructor.elementType))) {
      cov_29z900k6in().b[1][0]++;
      cov_29z900k6in().s[4]++;
      throw new ElementError({
        element: $root,
        component: childConstructor,
        identifier: 'Root element (`$root`)',
        expectedType: childConstructor.elementType.name
      });
    } else {
      cov_29z900k6in().b[1][1]++;
    }
    cov_29z900k6in().s[5]++;
    this.$root = /** @type {RootElementType} */$root;
    cov_29z900k6in().s[6]++;
    childConstructor.checkSupport();
    cov_29z900k6in().s[7]++;
    this.checkInitialised();
    const {
      moduleName
    } = (cov_29z900k6in().s[8]++, childConstructor);
    cov_29z900k6in().s[9]++;
    this.$root.setAttribute(`data-${moduleName}-init`, '');
  }

  /**
   * Validates whether component is already initialised
   *
   * @throws {InitError} when component is already initialised
   */
  checkInitialised() {
    cov_29z900k6in().f[1]++;
    const childConstructor = (/** @type {ComponentConstructor} */cov_29z900k6in().s[10]++, this.constructor);
    cov_29z900k6in().s[11]++;
    if (isInitialised(this.$root, childConstructor.moduleName)) {
      cov_29z900k6in().b[3][0]++;
      cov_29z900k6in().s[12]++;
      throw new InitError(childConstructor);
    } else {
      cov_29z900k6in().b[3][1]++;
    }
  }

  /**
   * Validates whether components are supported
   *
   * @throws {SupportError} when the components are not supported
   */
  static checkSupport() {
    cov_29z900k6in().f[2]++;
    cov_29z900k6in().s[13]++;
    if (!isSupported()) {
      cov_29z900k6in().b[4][0]++;
      cov_29z900k6in().s[14]++;
      throw new SupportError();
    } else {
      cov_29z900k6in().b[4][1]++;
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Component compatible class
 *
 * @template {typeof Component | typeof ConfigurableComponent} [ComponentType=typeof Component]
 * @typedef {{
 *   new(...args: ConstructorParameters<ComponentType>): InstanceType<ComponentType>,
 *   defaults?: ObjectNested,
 *   schema?: Schema<ObjectNested>,
 *   moduleName: string
 * }} CompatibleClass
 */

/**
 * Component constructor
 *
 * @template {typeof Component | typeof ConfigurableComponent} [ComponentType=typeof Component]
 * @typedef {CompatibleClass & ComponentType} ComponentConstructor
 */

/**
 * Component initialisation options
 *
 * @typedef {object} InitOptions
 * @property {Element | Document | null} [scope] - Scope of the document to search within
 */

/**
 * @import { ObjectNested, Schema } from './common/configuration/index.mjs'
 * @import { ConfigurableComponent } from './configurable-component.mjs'
 */
/**
 * @type {typeof Element}
 */
Component.elementType = (cov_29z900k6in().s[1]++, _self.HTMLElement);
Component.moduleName = (cov_29z900k6in().s[15]++, 'nhsuk-component');

export { Component };
//# sourceMappingURL=component.mjs.map
