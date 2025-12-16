'use strict';

require('../../common/configuration/index.js');
var index$1 = require('../../common/index.js');
var configurableComponent = require('../../configurable-component.js');
var index = require('../../errors/index.js');
var normaliseOptions = require('../../common/configuration/normalise-options.js');

function cov_1b4qsl8m1k() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/skip-link/skip-link.mjs";
  var hash = "90a06de6010cfb36274eb5e4b0a88de23ebd601b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/skip-link/skip-link.mjs",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 9,
          column: 10
        }
      },
      "1": {
        start: {
          line: 20,
          column: 23
        },
        end: {
          line: 20,
          column: 46
        }
      },
      "2": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 24
        }
      },
      "3": {
        start: {
          line: 29,
          column: 17
        },
        end: {
          line: 29,
          column: 32
        }
      },
      "4": {
        start: {
          line: 30,
          column: 17
        },
        end: {
          line: 30,
          column: 54
        }
      },
      "5": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "6": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 12
        }
      },
      "7": {
        start: {
          line: 40,
          column: 28
        },
        end: {
          line: 40,
          column: 49
        }
      },
      "8": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 48,
          column: 5
        }
      },
      "9": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 47,
          column: 8
        }
      },
      "10": {
        start: {
          line: 50,
          column: 27
        },
        end: {
          line: 50,
          column: 67
        }
      },
      "11": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 59,
          column: 5
        }
      },
      "12": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 58,
          column: 8
        }
      },
      "13": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 78,
          column: 6
        }
      },
      "14": {
        start: {
          line: 68,
          column: 38
        },
        end: {
          line: 68,
          column: 49
        }
      },
      "15": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 77,
          column: 8
        }
      },
      "16": {
        start: {
          line: 72,
          column: 10
        },
        end: {
          line: 72,
          column: 59
        }
      },
      "17": {
        start: {
          line: 75,
          column: 10
        },
        end: {
          line: 75,
          column: 62
        }
      },
      "18": {
        start: {
          line: 84,
          column: 22
        },
        end: {
          line: 84,
          column: 39
        }
      },
      "19": {
        start: {
          line: 93,
          column: 20
        },
        end: {
          line: 95,
          column: 4
        }
      },
      "20": {
        start: {
          line: 103,
          column: 18
        },
        end: {
          line: 107,
          column: 4
        }
      },
      "21": {
        start: {
          line: 117,
          column: 28
        },
        end: {
          line: 117,
          column: 53
        }
      },
      "22": {
        start: {
          line: 119,
          column: 21
        },
        end: {
          line: 121,
          column: 3
        }
      },
      "23": {
        start: {
          line: 123,
          column: 2
        },
        end: {
          line: 125,
          column: 4
        }
      },
      "24": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 124,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 29
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 67,
            column: 41
          },
          end: {
            line: 67,
            column: 42
          }
        },
        loc: {
          start: {
            line: 67,
            column: 47
          },
          end: {
            line: 78,
            column: 5
          }
        },
        line: 67
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 71,
            column: 8
          },
          end: {
            line: 71,
            column: 9
          }
        },
        loc: {
          start: {
            line: 71,
            column: 24
          },
          end: {
            line: 73,
            column: 9
          }
        },
        line: 71
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 74,
            column: 8
          },
          end: {
            line: 74,
            column: 9
          }
        },
        loc: {
          start: {
            line: 74,
            column: 17
          },
          end: {
            line: 76,
            column: 9
          }
        },
        line: 74
      },
      "4": {
        name: "initSkipLinks",
        decl: {
          start: {
            line: 116,
            column: 16
          },
          end: {
            line: 116,
            column: 29
          }
        },
        loc: {
          start: {
            line: 116,
            column: 39
          },
          end: {
            line: 126,
            column: 1
          }
        },
        line: 116
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 123,
            column: 22
          },
          end: {
            line: 123,
            column: 23
          }
        },
        loc: {
          start: {
            line: 123,
            column: 33
          },
          end: {
            line: 125,
            column: 3
          }
        },
        line: 123
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 9,
            column: 10
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 8,
            column: 16
          }
        }, {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 9,
            column: 10
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 17
          },
          end: {
            line: 30,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 30,
            column: 17
          },
          end: {
            line: 30,
            column: 48
          }
        }, {
          start: {
            line: 30,
            column: 52
          },
          end: {
            line: 30,
            column: 54
          }
        }],
        line: 30
      },
      "2": {
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
      "3": {
        loc: {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 35,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 50
          }
        }, {
          start: {
            line: 35,
            column: 6
          },
          end: {
            line: 35,
            column: 54
          }
        }],
        line: 34
      },
      "4": {
        loc: {
          start: {
            line: 43,
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
            line: 43,
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
        line: 43
      },
      "5": {
        loc: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 59,
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
        line: 53
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
      "24": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "90a06de6010cfb36274eb5e4b0a88de23ebd601b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1b4qsl8m1k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1b4qsl8m1k();
const _self = (cov_1b4qsl8m1k().s[0]++, typeof globalThis !== 'undefined' ? (cov_1b4qsl8m1k().b[0][0]++, globalThis // Modern browsers, Node.js
) : (cov_1b4qsl8m1k().b[0][1]++, self)); // Old browsers, web workers

/**
 * Skip link component
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when selected so the next focusable element is not at the jumped to area.
 *
 * @augments {ConfigurableComponent<SkipLinkConfig, HTMLAnchorElement>}
 */
class SkipLink extends configurableComponent.ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<SkipLinkConfig>} [config] - Skip link config
   */
  constructor($root, config) {
    var _ref;
    cov_1b4qsl8m1k().f[0]++;
    cov_1b4qsl8m1k().s[2]++;
    super($root, config);
    const hash = (cov_1b4qsl8m1k().s[3]++, this.$root.hash);
    const href = (cov_1b4qsl8m1k().s[4]++, (_ref = (cov_1b4qsl8m1k().b[1][0]++, this.$root.getAttribute('href'))) != null ? _ref : (cov_1b4qsl8m1k().b[1][1]++, ''));

    // Return early for external URLs or links to other pages
    cov_1b4qsl8m1k().s[5]++;
    if ((cov_1b4qsl8m1k().b[3][0]++, this.$root.origin !== window.location.origin) || (cov_1b4qsl8m1k().b[3][1]++, this.$root.pathname !== window.location.pathname)) {
      cov_1b4qsl8m1k().b[2][0]++;
      cov_1b4qsl8m1k().s[6]++;
      return;
    } else {
      cov_1b4qsl8m1k().b[2][1]++;
    }
    const linkedElementId = (cov_1b4qsl8m1k().s[7]++, hash.replace('#', ''));

    // Check link path matching current page
    cov_1b4qsl8m1k().s[8]++;
    if (!linkedElementId) {
      cov_1b4qsl8m1k().b[4][0]++;
      cov_1b4qsl8m1k().s[9]++;
      throw new index.ElementError({
        component: SkipLink,
        identifier: `Target link (\`href="${href}"\`) hash fragment`
      });
    } else {
      cov_1b4qsl8m1k().b[4][1]++;
    }
    const $linkedElement = (cov_1b4qsl8m1k().s[10]++, document.getElementById(linkedElementId));

    // Check for linked element
    cov_1b4qsl8m1k().s[11]++;
    if (!$linkedElement) {
      cov_1b4qsl8m1k().b[5][0]++;
      cov_1b4qsl8m1k().s[12]++;
      throw new index.ElementError({
        component: SkipLink,
        element: $linkedElement,
        identifier: `Target content (\`id="${linkedElementId}"\`)`
      });
    } else {
      cov_1b4qsl8m1k().b[5][1]++;
    }

    /**
     * Focus the linked element on click
     *
     * Adds a helper CSS class to hide native focus styles,
     * but removes it on blur to restore native focus styles
     */
    cov_1b4qsl8m1k().s[13]++;
    this.$root.addEventListener('click', () => {
      cov_1b4qsl8m1k().f[1]++;
      const {
        focusedElementClass
      } = (cov_1b4qsl8m1k().s[14]++, this.config);
      cov_1b4qsl8m1k().s[15]++;
      index$1.setFocus($linkedElement, {
        onBeforeFocus() {
          cov_1b4qsl8m1k().f[2]++;
          cov_1b4qsl8m1k().s[16]++;
          $linkedElement.classList.add(focusedElementClass);
        },
        onBlur() {
          cov_1b4qsl8m1k().f[3]++;
          cov_1b4qsl8m1k().s[17]++;
          $linkedElement.classList.remove(focusedElementClass);
        }
      });
    });
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise skip link component
 *
 * @deprecated Use {@link createAll | `createAll(SkipLink, options)`} instead.
 * @param {InitOptions & Partial<SkipLinkConfig>} [options]
 */
SkipLink.elementType = (cov_1b4qsl8m1k().s[1]++, _self.HTMLAnchorElement);
SkipLink.moduleName = (cov_1b4qsl8m1k().s[18]++, 'nhsuk-skip-link');
/**
 * Skip link default config
 *
 * @see {@link SkipLinkConfig}
 * @constant
 * @type {SkipLinkConfig}
 */
SkipLink.defaults = (cov_1b4qsl8m1k().s[19]++, Object.freeze({
  focusedElementClass: 'nhsuk-skip-link-focused-element'
}));
/**
 * Skip link config schema
 *
 * @constant
 * @satisfies {Schema<SkipLinkConfig>}
 */
SkipLink.schema = (cov_1b4qsl8m1k().s[20]++, Object.freeze({
  properties: {
    focusedElementClass: {
      type: 'string'
    }
  }
}));
function initSkipLinks(options) {
  cov_1b4qsl8m1k().f[4]++;
  const {
    scope: $scope
  } = (cov_1b4qsl8m1k().s[21]++, normaliseOptions.normaliseOptions(options));
  const $skipLinks = (cov_1b4qsl8m1k().s[22]++, $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${SkipLink.moduleName}"]`));
  cov_1b4qsl8m1k().s[23]++;
  $skipLinks == null || $skipLinks.forEach($root => {
    cov_1b4qsl8m1k().f[5]++;
    cov_1b4qsl8m1k().s[24]++;
    new SkipLink($root, options);
  });
}

/**
 * Skip link config
 *
 * @typedef {object} SkipLinkConfig
 * @property {string} focusedElementClass - Focused element class
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

exports.SkipLink = SkipLink;
exports.initSkipLinks = initSkipLinks;
//# sourceMappingURL=skip-link.js.map
