'use strict';

require('../../common/configuration/index.js');
var index$1 = require('../../common/index.js');
var configurableComponent = require('../../configurable-component.js');
var index = require('../../errors/index.js');
var normaliseOptions = require('../../common/configuration/normalise-options.js');

function cov_7t1393r2z() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/radios/radios.mjs";
  var hash = "5cdaaa0f671ff4ea63ecd661465dcc88f18545b3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/radios/radios.mjs",
    statementMap: {
      "0": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 24
        }
      },
      "1": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 32,
          column: 70
        }
      },
      "2": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "3": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 37,
          column: 8
        }
      },
      "4": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 26
        }
      },
      "5": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 65,
          column: 6
        }
      },
      "6": {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 75
        }
      },
      "7": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "8": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 14
        }
      },
      "9": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 57,
          column: 7
        }
      },
      "10": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 56,
          column: 10
        }
      },
      "11": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 64,
          column: 7
        }
      },
      "12": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 62,
          column: 54
        }
      },
      "13": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 63,
          column: 42
        }
      },
      "14": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 79
        }
      },
      "15": {
        start: {
          line: 70,
          column: 46
        },
        end: {
          line: 70,
          column: 78
        }
      },
      "16": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 36
        }
      },
      "17": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 76
        }
      },
      "18": {
        start: {
          line: 78,
          column: 52
        },
        end: {
          line: 78,
          column: 75
        }
      },
      "19": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "20": {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 86,
          column: 54
        }
      },
      "21": {
        start: {
          line: 99,
          column: 33
        },
        end: {
          line: 99,
          column: 44
        }
      },
      "22": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 65
        }
      },
      "23": {
        start: {
          line: 109,
          column: 26
        },
        end: {
          line: 109,
          column: 38
        }
      },
      "24": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 117,
          column: 5
        }
      },
      "25": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 116,
          column: 12
        }
      },
      "26": {
        start: {
          line: 121,
          column: 23
        },
        end: {
          line: 123,
          column: 5
        }
      },
      "27": {
        start: {
          line: 125,
          column: 30
        },
        end: {
          line: 125,
          column: 48
        }
      },
      "28": {
        start: {
          line: 126,
          column: 30
        },
        end: {
          line: 126,
          column: 48
        }
      },
      "29": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 135,
          column: 6
        }
      },
      "30": {
        start: {
          line: 129,
          column: 31
        },
        end: {
          line: 129,
          column: 64
        }
      },
      "31": {
        start: {
          line: 130,
          column: 26
        },
        end: {
          line: 130,
          column: 59
        }
      },
      "32": {
        start: {
          line: 132,
          column: 6
        },
        end: {
          line: 134,
          column: 7
        }
      },
      "33": {
        start: {
          line: 133,
          column: 8
        },
        end: {
          line: 133,
          column: 56
        }
      },
      "34": {
        start: {
          line: 141,
          column: 22
        },
        end: {
          line: 141,
          column: 36
        }
      },
      "35": {
        start: {
          line: 150,
          column: 20
        },
        end: {
          line: 152,
          column: 4
        }
      },
      "36": {
        start: {
          line: 160,
          column: 18
        },
        end: {
          line: 164,
          column: 4
        }
      },
      "37": {
        start: {
          line: 174,
          column: 28
        },
        end: {
          line: 174,
          column: 53
        }
      },
      "38": {
        start: {
          line: 176,
          column: 18
        },
        end: {
          line: 178,
          column: 3
        }
      },
      "39": {
        start: {
          line: 180,
          column: 2
        },
        end: {
          line: 182,
          column: 4
        }
      },
      "40": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 181,
          column: 30
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
            line: 79,
            column: 3
          }
        },
        line: 29
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 25
          },
          end: {
            line: 42,
            column: 26
          }
        },
        loc: {
          start: {
            line: 42,
            column: 37
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 42
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 70,
            column: 40
          },
          end: {
            line: 70,
            column: 41
          }
        },
        loc: {
          start: {
            line: 70,
            column: 46
          },
          end: {
            line: 70,
            column: 78
          }
        },
        line: 70
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 78,
            column: 41
          },
          end: {
            line: 78,
            column: 42
          }
        },
        loc: {
          start: {
            line: 78,
            column: 52
          },
          end: {
            line: 78,
            column: 75
          }
        },
        line: 78
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 84,
            column: 2
          },
          end: {
            line: 84,
            column: 3
          }
        },
        loc: {
          start: {
            line: 84,
            column: 30
          },
          end: {
            line: 88,
            column: 3
          }
        },
        line: 84
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 85,
            column: 25
          },
          end: {
            line: 85,
            column: 26
          }
        },
        loc: {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 86,
            column: 54
          }
        },
        line: 86
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        },
        loc: {
          start: {
            line: 98,
            column: 46
          },
          end: {
            line: 101,
            column: 3
          }
        },
        line: 98
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        loc: {
          start: {
            line: 108,
            column: 21
          },
          end: {
            line: 136,
            column: 3
          }
        },
        line: 108
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 128,
            column: 23
          },
          end: {
            line: 128,
            column: 24
          }
        },
        loc: {
          start: {
            line: 128,
            column: 35
          },
          end: {
            line: 135,
            column: 5
          }
        },
        line: 128
      },
      "9": {
        name: "initRadios",
        decl: {
          start: {
            line: 173,
            column: 16
          },
          end: {
            line: 173,
            column: 26
          }
        },
        loc: {
          start: {
            line: 173,
            column: 36
          },
          end: {
            line: 183,
            column: 1
          }
        },
        line: 173
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 180,
            column: 19
          },
          end: {
            line: 180,
            column: 20
          }
        },
        loc: {
          start: {
            line: 180,
            column: 30
          },
          end: {
            line: 182,
            column: 3
          }
        },
        line: 180
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 38,
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
        line: 33
      },
      "1": {
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 35
          }
        }, {
          start: {
            line: 44,
            column: 39
          },
          end: {
            line: 44,
            column: 75
          }
        }],
        line: 44
      },
      "2": {
        loc: {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 49,
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
        line: 47
      },
      "3": {
        loc: {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 57,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 57,
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
        line: 52
      },
      "4": {
        loc: {
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 64,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 64,
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
        line: 61
      },
      "5": {
        loc: {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 117,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 117,
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
        line: 112
      },
      "6": {
        loc: {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 114,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 113,
            column: 50
          }
        }, {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 36
          }
        }],
        line: 113
      },
      "7": {
        loc: {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 134,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 134,
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
        line: 132
      },
      "8": {
        loc: {
          start: {
            line: 132,
            column: 10
          },
          end: {
            line: 132,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 132,
            column: 10
          },
          end: {
            line: 132,
            column: 21
          }
        }, {
          start: {
            line: 132,
            column: 25
          },
          end: {
            line: 132,
            column: 41
          }
        }],
        line: 132
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
      "40": 0
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
      "8": 0,
      "9": 0,
      "10": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5cdaaa0f671ff4ea63ecd661465dcc88f18545b3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7t1393r2z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_7t1393r2z();

/**
 * Radios component
 *
 * Test at {@link http://localhost:3000/nhsuk-frontend/components/radios/with-conditional-content/}
 *
 * @augments {ConfigurableComponent<RadiosConfig>}
 */
class Radios extends configurableComponent.ConfigurableComponent {
  /**
   * Radios can be associated with a 'conditionally revealed' content block –
   * for example, a radio for 'Phone' could reveal an additional form field for
   * the user to enter their phone number.
   *
   * These associations are made using a `data-aria-controls` attribute, which
   * is promoted to an aria-controls attribute during initialisation.
   *
   * We also need to restore the state of any conditional reveals on the page
   * (for example if the user has navigated back), and set up event handlers to
   * keep the reveal in sync with the radio state.
   *
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<RadiosConfig>} [config] - Radios config
   */
  constructor($root, config) {
    cov_7t1393r2z().f[0]++;
    cov_7t1393r2z().s[0]++;
    super($root, config);
    const $inputs = (cov_7t1393r2z().s[1]++, this.$root.querySelectorAll('input[type="radio"]'));
    cov_7t1393r2z().s[2]++;
    if (!$inputs.length) {
      cov_7t1393r2z().b[0][0]++;
      cov_7t1393r2z().s[3]++;
      throw new index.ElementError({
        component: Radios,
        identifier: 'Form inputs (`<input type="radio">`)'
      });
    } else {
      cov_7t1393r2z().b[0][1]++;
    }
    cov_7t1393r2z().s[4]++;
    this.$inputs = $inputs;
    cov_7t1393r2z().s[5]++;
    this.$inputs.forEach($input => {
      var _ref;
      cov_7t1393r2z().f[1]++;
      const targetId = (cov_7t1393r2z().s[6]++, (_ref = (cov_7t1393r2z().b[1][0]++, $input.dataset.ariaControls)) != null ? _ref : (cov_7t1393r2z().b[1][1]++, $input.getAttribute('aria-controls')));

      // Skip radios without data-aria-controls attributes
      cov_7t1393r2z().s[7]++;
      if (!targetId) {
        cov_7t1393r2z().b[2][0]++;
        cov_7t1393r2z().s[8]++;
        return;
      } else {
        cov_7t1393r2z().b[2][1]++;
      }

      // Throw if target conditional element does not exist.
      cov_7t1393r2z().s[9]++;
      if (!document.getElementById(targetId)) {
        cov_7t1393r2z().b[3][0]++;
        cov_7t1393r2z().s[10]++;
        throw new index.ElementError({
          component: Radios,
          identifier: `Conditional reveal (\`id="${targetId}"\`)`
        });
      } else {
        cov_7t1393r2z().b[3][1]++;
      }

      // Promote the data-aria-controls attribute to an aria-controls attribute
      // so that the relationship is exposed in the AOM
      cov_7t1393r2z().s[11]++;
      if (!$input.hasAttribute('aria-controls')) {
        cov_7t1393r2z().b[4][0]++;
        cov_7t1393r2z().s[12]++;
        $input.setAttribute('aria-controls', targetId);
        cov_7t1393r2z().s[13]++;
        delete $input.dataset.ariaControls;
      } else {
        cov_7t1393r2z().b[4][1]++;
      }
    });

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    cov_7t1393r2z().s[14]++;
    window.addEventListener('pageshow', () => {
      cov_7t1393r2z().f[2]++;
      cov_7t1393r2z().s[15]++;
      return this.syncAllConditionalReveals();
    });

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so sync now too.
    cov_7t1393r2z().s[16]++;
    this.syncAllConditionalReveals();

    // Handle events
    cov_7t1393r2z().s[17]++;
    this.$root.addEventListener('click', event => {
      cov_7t1393r2z().f[3]++;
      cov_7t1393r2z().s[18]++;
      return this.handleClick(event);
    });
  }

  /**
   * Sync the conditional reveal states for all radio buttons in this component.
   */
  syncAllConditionalReveals() {
    cov_7t1393r2z().f[4]++;
    cov_7t1393r2z().s[19]++;
    this.$inputs.forEach($input => {
      cov_7t1393r2z().f[5]++;
      cov_7t1393r2z().s[20]++;
      return this.syncConditionalRevealWithInputState($input);
    });
  }

  /**
   * Sync conditional reveal with the input state
   *
   * Synchronise the visibility of the conditional reveal, and its accessible
   * state, with the input's checked state.
   *
   * @param {HTMLInputElement} $input - Radio input
   */
  syncConditionalRevealWithInputState($input) {
    cov_7t1393r2z().f[6]++;
    const {
      conditionalClass
    } = (cov_7t1393r2z().s[21]++, this.config);
    cov_7t1393r2z().s[22]++;
    index$1.toggleConditionalInput($input, `${conditionalClass}--hidden`);
  }

  /**
   * Toggle classes and attributes
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    cov_7t1393r2z().f[7]++;
    const $clickedInput = (cov_7t1393r2z().s[23]++, event.target);

    // Ignore clicks on things that aren't radio buttons
    cov_7t1393r2z().s[24]++;
    if ((cov_7t1393r2z().b[6][0]++, !($clickedInput instanceof HTMLInputElement)) || (cov_7t1393r2z().b[6][1]++, $clickedInput.type !== 'radio')) {
      cov_7t1393r2z().b[5][0]++;
      cov_7t1393r2z().s[25]++;
      return;
    } else {
      cov_7t1393r2z().b[5][1]++;
    }

    // We only need to consider radios with conditional reveals, which will have
    // aria-controls attributes.
    const $allInputs = (cov_7t1393r2z().s[26]++, document.querySelectorAll('input[type="radio"][aria-controls]'));
    const $clickedInputForm = (cov_7t1393r2z().s[27]++, $clickedInput.form);
    const $clickedInputName = (cov_7t1393r2z().s[28]++, $clickedInput.name);
    cov_7t1393r2z().s[29]++;
    $allInputs.forEach($input => {
      cov_7t1393r2z().f[8]++;
      const hasSameFormOwner = (cov_7t1393r2z().s[30]++, $input.form === $clickedInputForm);
      const hasSameName = (cov_7t1393r2z().s[31]++, $input.name === $clickedInputName);
      cov_7t1393r2z().s[32]++;
      if ((cov_7t1393r2z().b[8][0]++, hasSameName) && (cov_7t1393r2z().b[8][1]++, hasSameFormOwner)) {
        cov_7t1393r2z().b[7][0]++;
        cov_7t1393r2z().s[33]++;
        this.syncConditionalRevealWithInputState($input);
      } else {
        cov_7t1393r2z().b[7][1]++;
      }
    });
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise radios component
 *
 * @deprecated Use {@link createAll | `createAll(Radios, options)`} instead.
 * @param {InitOptions & Partial<RadiosConfig>} [options]
 */
Radios.moduleName = (cov_7t1393r2z().s[34]++, 'nhsuk-radios');
/**
 * Radios default config
 *
 * @see {@link RadiosConfig}
 * @constant
 * @type {RadiosConfig}
 */
Radios.defaults = (cov_7t1393r2z().s[35]++, Object.freeze({
  conditionalClass: 'nhsuk-radios__conditional'
}));
/**
 * Radios config schema
 *
 * @constant
 * @satisfies {Schema<RadiosConfig>}
 */
Radios.schema = (cov_7t1393r2z().s[36]++, Object.freeze({
  properties: {
    conditionalClass: {
      type: 'string'
    }
  }
}));
function initRadios(options) {
  cov_7t1393r2z().f[9]++;
  const {
    scope: $scope
  } = (cov_7t1393r2z().s[37]++, normaliseOptions.normaliseOptions(options));
  const $radios = (cov_7t1393r2z().s[38]++, $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Radios.moduleName}"]`));
  cov_7t1393r2z().s[39]++;
  $radios == null || $radios.forEach($root => {
    cov_7t1393r2z().f[10]++;
    cov_7t1393r2z().s[40]++;
    new Radios($root, options);
  });
}

/**
 * Radios config
 *
 * @typedef {object} RadiosConfig
 * @property {string} conditionalClass - Conditionally revealed content class
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

exports.Radios = Radios;
exports.initRadios = initRadios;
//# sourceMappingURL=radios.js.map
