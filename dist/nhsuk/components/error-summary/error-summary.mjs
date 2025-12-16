import '../../common/configuration/index.mjs';
import { setFocus, formatErrorMessage } from '../../common/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

function cov_1b81jhrftd() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/error-summary/error-summary.mjs";
  var hash = "349e5466caa51d28a8bc61d00875f96056853fb5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/error-summary/error-summary.mjs",
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
          line: 23,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "2": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 26
        }
      },
      "3": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 76
        }
      },
      "4": {
        start: {
          line: 27,
          column: 52
        },
        end: {
          line: 27,
          column: 75
        }
      },
      "5": {
        start: {
          line: 37,
          column: 70
        },
        end: {
          line: 37,
          column: 72
        }
      },
      "6": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 48,
          column: 5
        }
      },
      "7": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 45,
          column: 7
        }
      },
      "8": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 69
        }
      },
      "9": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 26
        }
      },
      "10": {
        start: {
          line: 69,
          column: 22
        },
        end: {
          line: 69,
          column: 48
        }
      },
      "11": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 105,
          column: 5
        }
      },
      "12": {
        start: {
          line: 72,
          column: 23
        },
        end: {
          line: 72,
          column: 63
        }
      },
      "13": {
        start: {
          line: 74,
          column: 6
        },
        end: {
          line: 104,
          column: 7
        }
      },
      "14": {
        start: {
          line: 75,
          column: 33
        },
        end: {
          line: 75,
          column: 44
        }
      },
      "15": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 84,
          column: 9
        }
      },
      "16": {
        start: {
          line: 83,
          column: 10
        },
        end: {
          line: 83,
          column: 33
        }
      },
      "17": {
        start: {
          line: 92,
          column: 26
        },
        end: {
          line: 92,
          column: 70
        }
      },
      "18": {
        start: {
          line: 93,
          column: 26
        },
        end: {
          line: 93,
          column: 56
        }
      },
      "19": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 103,
          column: 9
        }
      },
      "20": {
        start: {
          line: 98,
          column: 30
        },
        end: {
          line: 98,
          column: 62
        }
      },
      "21": {
        start: {
          line: 100,
          column: 10
        },
        end: {
          line: 102,
          column: 11
        }
      },
      "22": {
        start: {
          line: 101,
          column: 12
        },
        end: {
          line: 101,
          column: 35
        }
      },
      "23": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 110,
          column: 5
        }
      },
      "24": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 135,
          column: 5
        }
      },
      "25": {
        start: {
          line: 134,
          column: 6
        },
        end: {
          line: 134,
          column: 18
        }
      },
      "26": {
        start: {
          line: 137,
          column: 20
        },
        end: {
          line: 137,
          column: 49
        }
      },
      "27": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 140,
          column: 5
        }
      },
      "28": {
        start: {
          line: 139,
          column: 6
        },
        end: {
          line: 139,
          column: 18
        }
      },
      "29": {
        start: {
          line: 142,
          column: 19
        },
        end: {
          line: 142,
          column: 51
        }
      },
      "30": {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 145,
          column: 5
        }
      },
      "31": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 144,
          column: 18
        }
      },
      "32": {
        start: {
          line: 147,
          column: 27
        },
        end: {
          line: 147,
          column: 66
        }
      },
      "33": {
        start: {
          line: 148,
          column: 4
        },
        end: {
          line: 150,
          column: 5
        }
      },
      "34": {
        start: {
          line: 149,
          column: 6
        },
        end: {
          line: 149,
          column: 18
        }
      },
      "35": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 155,
          column: 35
        }
      },
      "36": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 156,
          column: 41
        }
      },
      "37": {
        start: {
          line: 158,
          column: 4
        },
        end: {
          line: 158,
          column: 15
        }
      },
      "38": {
        start: {
          line: 167,
          column: 20
        },
        end: {
          line: 167,
          column: 32
        }
      },
      "39": {
        start: {
          line: 168,
          column: 4
        },
        end: {
          line: 170,
          column: 5
        }
      },
      "40": {
        start: {
          line: 169,
          column: 6
        },
        end: {
          line: 169,
          column: 28
        }
      },
      "41": {
        start: {
          line: 176,
          column: 22
        },
        end: {
          line: 176,
          column: 43
        }
      },
      "42": {
        start: {
          line: 185,
          column: 20
        },
        end: {
          line: 187,
          column: 4
        }
      },
      "43": {
        start: {
          line: 195,
          column: 18
        },
        end: {
          line: 200,
          column: 4
        }
      },
      "44": {
        start: {
          line: 210,
          column: 28
        },
        end: {
          line: 210,
          column: 53
        }
      },
      "45": {
        start: {
          line: 212,
          column: 16
        },
        end: {
          line: 214,
          column: 3
        }
      },
      "46": {
        start: {
          line: 216,
          column: 2
        },
        end: {
          line: 218,
          column: 3
        }
      },
      "47": {
        start: {
          line: 217,
          column: 4
        },
        end: {
          line: 217,
          column: 10
        }
      },
      "48": {
        start: {
          line: 220,
          column: 2
        },
        end: {
          line: 220,
          column: 34
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
            line: 28,
            column: 3
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 41
          },
          end: {
            line: 27,
            column: 42
          }
        },
        loc: {
          start: {
            line: 27,
            column: 52
          },
          end: {
            line: 27,
            column: 75
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 36,
            column: 33
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 36
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 37
          },
          end: {
            line: 111,
            column: 3
          }
        },
        line: 68
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 131,
            column: 2
          },
          end: {
            line: 131,
            column: 3
          }
        },
        loc: {
          start: {
            line: 131,
            column: 23
          },
          end: {
            line: 159,
            column: 3
          }
        },
        line: 131
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 166,
            column: 2
          },
          end: {
            line: 166,
            column: 3
          }
        },
        loc: {
          start: {
            line: 166,
            column: 21
          },
          end: {
            line: 171,
            column: 3
          }
        },
        line: 166
      },
      "6": {
        name: "initErrorSummary",
        decl: {
          start: {
            line: 209,
            column: 16
          },
          end: {
            line: 209,
            column: 32
          }
        },
        loc: {
          start: {
            line: 209,
            column: 42
          },
          end: {
            line: 221,
            column: 1
          }
        },
        line: 209
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
            line: 23,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 25,
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
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 39,
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
            line: 39,
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
        line: 39
      },
      "3": {
        loc: {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 105,
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
        line: 71
      },
      "4": {
        loc: {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 104,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 104,
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
        line: 74
      },
      "5": {
        loc: {
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 84,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 8
          },
          end: {
            line: 84,
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
        line: 79
      },
      "6": {
        loc: {
          start: {
            line: 80,
            column: 10
          },
          end: {
            line: 81,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 80,
            column: 10
          },
          end: {
            line: 80,
            column: 44
          }
        }, {
          start: {
            line: 81,
            column: 11
          },
          end: {
            line: 81,
            column: 37
          }
        }, {
          start: {
            line: 81,
            column: 41
          },
          end: {
            line: 81,
            column: 64
          }
        }],
        line: 80
      },
      "7": {
        loc: {
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 103,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 103,
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
        line: 97
      },
      "8": {
        loc: {
          start: {
            line: 97,
            column: 12
          },
          end: {
            line: 97,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 97,
            column: 12
          },
          end: {
            line: 97,
            column: 28
          }
        }, {
          start: {
            line: 97,
            column: 32
          },
          end: {
            line: 97,
            column: 50
          }
        }],
        line: 97
      },
      "9": {
        loc: {
          start: {
            line: 100,
            column: 10
          },
          end: {
            line: 102,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 100,
            column: 10
          },
          end: {
            line: 102,
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
        line: 100
      },
      "10": {
        loc: {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 109,
            column: 29
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 73
          }
        }, {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 109,
            column: 29
          }
        }],
        line: 108
      },
      "11": {
        loc: {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 135,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 135,
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
        line: 133
      },
      "12": {
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
      "13": {
        loc: {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 145,
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
        line: 143
      },
      "14": {
        loc: {
          start: {
            line: 148,
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
            line: 148,
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
        line: 148
      },
      "15": {
        loc: {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 170,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 170,
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
        line: 168
      },
      "16": {
        loc: {
          start: {
            line: 168,
            column: 8
          },
          end: {
            line: 168,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 168,
            column: 8
          },
          end: {
            line: 168,
            column: 15
          }
        }, {
          start: {
            line: 168,
            column: 19
          },
          end: {
            line: 168,
            column: 44
          }
        }],
        line: 168
      },
      "17": {
        loc: {
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 218,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 218,
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
        line: 216
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
      "48": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "349e5466caa51d28a8bc61d00875f96056853fb5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1b81jhrftd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1b81jhrftd();

/**
 * Error summary component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v2.13.0/src/components/error-summary/error-summary.js
 *
 * @augments {ConfigurableComponent<ErrorSummaryConfig>}
 */
class ErrorSummary extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<ErrorSummaryConfig>} [config] - Error summary config
   */
  constructor($root, config = (cov_1b81jhrftd().b[0][0]++, {})) {
    cov_1b81jhrftd().f[0]++;
    cov_1b81jhrftd().s[0]++;
    super($root, config);

    /**
     * Focus the error summary
     */
    cov_1b81jhrftd().s[1]++;
    if (!this.config.disableAutoFocus) {
      cov_1b81jhrftd().b[1][0]++;
      cov_1b81jhrftd().s[2]++;
      setFocus(this.$root);
    } else {
      cov_1b81jhrftd().b[1][1]++;
    }
    cov_1b81jhrftd().s[3]++;
    this.$root.addEventListener('click', event => {
      cov_1b81jhrftd().f[1]++;
      cov_1b81jhrftd().s[4]++;
      return this.handleClick(event);
    });
  }

  /**
   * Error summary config override
   *
   * @param {Partial<ErrorSummaryConfig>} _datasetConfig - Config specified by dataset
   * @returns {Partial<ErrorSummaryConfig>} Config to override by dataset
   */
  configOverride(_datasetConfig) {
    cov_1b81jhrftd().f[2]++;
    let configOverrides = (/** @type {Partial<ErrorSummaryConfig>} */cov_1b81jhrftd().s[5]++, {});
    cov_1b81jhrftd().s[6]++;
    if ('focusOnPageLoad' in this.config) {
      cov_1b81jhrftd().b[2][0]++;
      cov_1b81jhrftd().s[7]++;
      console.warn(formatErrorMessage(ErrorSummary, 'Option `focusOnPageLoad` is deprecated. Use `disableAutoFocus` instead.'));
      cov_1b81jhrftd().s[8]++;
      configOverrides.disableAutoFocus = !this.config.focusOnPageLoad;
    } else {
      cov_1b81jhrftd().b[2][1]++;
    }
    cov_1b81jhrftd().s[9]++;
    return configOverrides;
  }

  /**
   * Get associated legend or label
   *
   * Returns the first element that exists from this list:
   *
   * - The `<legend>` associated with the closest `<fieldset>` ancestor, as long
   *   as the top of it is no more than half a viewport height away from the
   *   bottom of the input
   * - The first `<label>` that is associated with the input using for="inputId"
   * - The closest parent `<label>`
   *
   * @param {Element} $input - The input
   * @returns {Element | null} Associated legend or label, or null if no
   *   associated legend or label can be found
   */
  getAssociatedLegendOrLabel($input) {
    var _ref;
    cov_1b81jhrftd().f[3]++;
    const $fieldset = (cov_1b81jhrftd().s[10]++, $input.closest('fieldset'));
    cov_1b81jhrftd().s[11]++;
    if ($fieldset) {
      cov_1b81jhrftd().b[3][0]++;
      const $legends = (cov_1b81jhrftd().s[12]++, $fieldset.getElementsByTagName('legend'));
      cov_1b81jhrftd().s[13]++;
      if ($legends.length) {
        cov_1b81jhrftd().b[4][0]++;
        const $candidateLegend = (cov_1b81jhrftd().s[14]++, $legends[0]);

        // If the input type is radio or checkbox, always use the legend if
        // there is one.
        cov_1b81jhrftd().s[15]++;
        if ((cov_1b81jhrftd().b[6][0]++, $input instanceof HTMLInputElement) && ((cov_1b81jhrftd().b[6][1]++, $input.type === 'checkbox') || (cov_1b81jhrftd().b[6][2]++, $input.type === 'radio'))) {
          cov_1b81jhrftd().b[5][0]++;
          cov_1b81jhrftd().s[16]++;
          return $candidateLegend;
        } else {
          cov_1b81jhrftd().b[5][1]++;
        }

        // For other input types, only scroll to the fieldset’s legend (instead
        // of the label associated with the input) if the input would end up in
        // the top half of the screen.
        //
        // This should avoid situations where the input either ends up off the
        // screen, or obscured by a software keyboard.
        const legendTop = (cov_1b81jhrftd().s[17]++, $candidateLegend.getBoundingClientRect().top);
        const inputRect = (cov_1b81jhrftd().s[18]++, $input.getBoundingClientRect());

        // If the browser doesn't support Element.getBoundingClientRect().height
        // or window.innerHeight (like IE8), bail and just link to the label.
        cov_1b81jhrftd().s[19]++;
        if ((cov_1b81jhrftd().b[8][0]++, inputRect.height) && (cov_1b81jhrftd().b[8][1]++, window.innerHeight)) {
          cov_1b81jhrftd().b[7][0]++;
          const inputBottom = (cov_1b81jhrftd().s[20]++, inputRect.top + inputRect.height);
          cov_1b81jhrftd().s[21]++;
          if (inputBottom - legendTop < window.innerHeight / 2) {
            cov_1b81jhrftd().b[9][0]++;
            cov_1b81jhrftd().s[22]++;
            return $candidateLegend;
          } else {
            cov_1b81jhrftd().b[9][1]++;
          }
        } else {
          cov_1b81jhrftd().b[7][1]++;
        }
      } else {
        cov_1b81jhrftd().b[4][1]++;
      }
    } else {
      cov_1b81jhrftd().b[3][1]++;
    }
    cov_1b81jhrftd().s[23]++;
    return (_ref = (cov_1b81jhrftd().b[10][0]++, document.querySelector(`label[for='${$input.getAttribute('id')}']`))) != null ? _ref : (cov_1b81jhrftd().b[10][1]++, $input.closest('label'));
  }

  /**
   * Focus the target element
   *
   * By default, the browser will scroll the target into view. Because our
   * labels or legends appear above the input, this means the user will be
   * presented with an input without any context, as the label or legend will be
   * off the top of the screen.
   *
   * Manually handling the click event, scrolling the question into view and
   * then focussing the element solves this.
   *
   * This also results in the label and/or legend being announced correctly in
   * NVDA (as tested in 2018.3.2) - without this only the field type is
   * announced (e.g. "Edit, has autocomplete").
   *
   * @param {EventTarget} $target - Event target
   * @returns {boolean} True if the target was able to be focussed
   */
  focusTarget($target) {
    cov_1b81jhrftd().f[4]++;
    cov_1b81jhrftd().s[24]++;
    // If the element that was clicked was not a link, return early
    if (!($target instanceof HTMLAnchorElement)) {
      cov_1b81jhrftd().b[11][0]++;
      cov_1b81jhrftd().s[25]++;
      return false;
    } else {
      cov_1b81jhrftd().b[11][1]++;
    }
    const inputId = (cov_1b81jhrftd().s[26]++, $target.hash.replace('#', ''));
    cov_1b81jhrftd().s[27]++;
    if (!inputId) {
      cov_1b81jhrftd().b[12][0]++;
      cov_1b81jhrftd().s[28]++;
      return false;
    } else {
      cov_1b81jhrftd().b[12][1]++;
    }
    const $input = (cov_1b81jhrftd().s[29]++, document.getElementById(inputId));
    cov_1b81jhrftd().s[30]++;
    if (!$input) {
      cov_1b81jhrftd().b[13][0]++;
      cov_1b81jhrftd().s[31]++;
      return false;
    } else {
      cov_1b81jhrftd().b[13][1]++;
    }
    const $legendOrLabel = (cov_1b81jhrftd().s[32]++, this.getAssociatedLegendOrLabel($input));
    cov_1b81jhrftd().s[33]++;
    if (!$legendOrLabel) {
      cov_1b81jhrftd().b[14][0]++;
      cov_1b81jhrftd().s[34]++;
      return false;
    } else {
      cov_1b81jhrftd().b[14][1]++;
    }

    // Scroll the legend or label into view *before* calling focus on the input
    // to avoid extra scrolling in browsers that don't support `preventScroll`
    // (which at time of writing is most of them...)
    cov_1b81jhrftd().s[35]++;
    $legendOrLabel.scrollIntoView();
    cov_1b81jhrftd().s[36]++;
    $input.focus({
      preventScroll: true
    });
    cov_1b81jhrftd().s[37]++;
    return true;
  }

  /**
   * Click event handler
   *
   * @param {MouseEvent} event - Click event
   */
  handleClick(event) {
    cov_1b81jhrftd().f[5]++;
    const $target = (cov_1b81jhrftd().s[38]++, event.target);
    cov_1b81jhrftd().s[39]++;
    if ((cov_1b81jhrftd().b[16][0]++, $target) && (cov_1b81jhrftd().b[16][1]++, this.focusTarget($target))) {
      cov_1b81jhrftd().b[15][0]++;
      cov_1b81jhrftd().s[40]++;
      event.preventDefault();
    } else {
      cov_1b81jhrftd().b[15][1]++;
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise error summary component
 *
 * @deprecated Use {@link createAll | `createAll(ErrorSummary, options)`} instead.
 * @param {InitOptions & Partial<ErrorSummaryConfig>} [options]
 */
ErrorSummary.moduleName = (cov_1b81jhrftd().s[41]++, 'nhsuk-error-summary');
/**
 * Error summary default config
 *
 * @see {@link ErrorSummaryConfig}
 * @constant
 * @type {ErrorSummaryConfig}
 */
ErrorSummary.defaults = (cov_1b81jhrftd().s[42]++, Object.freeze({
  disableAutoFocus: false
}));
/**
 * Error summary config schema
 *
 * @constant
 * @satisfies {Schema<ErrorSummaryConfig>}
 */
ErrorSummary.schema = (cov_1b81jhrftd().s[43]++, Object.freeze({
  properties: {
    focusOnPageLoad: {
      type: 'boolean'
    },
    // Deprecated
    disableAutoFocus: {
      type: 'boolean'
    }
  }
}));
function initErrorSummary(options) {
  cov_1b81jhrftd().f[6]++;
  const {
    scope: $scope
  } = (cov_1b81jhrftd().s[44]++, normaliseOptions(options));
  const $root = (cov_1b81jhrftd().s[45]++, $scope == null ? void 0 : $scope.querySelector(`[data-module="${ErrorSummary.moduleName}"]`));
  cov_1b81jhrftd().s[46]++;
  if (!$root) {
    cov_1b81jhrftd().b[17][0]++;
    cov_1b81jhrftd().s[47]++;
    return;
  } else {
    cov_1b81jhrftd().b[17][1]++;
  }
  cov_1b81jhrftd().s[48]++;
  new ErrorSummary($root, options);
}

/**
 * Error summary config
 *
 * @see {@link ErrorSummary.defaults}
 * @typedef {object} ErrorSummaryConfig
 * @property {boolean} [focusOnPageLoad=true] - Deprecated. Use `disableAutoFocus` instead.
 * @property {boolean} [disableAutoFocus=false] - If set to `true` the error
 *   summary will not be focussed when the page loads.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

export { ErrorSummary, initErrorSummary };
//# sourceMappingURL=error-summary.mjs.map
