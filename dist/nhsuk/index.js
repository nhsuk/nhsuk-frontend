'use strict';

require('./common/configuration/index.js');
var index = require('./common/index.js');
require('./components/index.js');
var index$1 = require('./errors/index.js');
var i18n = require('./i18n.js');
var normaliseOptions = require('./common/configuration/normalise-options.js');
var button = require('./components/button/button.js');
var characterCount = require('./components/character-count/character-count.js');
var checkboxes = require('./components/checkboxes/checkboxes.js');
var errorSummary = require('./components/error-summary/error-summary.js');
var fileUpload = require('./components/file-upload/file-upload.js');
var header = require('./components/header/header.js');
var notificationBanner = require('./components/notification-banner/notification-banner.js');
var passwordInput = require('./components/password-input/password-input.js');
var radios = require('./components/radios/radios.js');
var skipLink = require('./components/skip-link/skip-link.js');
var tabs = require('./components/tabs/tabs.js');
var closestAttributeValue = require('./common/closest-attribute-value.js');
var nhsukFrontendVersion = require('./common/nhsuk-frontend-version.js');
var component = require('./component.js');
var configurableComponent = require('./configurable-component.js');

function cov_rey0juhu() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/index.mjs";
  var hash = "09b94f9dc1119cfd43c48efe21e55a74cf6656dc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/index.mjs",
    statementMap: {
      "0": {
        start: {
          line: 39,
          column: 17
        },
        end: {
          line: 39,
          column: 61
        }
      },
      "1": {
        start: {
          line: 42,
          column: 18
        },
        end: {
          line: 42,
          column: 49
        }
      },
      "2": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 68,
          column: 3
        }
      },
      "3": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 48,
          column: 5
        }
      },
      "4": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 30
        }
      },
      "5": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 57,
          column: 5
        }
      },
      "6": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 56,
          column: 8
        }
      },
      "7": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 65,
          column: 5
        }
      },
      "8": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 62,
          column: 8
        }
      },
      "9": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 24
        }
      },
      "10": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 67,
          column: 10
        }
      },
      "11": {
        start: {
          line: 70,
          column: 43
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "12": {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 86,
          column: 4
        }
      },
      "13": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 50
        }
      },
      "14": {
        start: {
          line: 134,
          column: 18
        },
        end: {
          line: 134,
          column: 50
        }
      },
      "15": {
        start: {
          line: 136,
          column: 2
        },
        end: {
          line: 166,
          column: 3
        }
      },
      "16": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 140,
          column: 5
        }
      },
      "17": {
        start: {
          line: 139,
          column: 6
        },
        end: {
          line: 139,
          column: 30
        }
      },
      "18": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 150,
          column: 5
        }
      },
      "19": {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 149,
          column: 8
        }
      },
      "20": {
        start: {
          line: 152,
          column: 4
        },
        end: {
          line: 154,
          column: 5
        }
      },
      "21": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 163,
          column: 5
        }
      },
      "22": {
        start: {
          line: 157,
          column: 6
        },
        end: {
          line: 160,
          column: 8
        }
      },
      "23": {
        start: {
          line: 162,
          column: 6
        },
        end: {
          line: 162,
          column: 24
        }
      },
      "24": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 13
        }
      },
      "25": {
        start: {
          line: 168,
          column: 2
        },
        end: {
          line: 191,
          column: 37
        }
      },
      "26": {
        start: {
          line: 170,
          column: 6
        },
        end: {
          line: 189,
          column: 7
        }
      },
      "27": {
        start: {
          line: 171,
          column: 8
        },
        end: {
          line: 176,
          column: 9
        }
      },
      "28": {
        start: {
          line: 178,
          column: 8
        },
        end: {
          line: 186,
          column: 9
        }
      },
      "29": {
        start: {
          line: 179,
          column: 10
        },
        end: {
          line: 183,
          column: 12
        }
      },
      "30": {
        start: {
          line: 185,
          column: 10
        },
        end: {
          line: 185,
          column: 28
        }
      },
      "31": {
        start: {
          line: 188,
          column: 8
        },
        end: {
          line: 188,
          column: 19
        }
      },
      "32": {
        start: {
          line: 191,
          column: 26
        },
        end: {
          line: 191,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "initAll",
        decl: {
          start: {
            line: 38,
            column: 16
          },
          end: {
            line: 38,
            column: 23
          }
        },
        loc: {
          start: {
            line: 38,
            column: 44
          },
          end: {
            line: 87,
            column: 1
          }
        },
        line: 38
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 84,
            column: 21
          },
          end: {
            line: 84,
            column: 22
          }
        },
        loc: {
          start: {
            line: 84,
            column: 55
          },
          end: {
            line: 86,
            column: 3
          }
        },
        line: 84
      },
      "2": {
        name: "createAll",
        decl: {
          start: {
            line: 130,
            column: 16
          },
          end: {
            line: 130,
            column: 25
          }
        },
        loc: {
          start: {
            line: 130,
            column: 61
          },
          end: {
            line: 192,
            column: 1
          }
        },
        line: 130
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 169,
            column: 9
          },
          end: {
            line: 169,
            column: 10
          }
        },
        loc: {
          start: {
            line: 169,
            column: 23
          },
          end: {
            line: 190,
            column: 5
          }
        },
        line: 169
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 191,
            column: 12
          },
          end: {
            line: 191,
            column: 13
          }
        },
        loc: {
          start: {
            line: 191,
            column: 26
          },
          end: {
            line: 191,
            column: 36
          }
        },
        line: 191
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 38,
            column: 24
          },
          end: {
            line: 38,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 38,
            column: 40
          },
          end: {
            line: 38,
            column: 42
          }
        }],
        line: 38
      },
      "1": {
        loc: {
          start: {
            line: 39,
            column: 17
          },
          end: {
            line: 39,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 39,
            column: 43
          },
          end: {
            line: 39,
            column: 56
          }
        }, {
          start: {
            line: 39,
            column: 59
          },
          end: {
            line: 39,
            column: 61
          }
        }],
        line: 39
      },
      "2": {
        loc: {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 48,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 48,
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
        line: 46
      },
      "3": {
        loc: {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 57,
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
        line: 52
      },
      "4": {
        loc: {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        }, {
          start: {
            line: 63,
            column: 11
          },
          end: {
            line: 65,
            column: 5
          }
        }],
        line: 59
      },
      "5": {
        loc: {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
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
        line: 138
      },
      "6": {
        loc: {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 150,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 150,
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
        line: 144
      },
      "7": {
        loc: {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        }, {
          start: {
            line: 161,
            column: 11
          },
          end: {
            line: 163,
            column: 5
          }
        }],
        line: 156
      },
      "8": {
        loc: {
          start: {
            line: 168,
            column: 20
          },
          end: {
            line: 168,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 168,
            column: 20
          },
          end: {
            line: 168,
            column: 29
          }
        }, {
          start: {
            line: 168,
            column: 33
          },
          end: {
            line: 168,
            column: 35
          }
        }],
        line: 168
      },
      "9": {
        loc: {
          start: {
            line: 173,
            column: 10
          },
          end: {
            line: 175,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 174,
            column: 14
          },
          end: {
            line: 174,
            column: 45
          }
        }, {
          start: {
            line: 175,
            column: 14
          },
          end: {
            line: 175,
            column: 37
          }
        }],
        line: 173
      },
      "10": {
        loc: {
          start: {
            line: 173,
            column: 10
          },
          end: {
            line: 173,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 173,
            column: 10
          },
          end: {
            line: 173,
            column: 18
          }
        }, {
          start: {
            line: 173,
            column: 22
          },
          end: {
            line: 173,
            column: 45
          }
        }],
        line: 173
      },
      "11": {
        loc: {
          start: {
            line: 178,
            column: 8
          },
          end: {
            line: 186,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 178,
            column: 8
          },
          end: {
            line: 186,
            column: 9
          }
        }, {
          start: {
            line: 184,
            column: 15
          },
          end: {
            line: 186,
            column: 9
          }
        }],
        line: 178
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
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "09b94f9dc1119cfd43c48efe21e55a74cf6656dc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_rey0juhu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_rey0juhu();

/**
 * Initialise all components
 *
 * Use the `data-module` attributes to find and initialise all of the
 * components provided as part of NHS.UK frontend.
 *
 * @overload
 * @param {Config} [config] - Config for all components (with optional scope)
 * @returns {void}
 */

/**
 * @overload
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 * @returns {void}
 */

/**
 * @param {Config | Element | Document | null} [scopeOrConfig]
 */
function initAll(scopeOrConfig = (cov_rey0juhu().b[0][0]++, {})) {
  cov_rey0juhu().f[0]++;
  const config = (cov_rey0juhu().s[0]++, index.isObject(scopeOrConfig) ? (cov_rey0juhu().b[1][0]++, scopeOrConfig) : (cov_rey0juhu().b[1][1]++, {}));

  // Extract initialisation options
  const options = (cov_rey0juhu().s[1]++, normaliseOptions.normaliseOptions(scopeOrConfig));
  cov_rey0juhu().s[2]++;
  try {
    cov_rey0juhu().s[3]++;
    // Skip initialisation when NHS.UK frontend is not supported
    if (!index.isSupported()) {
      cov_rey0juhu().b[2][0]++;
      cov_rey0juhu().s[4]++;
      throw new index$1.SupportError();
    } else {
      cov_rey0juhu().b[2][1]++;
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    cov_rey0juhu().s[5]++;
    if (options.scope === null) {
      cov_rey0juhu().b[3][0]++;
      cov_rey0juhu().s[6]++;
      throw new index$1.ElementError({
        element: options.scope,
        identifier: 'NHS.UK frontend scope element (`$scope`)'
      });
    } else {
      cov_rey0juhu().b[3][1]++;
    }
  } catch (error) {
    cov_rey0juhu().s[7]++;
    if (options.onError) {
      cov_rey0juhu().b[4][0]++;
      cov_rey0juhu().s[8]++;
      options.onError(error, {
        config
      });
    } else {
      cov_rey0juhu().b[4][1]++;
      cov_rey0juhu().s[9]++;
      console.log(error);
    }
    cov_rey0juhu().s[10]++;
    return;
  }
  const components = (/** @type {const} */cov_rey0juhu().s[11]++, [[button.Button, config.button], [characterCount.CharacterCount, config.characterCount], [checkboxes.Checkboxes, config.checkboxes], [errorSummary.ErrorSummary, config.errorSummary], [fileUpload.FileUpload, config.fileUpload], [header.Header, config.header], [notificationBanner.NotificationBanner, config.notificationBanner], [passwordInput.PasswordInput, config.passwordInput], [radios.Radios, config.radios], [skipLink.SkipLink, config.skipLink], [tabs.Tabs, config.tabs]]);
  cov_rey0juhu().s[12]++;
  components.forEach(([Component, componentConfig]) => {
    cov_rey0juhu().f[1]++;
    cov_rey0juhu().s[13]++;
    createAll(Component, componentConfig, options);
  });
}

/**
 * Create all instances of a specific component on the page
 *
 * Uses the `data-module` attribute to find all elements matching the specified
 * component on the page, creating instances of the component object for each
 * of them.
 *
 * Any component errors will be caught and logged to the console.
 *
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {CreateAllOptions<ComponentClass>} [options] - Options including scope of the document to search within and callback function if error throw by component on init
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */

/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {OnErrorCallback<ComponentClass>} [onError] - Initialisation error callback
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */

/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @overload
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 * @returns {InstanceType<ComponentClass>[]} Array of initialised components
 */

/**
 * @template {CompatibleClass | CompatibleClass<typeof ConfigurableComponent>} ComponentClass
 * @param {ComponentClass} Component - Component class to initialise
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {CreateAllOptions<ComponentClass> | OnErrorCallback<ComponentClass> | Element | Document | null} [scopeOrOptions]
 */
function createAll(Component, config, scopeOrOptions) {
  var _ref;
  cov_rey0juhu().f[2]++;
  let /** @type {NodeListOf<Element> | undefined} */$elements;

  // Extract initialisation options
  const options = (cov_rey0juhu().s[14]++, normaliseOptions.normaliseOptions(scopeOrOptions));
  cov_rey0juhu().s[15]++;
  try {
    var _options$scope;
    cov_rey0juhu().s[16]++;
    // Skip initialisation when NHS.UK frontend is not supported
    if (!index.isSupported()) {
      cov_rey0juhu().b[5][0]++;
      cov_rey0juhu().s[17]++;
      throw new index$1.SupportError();
    } else {
      cov_rey0juhu().b[5][1]++;
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    cov_rey0juhu().s[18]++;
    if (options.scope === null) {
      cov_rey0juhu().b[6][0]++;
      cov_rey0juhu().s[19]++;
      throw new index$1.ElementError({
        element: options.scope,
        component: Component,
        identifier: 'Scope element (`$scope`)'
      });
    } else {
      cov_rey0juhu().b[6][1]++;
    }
    cov_rey0juhu().s[20]++;
    $elements = (_options$scope = options.scope) == null ? void 0 : _options$scope.querySelectorAll(`[data-module="${Component.moduleName}"]`);
  } catch (error) {
    cov_rey0juhu().s[21]++;
    if (options.onError) {
      cov_rey0juhu().b[7][0]++;
      cov_rey0juhu().s[22]++;
      options.onError(error, {
        component: Component,
        config
      });
    } else {
      cov_rey0juhu().b[7][1]++;
      cov_rey0juhu().s[23]++;
      console.log(error);
    }
    cov_rey0juhu().s[24]++;
    return [];
  }
  cov_rey0juhu().s[25]++;
  return Array.from((_ref = (cov_rey0juhu().b[8][0]++, $elements)) != null ? _ref : (cov_rey0juhu().b[8][1]++, [])).map($element => {
    cov_rey0juhu().f[3]++;
    cov_rey0juhu().s[26]++;
    try {
      cov_rey0juhu().s[27]++;
      return (/** @type {InstanceType<ComponentClass>} */
        // Only pass config to components that accept it
        (cov_rey0juhu().b[10][0]++, !!config) && (cov_rey0juhu().b[10][1]++, 'defaults' in Component) ? (cov_rey0juhu().b[9][0]++, new Component($element, config)) : (cov_rey0juhu().b[9][1]++, new Component($element))
      );
    } catch (error) {
      cov_rey0juhu().s[28]++;
      if (options.onError) {
        cov_rey0juhu().b[11][0]++;
        cov_rey0juhu().s[29]++;
        options.onError(error, {
          element: $element,
          component: Component,
          config
        });
      } else {
        cov_rey0juhu().b[11][1]++;
        cov_rey0juhu().s[30]++;
        console.log(error);
      }
      cov_rey0juhu().s[31]++;
      return null;
    }
  }).filter(instance => {
    cov_rey0juhu().f[4]++;
    cov_rey0juhu().s[32]++;
    return !!instance;
  }); // Exclude components that errored
}

/**
 * NHS.UK frontend config for all components via `initAll()`
 *
 * @typedef {object} Config
 * @property {Element | Document | null} [scope] - Scope of the document to search within
 * @property {OnErrorCallback<CompatibleClass>} [onError] - Initialisation error callback
 * @property {ComponentConfig<typeof Button>} [button] - Button config
 * @property {ComponentConfig<typeof CharacterCount>} [characterCount] - Character count config
 * @property {ComponentConfig<typeof Checkboxes>} [checkboxes] - Checkboxes config
 * @property {ComponentConfig<typeof ErrorSummary>} [errorSummary] - Error Summary config
 * @property {ComponentConfig<typeof FileUpload>} [fileUpload] - File upload config
 * @property {ComponentConfig<typeof Header>} [header] - Header config
 * @property {ComponentConfig<typeof NotificationBanner>} [notificationBanner] - Notification Banner config
 * @property {ComponentConfig<typeof PasswordInput>} [passwordInput] - Password Input config
 * @property {ComponentConfig<typeof Radios>} [radios] - Radios config
 * @property {ComponentConfig<typeof SkipLink>} [skipLink] - Skip Link config
 * @property {ComponentConfig<typeof Tabs>} [tabs] - Tabs config
 */

/**
 * Component config keys, e.g. `button` and `characterCount`
 *
 * @typedef {keyof Omit<Config, 'scope' | 'onError'>} ConfigKey
 */

/**
 * Component config
 *
 * @template {CompatibleClass} ComponentClass
 * @typedef {ConstructorParameters<ComponentClass>[1]} ComponentConfig
 */

/**
 * Initialisation error context
 *
 * Contains the element, component class and configuration
 *
 * @template {CompatibleClass} ComponentClass
 * @typedef {object} ErrorContext
 * @property {Element} [element] - Element used for component module initialisation
 * @property {ComponentClass} [component] - Class of component
 * @property {Config | ComponentConfig<ComponentClass>} config - Config supplied to components
 */

/**
 * Initialisation error callback
 *
 * @template {CompatibleClass} ComponentClass
 * @callback OnErrorCallback
 * @param {unknown} error - Thrown error
 * @param {ErrorContext<ComponentClass>} context - Object containing the element, component class and configuration
 */

/**
 * Initialisation options
 *
 * @template {CompatibleClass} ComponentClass
 * @typedef {object} CreateAllOptions
 * @property {Element | Document | null} [scope] - Scope of the document to search within
 * @property {OnErrorCallback<ComponentClass>} [onError] - Initialisation error callback
 */

/**
 * @import { CompatibleClass } from './component.mjs'
 * @import { ConfigurableComponent } from './configurable-component.mjs'
 */

exports.formatErrorMessage = index.formatErrorMessage;
exports.getBreakpoint = index.getBreakpoint;
exports.isInitialised = index.isInitialised;
exports.isObject = index.isObject;
exports.isScope = index.isScope;
exports.isSupported = index.isSupported;
exports.setFocus = index.setFocus;
exports.toggleConditionalInput = index.toggleConditionalInput;
exports.ConfigError = index$1.ConfigError;
exports.ElementError = index$1.ElementError;
exports.InitError = index$1.InitError;
exports.NHSUKFrontendError = index$1.NHSUKFrontendError;
exports.SupportError = index$1.SupportError;
exports.I18n = i18n.I18n;
exports.Button = button.Button;
exports.initButtons = button.initButtons;
exports.CharacterCount = characterCount.CharacterCount;
exports.initCharacterCounts = characterCount.initCharacterCounts;
exports.Checkboxes = checkboxes.Checkboxes;
exports.initCheckboxes = checkboxes.initCheckboxes;
exports.ErrorSummary = errorSummary.ErrorSummary;
exports.initErrorSummary = errorSummary.initErrorSummary;
exports.FileUpload = fileUpload.FileUpload;
exports.initFileUploads = fileUpload.initFileUploads;
exports.Header = header.Header;
exports.initHeader = header.initHeader;
exports.NotificationBanner = notificationBanner.NotificationBanner;
exports.initNotificationBanners = notificationBanner.initNotificationBanners;
exports.PasswordInput = passwordInput.PasswordInput;
exports.initPasswordInputs = passwordInput.initPasswordInputs;
exports.Radios = radios.Radios;
exports.initRadios = radios.initRadios;
exports.SkipLink = skipLink.SkipLink;
exports.initSkipLinks = skipLink.initSkipLinks;
exports.Tabs = tabs.Tabs;
exports.initTabs = tabs.initTabs;
exports.closestAttributeValue = closestAttributeValue.closestAttributeValue;
exports.version = nhsukFrontendVersion.version;
exports.Component = component.Component;
exports.ConfigurableComponent = configurableComponent.ConfigurableComponent;
exports.createAll = createAll;
exports.initAll = initAll;
//# sourceMappingURL=index.js.map
