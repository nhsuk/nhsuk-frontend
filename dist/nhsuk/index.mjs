import './common/configuration/index.mjs';
import { isObject, isSupported } from './common/index.mjs';
export { formatErrorMessage, getBreakpoint, isInitialised, isScope, setFocus, toggleConditionalInput } from './common/index.mjs';
import './components/index.mjs';
import { SupportError, ElementError } from './errors/index.mjs';
export { ConfigError, InitError, NHSUKFrontendError } from './errors/index.mjs';
export { I18n } from './i18n.mjs';
import { normaliseOptions } from './common/configuration/normalise-options.mjs';
import { Button } from './components/button/button.mjs';
export { initButtons } from './components/button/button.mjs';
import { CharacterCount } from './components/character-count/character-count.mjs';
export { initCharacterCounts } from './components/character-count/character-count.mjs';
import { Checkboxes } from './components/checkboxes/checkboxes.mjs';
export { initCheckboxes } from './components/checkboxes/checkboxes.mjs';
import { ErrorSummary } from './components/error-summary/error-summary.mjs';
export { initErrorSummary } from './components/error-summary/error-summary.mjs';
import { Header } from './components/header/header.mjs';
export { initHeader } from './components/header/header.mjs';
import { NotificationBanner } from './components/notification-banner/notification-banner.mjs';
export { initNotificationBanners } from './components/notification-banner/notification-banner.mjs';
import { PasswordInput } from './components/password-input/password-input.mjs';
export { initPasswordInputs } from './components/password-input/password-input.mjs';
import { Radios } from './components/radios/radios.mjs';
export { initRadios } from './components/radios/radios.mjs';
import { SkipLink } from './components/skip-link/skip-link.mjs';
export { initSkipLinks } from './components/skip-link/skip-link.mjs';
import { Tabs } from './components/tabs/tabs.mjs';
export { initTabs } from './components/tabs/tabs.mjs';
export { closestAttributeValue } from './common/closest-attribute-value.mjs';
export { version } from './common/nhsuk-frontend-version.mjs';
export { Component } from './component.mjs';
export { ConfigurableComponent } from './configurable-component.mjs';

function cov_2cga0bt4s7() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/index.mjs";
  var hash = "e32473176471f8e091682efbb553cb7688f786a0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/index.mjs",
    statementMap: {
      "0": {
        start: {
          line: 38,
          column: 17
        },
        end: {
          line: 38,
          column: 61
        }
      },
      "1": {
        start: {
          line: 41,
          column: 18
        },
        end: {
          line: 41,
          column: 49
        }
      },
      "2": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 67,
          column: 3
        }
      },
      "3": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 47,
          column: 5
        }
      },
      "4": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 30
        }
      },
      "5": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "6": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 55,
          column: 8
        }
      },
      "7": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 64,
          column: 5
        }
      },
      "8": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 61,
          column: 8
        }
      },
      "9": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 63,
          column: 24
        }
      },
      "10": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 10
        }
      },
      "11": {
        start: {
          line: 69,
          column: 43
        },
        end: {
          line: 80,
          column: 3
        }
      },
      "12": {
        start: {
          line: 82,
          column: 2
        },
        end: {
          line: 84,
          column: 4
        }
      },
      "13": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 50
        }
      },
      "14": {
        start: {
          line: 132,
          column: 18
        },
        end: {
          line: 132,
          column: 50
        }
      },
      "15": {
        start: {
          line: 134,
          column: 2
        },
        end: {
          line: 164,
          column: 3
        }
      },
      "16": {
        start: {
          line: 136,
          column: 4
        },
        end: {
          line: 138,
          column: 5
        }
      },
      "17": {
        start: {
          line: 137,
          column: 6
        },
        end: {
          line: 137,
          column: 30
        }
      },
      "18": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 148,
          column: 5
        }
      },
      "19": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 147,
          column: 8
        }
      },
      "20": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 152,
          column: 5
        }
      },
      "21": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 161,
          column: 5
        }
      },
      "22": {
        start: {
          line: 155,
          column: 6
        },
        end: {
          line: 158,
          column: 8
        }
      },
      "23": {
        start: {
          line: 160,
          column: 6
        },
        end: {
          line: 160,
          column: 24
        }
      },
      "24": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 163,
          column: 13
        }
      },
      "25": {
        start: {
          line: 166,
          column: 2
        },
        end: {
          line: 189,
          column: 37
        }
      },
      "26": {
        start: {
          line: 168,
          column: 6
        },
        end: {
          line: 187,
          column: 7
        }
      },
      "27": {
        start: {
          line: 169,
          column: 8
        },
        end: {
          line: 174,
          column: 9
        }
      },
      "28": {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 184,
          column: 9
        }
      },
      "29": {
        start: {
          line: 177,
          column: 10
        },
        end: {
          line: 181,
          column: 12
        }
      },
      "30": {
        start: {
          line: 183,
          column: 10
        },
        end: {
          line: 183,
          column: 28
        }
      },
      "31": {
        start: {
          line: 186,
          column: 8
        },
        end: {
          line: 186,
          column: 19
        }
      },
      "32": {
        start: {
          line: 189,
          column: 26
        },
        end: {
          line: 189,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "initAll",
        decl: {
          start: {
            line: 37,
            column: 16
          },
          end: {
            line: 37,
            column: 23
          }
        },
        loc: {
          start: {
            line: 37,
            column: 44
          },
          end: {
            line: 85,
            column: 1
          }
        },
        line: 37
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 82,
            column: 21
          },
          end: {
            line: 82,
            column: 22
          }
        },
        loc: {
          start: {
            line: 82,
            column: 55
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 82
      },
      "2": {
        name: "createAll",
        decl: {
          start: {
            line: 128,
            column: 16
          },
          end: {
            line: 128,
            column: 25
          }
        },
        loc: {
          start: {
            line: 128,
            column: 61
          },
          end: {
            line: 190,
            column: 1
          }
        },
        line: 128
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 167,
            column: 9
          },
          end: {
            line: 167,
            column: 10
          }
        },
        loc: {
          start: {
            line: 167,
            column: 23
          },
          end: {
            line: 188,
            column: 5
          }
        },
        line: 167
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 189,
            column: 12
          },
          end: {
            line: 189,
            column: 13
          }
        },
        loc: {
          start: {
            line: 189,
            column: 26
          },
          end: {
            line: 189,
            column: 36
          }
        },
        line: 189
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 37,
            column: 24
          },
          end: {
            line: 37,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 37,
            column: 40
          },
          end: {
            line: 37,
            column: 42
          }
        }],
        line: 37
      },
      "1": {
        loc: {
          start: {
            line: 38,
            column: 17
          },
          end: {
            line: 38,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 38,
            column: 43
          },
          end: {
            line: 38,
            column: 56
          }
        }, {
          start: {
            line: 38,
            column: 59
          },
          end: {
            line: 38,
            column: 61
          }
        }],
        line: 38
      },
      "2": {
        loc: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 47,
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
        line: 45
      },
      "3": {
        loc: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 56,
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
        line: 51
      },
      "4": {
        loc: {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        }, {
          start: {
            line: 62,
            column: 11
          },
          end: {
            line: 64,
            column: 5
          }
        }],
        line: 58
      },
      "5": {
        loc: {
          start: {
            line: 136,
            column: 4
          },
          end: {
            line: 138,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 136,
            column: 4
          },
          end: {
            line: 138,
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
        line: 136
      },
      "6": {
        loc: {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 148,
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
        line: 142
      },
      "7": {
        loc: {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        }, {
          start: {
            line: 159,
            column: 11
          },
          end: {
            line: 161,
            column: 5
          }
        }],
        line: 154
      },
      "8": {
        loc: {
          start: {
            line: 166,
            column: 20
          },
          end: {
            line: 166,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 166,
            column: 20
          },
          end: {
            line: 166,
            column: 29
          }
        }, {
          start: {
            line: 166,
            column: 33
          },
          end: {
            line: 166,
            column: 35
          }
        }],
        line: 166
      },
      "9": {
        loc: {
          start: {
            line: 171,
            column: 10
          },
          end: {
            line: 173,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 172,
            column: 14
          },
          end: {
            line: 172,
            column: 45
          }
        }, {
          start: {
            line: 173,
            column: 14
          },
          end: {
            line: 173,
            column: 37
          }
        }],
        line: 171
      },
      "10": {
        loc: {
          start: {
            line: 171,
            column: 10
          },
          end: {
            line: 171,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 171,
            column: 10
          },
          end: {
            line: 171,
            column: 18
          }
        }, {
          start: {
            line: 171,
            column: 22
          },
          end: {
            line: 171,
            column: 45
          }
        }],
        line: 171
      },
      "11": {
        loc: {
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 184,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 184,
            column: 9
          }
        }, {
          start: {
            line: 182,
            column: 15
          },
          end: {
            line: 184,
            column: 9
          }
        }],
        line: 176
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
    hash: "e32473176471f8e091682efbb553cb7688f786a0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2cga0bt4s7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2cga0bt4s7();

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
function initAll(scopeOrConfig = (cov_2cga0bt4s7().b[0][0]++, {})) {
  cov_2cga0bt4s7().f[0]++;
  const config = (cov_2cga0bt4s7().s[0]++, isObject(scopeOrConfig) ? (cov_2cga0bt4s7().b[1][0]++, scopeOrConfig) : (cov_2cga0bt4s7().b[1][1]++, {}));

  // Extract initialisation options
  const options = (cov_2cga0bt4s7().s[1]++, normaliseOptions(scopeOrConfig));
  cov_2cga0bt4s7().s[2]++;
  try {
    cov_2cga0bt4s7().s[3]++;
    // Skip initialisation when NHS.UK frontend is not supported
    if (!isSupported()) {
      cov_2cga0bt4s7().b[2][0]++;
      cov_2cga0bt4s7().s[4]++;
      throw new SupportError();
    } else {
      cov_2cga0bt4s7().b[2][1]++;
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    cov_2cga0bt4s7().s[5]++;
    if (options.scope === null) {
      cov_2cga0bt4s7().b[3][0]++;
      cov_2cga0bt4s7().s[6]++;
      throw new ElementError({
        element: options.scope,
        identifier: 'NHS.UK frontend scope element (`$scope`)'
      });
    } else {
      cov_2cga0bt4s7().b[3][1]++;
    }
  } catch (error) {
    cov_2cga0bt4s7().s[7]++;
    if (options.onError) {
      cov_2cga0bt4s7().b[4][0]++;
      cov_2cga0bt4s7().s[8]++;
      options.onError(error, {
        config
      });
    } else {
      cov_2cga0bt4s7().b[4][1]++;
      cov_2cga0bt4s7().s[9]++;
      console.log(error);
    }
    cov_2cga0bt4s7().s[10]++;
    return;
  }
  const components = (/** @type {const} */cov_2cga0bt4s7().s[11]++, [[Button, config.button], [CharacterCount, config.characterCount], [Checkboxes, config.checkboxes], [ErrorSummary, config.errorSummary], [Header, config.header], [NotificationBanner, config.notificationBanner], [PasswordInput, config.passwordInput], [Radios, config.radios], [SkipLink, config.skipLink], [Tabs, config.tabs]]);
  cov_2cga0bt4s7().s[12]++;
  components.forEach(([Component, componentConfig]) => {
    cov_2cga0bt4s7().f[1]++;
    cov_2cga0bt4s7().s[13]++;
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
  cov_2cga0bt4s7().f[2]++;
  let /** @type {NodeListOf<Element> | undefined} */$elements;

  // Extract initialisation options
  const options = (cov_2cga0bt4s7().s[14]++, normaliseOptions(scopeOrOptions));
  cov_2cga0bt4s7().s[15]++;
  try {
    var _options$scope;
    cov_2cga0bt4s7().s[16]++;
    // Skip initialisation when NHS.UK frontend is not supported
    if (!isSupported()) {
      cov_2cga0bt4s7().b[5][0]++;
      cov_2cga0bt4s7().s[17]++;
      throw new SupportError();
    } else {
      cov_2cga0bt4s7().b[5][1]++;
    }

    // Users can initialise NHS.UK frontend in certain sections of the page
    // unless the scope is null (for example, query selector not found)
    cov_2cga0bt4s7().s[18]++;
    if (options.scope === null) {
      cov_2cga0bt4s7().b[6][0]++;
      cov_2cga0bt4s7().s[19]++;
      throw new ElementError({
        element: options.scope,
        component: Component,
        identifier: 'Scope element (`$scope`)'
      });
    } else {
      cov_2cga0bt4s7().b[6][1]++;
    }
    cov_2cga0bt4s7().s[20]++;
    $elements = (_options$scope = options.scope) == null ? void 0 : _options$scope.querySelectorAll(`[data-module="${Component.moduleName}"]`);
  } catch (error) {
    cov_2cga0bt4s7().s[21]++;
    if (options.onError) {
      cov_2cga0bt4s7().b[7][0]++;
      cov_2cga0bt4s7().s[22]++;
      options.onError(error, {
        component: Component,
        config
      });
    } else {
      cov_2cga0bt4s7().b[7][1]++;
      cov_2cga0bt4s7().s[23]++;
      console.log(error);
    }
    cov_2cga0bt4s7().s[24]++;
    return [];
  }
  cov_2cga0bt4s7().s[25]++;
  return Array.from((_ref = (cov_2cga0bt4s7().b[8][0]++, $elements)) != null ? _ref : (cov_2cga0bt4s7().b[8][1]++, [])).map($element => {
    cov_2cga0bt4s7().f[3]++;
    cov_2cga0bt4s7().s[26]++;
    try {
      cov_2cga0bt4s7().s[27]++;
      return (/** @type {InstanceType<ComponentClass>} */
        // Only pass config to components that accept it
        (cov_2cga0bt4s7().b[10][0]++, !!config) && (cov_2cga0bt4s7().b[10][1]++, 'defaults' in Component) ? (cov_2cga0bt4s7().b[9][0]++, new Component($element, config)) : (cov_2cga0bt4s7().b[9][1]++, new Component($element))
      );
    } catch (error) {
      cov_2cga0bt4s7().s[28]++;
      if (options.onError) {
        cov_2cga0bt4s7().b[11][0]++;
        cov_2cga0bt4s7().s[29]++;
        options.onError(error, {
          element: $element,
          component: Component,
          config
        });
      } else {
        cov_2cga0bt4s7().b[11][1]++;
        cov_2cga0bt4s7().s[30]++;
        console.log(error);
      }
      cov_2cga0bt4s7().s[31]++;
      return null;
    }
  }).filter(instance => {
    cov_2cga0bt4s7().f[4]++;
    cov_2cga0bt4s7().s[32]++;
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

export { Button, CharacterCount, Checkboxes, ElementError, ErrorSummary, Header, NotificationBanner, PasswordInput, Radios, SkipLink, SupportError, Tabs, createAll, initAll, isObject, isSupported };
//# sourceMappingURL=index.mjs.map
