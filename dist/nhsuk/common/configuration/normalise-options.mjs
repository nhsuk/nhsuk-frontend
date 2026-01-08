import { isObject, isScope } from '../index.mjs';

function cov_1i52p8yxdy() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/normalise-options.mjs";
  var hash = "458bcc0af04920ceec3e58a21a58b4f72bd9f027";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/configuration/normalise-options.mjs",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 56
        },
        end: {
          line: 11,
          column: 64
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "2": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 16,
          column: 34
        }
      },
      "3": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "4": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 28
        }
      },
      "5": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "6": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 31
        }
      },
      "7": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "8": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 27
        }
      },
      "9": {
        start: {
          line: 31,
          column: 9
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "10": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 17
        }
      },
      "11": {
        start: {
          line: 33,
          column: 9
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "12": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 28
        }
      },
      "13": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "normaliseOptions",
        decl: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 10,
            column: 32
          }
        },
        loc: {
          start: {
            line: 10,
            column: 49
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
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
            line: 15,
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
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 21,
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
        line: 19
      },
      "2": {
        loc: {
          start: {
            line: 19,
            column: 8
          },
          end: {
            line: 19,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 19,
            column: 8
          },
          end: {
            line: 19,
            column: 30
          }
        }, {
          start: {
            line: 19,
            column: 34
          },
          end: {
            line: 19,
            column: 56
          }
        }],
        line: 19
      },
      "3": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 26,
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
        line: 24
      },
      "4": {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        }, {
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 35,
            column: 3
          }
        }],
        line: 29
      },
      "5": {
        loc: {
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 35,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 35,
            column: 3
          }
        }, {
          start: {
            line: 33,
            column: 9
          },
          end: {
            line: 35,
            column: 3
          }
        }],
        line: 31
      },
      "6": {
        loc: {
          start: {
            line: 33,
            column: 9
          },
          end: {
            line: 35,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 9
          },
          end: {
            line: 35,
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
        line: 33
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
      "13": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "458bcc0af04920ceec3e58a21a58b4f72bd9f027"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1i52p8yxdy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1i52p8yxdy();

/**
 * Normalise options passed to `initAll` or `createAll`
 *
 * @template {CompatibleClass} ComponentClass
 * @param {Config | CreateAllOptions<ComponentClass> | OnErrorCallback<ComponentClass> | Element | Document | null} [scopeOrOptions] - Scope of the document to search within, initialisation options or error callback function
 * @returns {CreateAllOptions<ComponentClass>} Normalised options
 */
function normaliseOptions(scopeOrOptions) {
  cov_1i52p8yxdy().f[0]++;
  let /** @type {Element | Document | null} */$scope = (cov_1i52p8yxdy().s[0]++, document);
  let /** @type {OnErrorCallback<ComponentClass> | undefined} */onError;

  // Handle options object
  cov_1i52p8yxdy().s[1]++;
  if (isObject(scopeOrOptions)) {
    cov_1i52p8yxdy().b[0][0]++;
    const options = (cov_1i52p8yxdy().s[2]++, scopeOrOptions);

    // Scope must be valid or null
    cov_1i52p8yxdy().s[3]++;
    if ((cov_1i52p8yxdy().b[2][0]++, isScope(options.scope)) || (cov_1i52p8yxdy().b[2][1]++, options.scope === null)) {
      cov_1i52p8yxdy().b[1][0]++;
      cov_1i52p8yxdy().s[4]++;
      $scope = options.scope;
    } else {
      cov_1i52p8yxdy().b[1][1]++;
    }

    // Error handler must be a function
    cov_1i52p8yxdy().s[5]++;
    if (typeof options.onError === 'function') {
      cov_1i52p8yxdy().b[3][0]++;
      cov_1i52p8yxdy().s[6]++;
      onError = options.onError;
    } else {
      cov_1i52p8yxdy().b[3][1]++;
    }
  } else {
    cov_1i52p8yxdy().b[0][1]++;
  }
  cov_1i52p8yxdy().s[7]++;
  if (isScope(scopeOrOptions)) {
    cov_1i52p8yxdy().b[4][0]++;
    cov_1i52p8yxdy().s[8]++;
    $scope = scopeOrOptions;
  } else {
    cov_1i52p8yxdy().b[4][1]++;
    cov_1i52p8yxdy().s[9]++;
    if (scopeOrOptions === null) {
      cov_1i52p8yxdy().b[5][0]++;
      cov_1i52p8yxdy().s[10]++;
      $scope = null;
    } else {
      cov_1i52p8yxdy().b[5][1]++;
      cov_1i52p8yxdy().s[11]++;
      if (typeof scopeOrOptions === 'function') {
        cov_1i52p8yxdy().b[6][0]++;
        cov_1i52p8yxdy().s[12]++;
        onError = scopeOrOptions;
      } else {
        cov_1i52p8yxdy().b[6][1]++;
      }
    }
  }
  cov_1i52p8yxdy().s[13]++;
  return {
    scope: $scope,
    onError
  };
}

/**
 * @import { CompatibleClass } from '../../component.mjs'
 * @import { Config, CreateAllOptions, OnErrorCallback } from '../../index.mjs'
 */

export { normaliseOptions };
//# sourceMappingURL=normalise-options.mjs.map
