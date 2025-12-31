import { closestAttributeValue } from '../../common/closest-attribute-value.mjs';
import '../../common/configuration/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { ElementError } from '../../errors/index.mjs';
import { I18n } from '../../i18n.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

function cov_1mp2sfhwpu() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/password-input/password-input.mjs";
  var hash = "eaf7aef51e48328653ccbc2dbf693f851409dbd1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/password-input/password-input.mjs",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 24
        }
      },
      "1": {
        start: {
          line: 20,
          column: 19
        },
        end: {
          line: 20,
          column: 77
        }
      },
      "2": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "3": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 27,
          column: 8
        }
      },
      "4": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 37,
          column: 5
        }
      },
      "5": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 36,
          column: 8
        }
      },
      "6": {
        start: {
          line: 39,
          column: 28
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "7": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 49,
          column: 5
        }
      },
      "8": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 48,
          column: 8
        }
      },
      "9": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 58,
          column: 5
        }
      },
      "10": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 57,
          column: 8
        }
      },
      "11": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 24
        }
      },
      "12": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 42
        }
      },
      "13": {
        start: {
          line: 63,
          column: 53
        },
        end: {
          line: 63,
          column: 64
        }
      },
      "14": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 68,
          column: 6
        }
      },
      "15": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 50
        }
      },
      "16": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 67
        }
      },
      "17": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 71
        }
      },
      "18": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 82,
          column: 5
        }
      },
      "19": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "20": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 74
        }
      },
      "21": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 95,
          column: 5
        }
      },
      "22": {
        start: {
          line: 94,
          column: 6
        },
        end: {
          line: 94,
          column: 68
        }
      },
      "23": {
        start: {
          line: 94,
          column: 56
        },
        end: {
          line: 94,
          column: 67
        }
      },
      "24": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 102,
          column: 6
        }
      },
      "25": {
        start: {
          line: 99,
          column: 6
        },
        end: {
          line: 101,
          column: 7
        }
      },
      "26": {
        start: {
          line: 100,
          column: 8
        },
        end: {
          line: 100,
          column: 19
        }
      },
      "27": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 15
        }
      },
      "28": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 26
        }
      },
      "29": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 120,
          column: 5
        }
      },
      "30": {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 118,
          column: 17
        }
      },
      "31": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 12
        }
      },
      "32": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 124,
          column: 15
        }
      },
      "33": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 24
        }
      },
      "34": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 138,
          column: 28
        }
      },
      "35": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 149,
          column: 5
        }
      },
      "36": {
        start: {
          line: 148,
          column: 6
        },
        end: {
          line: 148,
          column: 12
        }
      },
      "37": {
        start: {
          line: 152,
          column: 4
        },
        end: {
          line: 152,
          column: 42
        }
      },
      "38": {
        start: {
          line: 154,
          column: 21
        },
        end: {
          line: 154,
          column: 40
        }
      },
      "39": {
        start: {
          line: 155,
          column: 25
        },
        end: {
          line: 155,
          column: 51
        }
      },
      "40": {
        start: {
          line: 156,
          column: 25
        },
        end: {
          line: 156,
          column: 70
        }
      },
      "41": {
        start: {
          line: 159,
          column: 4
        },
        end: {
          line: 159,
          column: 75
        }
      },
      "42": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 165,
          column: 5
        }
      },
      "43": {
        start: {
          line: 168,
          column: 4
        },
        end: {
          line: 170,
          column: 5
        }
      },
      "44": {
        start: {
          line: 176,
          column: 22
        },
        end: {
          line: 176,
          column: 44
        }
      },
      "45": {
        start: {
          line: 185,
          column: 20
        },
        end: {
          line: 195,
          column: 4
        }
      },
      "46": {
        start: {
          line: 203,
          column: 18
        },
        end: {
          line: 208,
          column: 4
        }
      },
      "47": {
        start: {
          line: 218,
          column: 28
        },
        end: {
          line: 218,
          column: 53
        }
      },
      "48": {
        start: {
          line: 220,
          column: 26
        },
        end: {
          line: 222,
          column: 3
        }
      },
      "49": {
        start: {
          line: 224,
          column: 2
        },
        end: {
          line: 226,
          column: 4
        }
      },
      "50": {
        start: {
          line: 225,
          column: 4
        },
        end: {
          line: 225,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 34
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 94,
            column: 50
          },
          end: {
            line: 94,
            column: 51
          }
        },
        loc: {
          start: {
            line: 94,
            column: 56
          },
          end: {
            line: 94,
            column: 67
          }
        },
        line: 94
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 98,
            column: 40
          },
          end: {
            line: 98,
            column: 41
          }
        },
        loc: {
          start: {
            line: 98,
            column: 51
          },
          end: {
            line: 102,
            column: 5
          }
        },
        line: 98
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 113,
            column: 3
          }
        },
        loc: {
          start: {
            line: 113,
            column: 16
          },
          end: {
            line: 125,
            column: 3
          }
        },
        line: 113
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 130,
            column: 3
          }
        },
        loc: {
          start: {
            line: 130,
            column: 9
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 130
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 137,
            column: 2
          },
          end: {
            line: 137,
            column: 3
          }
        },
        loc: {
          start: {
            line: 137,
            column: 9
          },
          end: {
            line: 139,
            column: 3
          }
        },
        line: 137
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 146,
            column: 2
          },
          end: {
            line: 146,
            column: 3
          }
        },
        loc: {
          start: {
            line: 146,
            column: 16
          },
          end: {
            line: 171,
            column: 3
          }
        },
        line: 146
      },
      "7": {
        name: "initPasswordInputs",
        decl: {
          start: {
            line: 217,
            column: 16
          },
          end: {
            line: 217,
            column: 34
          }
        },
        loc: {
          start: {
            line: 217,
            column: 44
          },
          end: {
            line: 227,
            column: 1
          }
        },
        line: 217
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 224,
            column: 27
          },
          end: {
            line: 224,
            column: 28
          }
        },
        loc: {
          start: {
            line: 224,
            column: 38
          },
          end: {
            line: 226,
            column: 3
          }
        },
        line: 224
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 21
          },
          end: {
            line: 17,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 32
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 28,
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
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 37,
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
        line: 30
      },
      "3": {
        loc: {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 49,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 49,
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
        line: 42
      },
      "4": {
        loc: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 58,
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
            line: 58,
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
      "5": {
        loc: {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 95,
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
        line: 93
      },
      "6": {
        loc: {
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 101,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 101,
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
        line: 99
      },
      "7": {
        loc: {
          start: {
            line: 99,
            column: 10
          },
          end: {
            line: 99,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 99,
            column: 10
          },
          end: {
            line: 99,
            column: 25
          }
        }, {
          start: {
            line: 99,
            column: 29
          },
          end: {
            line: 99,
            column: 60
          }
        }],
        line: 99
      },
      "8": {
        loc: {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 120,
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
        line: 117
      },
      "9": {
        loc: {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 149,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 149,
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
        line: 147
      },
      "10": {
        loc: {
          start: {
            line: 155,
            column: 25
          },
          end: {
            line: 155,
            column: 51
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 155,
            column: 36
          },
          end: {
            line: 155,
            column: 42
          }
        }, {
          start: {
            line: 155,
            column: 45
          },
          end: {
            line: 155,
            column: 51
          }
        }],
        line: 155
      },
      "11": {
        loc: {
          start: {
            line: 156,
            column: 25
          },
          end: {
            line: 156,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 156,
            column: 36
          },
          end: {
            line: 156,
            column: 52
          }
        }, {
          start: {
            line: 156,
            column: 55
          },
          end: {
            line: 156,
            column: 70
          }
        }],
        line: 156
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
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0
    },
    f: {
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
    hash: "eaf7aef51e48328653ccbc2dbf693f851409dbd1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1mp2sfhwpu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1mp2sfhwpu();

/**
 * Password input component
 *
 * @augments {ConfigurableComponent<PasswordInputConfig>}
 */
class PasswordInput extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<PasswordInputConfig>} [config] - Password input config
   */
  constructor($root, config = (cov_1mp2sfhwpu().b[0][0]++, {})) {
    cov_1mp2sfhwpu().f[0]++;
    cov_1mp2sfhwpu().s[0]++;
    super($root, config);
    const $input = (cov_1mp2sfhwpu().s[1]++, this.$root.querySelector('.nhsuk-js-password-input-input'));
    cov_1mp2sfhwpu().s[2]++;
    if (!($input instanceof HTMLInputElement)) {
      cov_1mp2sfhwpu().b[1][0]++;
      cov_1mp2sfhwpu().s[3]++;
      throw new ElementError({
        component: PasswordInput,
        element: $input,
        expectedType: 'HTMLInputElement',
        identifier: 'Form field (`.nhsuk-js-password-input-input`)'
      });
    } else {
      cov_1mp2sfhwpu().b[1][1]++;
    }
    cov_1mp2sfhwpu().s[4]++;
    if ($input.type !== 'password') {
      cov_1mp2sfhwpu().b[2][0]++;
      cov_1mp2sfhwpu().s[5]++;
      throw new ElementError({
        component: PasswordInput,
        element: $input,
        expectedType: 'HTMLInputElement with attribute (`type="password"`)',
        identifier: 'Form field (`.nhsuk-js-password-input-input`)'
      });
    } else {
      cov_1mp2sfhwpu().b[2][1]++;
    }
    const $showHideButton = (cov_1mp2sfhwpu().s[6]++, this.$root.querySelector('.nhsuk-js-password-input-toggle'));
    cov_1mp2sfhwpu().s[7]++;
    if (!($showHideButton instanceof HTMLButtonElement)) {
      cov_1mp2sfhwpu().b[3][0]++;
      cov_1mp2sfhwpu().s[8]++;
      throw new ElementError({
        component: PasswordInput,
        element: $showHideButton,
        expectedType: 'HTMLButtonElement',
        identifier: 'Button (`.nhsuk-js-password-input-toggle`)'
      });
    } else {
      cov_1mp2sfhwpu().b[3][1]++;
    }
    cov_1mp2sfhwpu().s[9]++;
    if ($showHideButton.type !== 'button') {
      cov_1mp2sfhwpu().b[4][0]++;
      cov_1mp2sfhwpu().s[10]++;
      throw new ElementError({
        component: PasswordInput,
        element: $showHideButton,
        expectedType: 'HTMLButtonElement with type="button"',
        identifier: 'Button (`.nhsuk-js-password-input-toggle`)'
      });
    } else {
      cov_1mp2sfhwpu().b[4][1]++;
    }
    cov_1mp2sfhwpu().s[11]++;
    this.$input = $input;
    cov_1mp2sfhwpu().s[12]++;
    this.$showHideButton = $showHideButton;
    const {
      i18n,
      screenReaderStatusMessageClass
    } = (cov_1mp2sfhwpu().s[13]++, this.config);
    cov_1mp2sfhwpu().s[14]++;
    this.i18n = new I18n(i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    });

    // Show the toggle button element
    cov_1mp2sfhwpu().s[15]++;
    this.$showHideButton.removeAttribute('hidden');

    // Create and append the status text for screen readers.
    // This is injected between the input and button so that users get a sensible reading order if
    // moving through the page content linearly:
    // [password input] -> [your password is visible/hidden] -> [show/hide password]
    cov_1mp2sfhwpu().s[16]++;
    this.$screenReaderStatusMessage = document.createElement('div');
    cov_1mp2sfhwpu().s[17]++;
    this.$screenReaderStatusMessage.setAttribute('aria-live', 'polite');
    cov_1mp2sfhwpu().s[18]++;
    this.$screenReaderStatusMessage.classList.add(screenReaderStatusMessageClass, 'nhsuk-u-visually-hidden');
    cov_1mp2sfhwpu().s[19]++;
    this.$input.insertAdjacentElement('afterend', this.$screenReaderStatusMessage);

    // Bind toggle button
    cov_1mp2sfhwpu().s[20]++;
    this.$showHideButton.addEventListener('click', this.toggle.bind(this));

    // Bind event to revert the password visibility to hidden
    cov_1mp2sfhwpu().s[21]++;
    if (this.$input.form) {
      cov_1mp2sfhwpu().b[5][0]++;
      cov_1mp2sfhwpu().s[22]++;
      this.$input.form.addEventListener('submit', () => {
        cov_1mp2sfhwpu().f[1]++;
        cov_1mp2sfhwpu().s[23]++;
        return this.hide();
      });
    } else {
      cov_1mp2sfhwpu().b[5][1]++;
    }

    // If the page is restored from bfcache and the password is visible, hide it again
    cov_1mp2sfhwpu().s[24]++;
    window.addEventListener('pageshow', event => {
      cov_1mp2sfhwpu().f[2]++;
      cov_1mp2sfhwpu().s[25]++;
      if ((cov_1mp2sfhwpu().b[7][0]++, event.persisted) && (cov_1mp2sfhwpu().b[7][1]++, this.$input.type !== 'password')) {
        cov_1mp2sfhwpu().b[6][0]++;
        cov_1mp2sfhwpu().s[26]++;
        this.hide();
      } else {
        cov_1mp2sfhwpu().b[6][1]++;
      }
    });

    // Default the component to having the password hidden.
    cov_1mp2sfhwpu().s[27]++;
    this.hide();
  }

  /**
   * Toggle the visibility of the password input
   *
   * @param {MouseEvent} event - Click event
   */
  toggle(event) {
    cov_1mp2sfhwpu().f[3]++;
    cov_1mp2sfhwpu().s[28]++;
    event.preventDefault();

    // If on this click, the field is type="password", show the value
    cov_1mp2sfhwpu().s[29]++;
    if (this.$input.type === 'password') {
      cov_1mp2sfhwpu().b[8][0]++;
      cov_1mp2sfhwpu().s[30]++;
      this.show();
      cov_1mp2sfhwpu().s[31]++;
      return;
    } else {
      cov_1mp2sfhwpu().b[8][1]++;
    }

    // Otherwise, hide it
    // Being defensive - hiding should always be the default
    cov_1mp2sfhwpu().s[32]++;
    this.hide();
  }

  /**
   * Show the password input value in plain text
   */
  show() {
    cov_1mp2sfhwpu().f[4]++;
    cov_1mp2sfhwpu().s[33]++;
    this.setType('text');
  }

  /**
   * Hide the password input value
   */
  hide() {
    cov_1mp2sfhwpu().f[5]++;
    cov_1mp2sfhwpu().s[34]++;
    this.setType('password');
  }

  /**
   * Set the password input type
   *
   * @param {'text' | 'password'} type - Input type
   */
  setType(type) {
    cov_1mp2sfhwpu().f[6]++;
    cov_1mp2sfhwpu().s[35]++;
    if (type === this.$input.type) {
      cov_1mp2sfhwpu().b[9][0]++;
      cov_1mp2sfhwpu().s[36]++;
      return;
    } else {
      cov_1mp2sfhwpu().b[9][1]++;
    }

    // Update input type
    cov_1mp2sfhwpu().s[37]++;
    this.$input.setAttribute('type', type);
    const isHidden = (cov_1mp2sfhwpu().s[38]++, type === 'password');
    const prefixButton = (cov_1mp2sfhwpu().s[39]++, isHidden ? (cov_1mp2sfhwpu().b[10][0]++, 'show') : (cov_1mp2sfhwpu().b[10][1]++, 'hide'));
    const prefixStatus = (cov_1mp2sfhwpu().s[40]++, isHidden ? (cov_1mp2sfhwpu().b[11][0]++, 'passwordHidden') : (cov_1mp2sfhwpu().b[11][1]++, 'passwordShown'));

    // Update button text
    cov_1mp2sfhwpu().s[41]++;
    this.$showHideButton.innerText = this.i18n.t(`${prefixButton}Password`);

    // Update button aria-label
    cov_1mp2sfhwpu().s[42]++;
    this.$showHideButton.setAttribute('aria-label', this.i18n.t(`${prefixButton}PasswordAriaLabel`));

    // Update status change text
    cov_1mp2sfhwpu().s[43]++;
    this.$screenReaderStatusMessage.innerText = this.i18n.t(`${prefixStatus}Announcement`);
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise password input component
 *
 * @deprecated Use {@link createAll | `createAll(PasswordInput, options)`} instead.
 * @param {InitOptions & Partial<PasswordInputConfig>} [options]
 */
PasswordInput.moduleName = (cov_1mp2sfhwpu().s[44]++, 'nhsuk-password-input');
/**
 * Password input default config
 *
 * @see {@link PasswordInputConfig}
 * @constant
 * @type {PasswordInputConfig}
 */
PasswordInput.defaults = (cov_1mp2sfhwpu().s[45]++, Object.freeze({
  screenReaderStatusMessageClass: 'nhsuk-password-input__sr-status',
  i18n: {
    showPassword: 'Show',
    hidePassword: 'Hide',
    showPasswordAriaLabel: 'Show password',
    hidePasswordAriaLabel: 'Hide password',
    passwordShownAnnouncement: 'Your password is visible',
    passwordHiddenAnnouncement: 'Your password is hidden'
  }
}));
/**
 * Password input config schema
 *
 * @constant
 * @satisfies {Schema<PasswordInputConfig>}
 */
PasswordInput.schema = (cov_1mp2sfhwpu().s[46]++, Object.freeze({
  properties: {
    screenReaderStatusMessageClass: {
      type: 'string'
    },
    i18n: {
      type: 'object'
    }
  }
}));
function initPasswordInputs(options) {
  cov_1mp2sfhwpu().f[7]++;
  const {
    scope: $scope
  } = (cov_1mp2sfhwpu().s[47]++, normaliseOptions(options));
  const $passwordInputs = (cov_1mp2sfhwpu().s[48]++, $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${PasswordInput.moduleName}"]`));
  cov_1mp2sfhwpu().s[49]++;
  $passwordInputs == null || $passwordInputs.forEach($root => {
    cov_1mp2sfhwpu().f[8]++;
    cov_1mp2sfhwpu().s[50]++;
    new PasswordInput($root, options);
  });
}

/**
 * Password input config
 *
 * @typedef {object} PasswordInputConfig
 * @property {string} screenReaderStatusMessageClass - Screen reader status message class
 * @property {PasswordInputTranslations} [i18n=PasswordInput.defaults.i18n] - Password input translations
 */

/**
 * Password input translations
 *
 * @see {@link PasswordInput.defaults.i18n}
 * @typedef {object} PasswordInputTranslations
 *
 * Messages displayed to the user indicating the state of the show/hide toggle.
 * @property {string} [showPassword] - Visible text of the button when the
 *   password is currently hidden. Plain text only.
 * @property {string} [hidePassword] - Visible text of the button when the
 *   password is currently visible. Plain text only.
 * @property {string} [showPasswordAriaLabel] - aria-label of the button when
 *   the password is currently hidden. Plain text only.
 * @property {string} [hidePasswordAriaLabel] - aria-label of the button when
 *   the password is currently visible. Plain text only.
 * @property {string} [passwordShownAnnouncement] - Screen reader
 *   announcement to make when the password has just become visible.
 *   Plain text only.
 * @property {string} [passwordHiddenAnnouncement] - Screen reader
 *   announcement to make when the password has just been hidden.
 *   Plain text only.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

export { PasswordInput, initPasswordInputs };
//# sourceMappingURL=password-input.mjs.map
