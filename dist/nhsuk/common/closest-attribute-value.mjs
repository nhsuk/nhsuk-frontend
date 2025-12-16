function cov_23c6eq8hk5() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/closest-attribute-value.mjs";
  var hash = "b8688d22bddabb27a72233cefcf13da109915157";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/common/closest-attribute-value.mjs",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 39
        },
        end: {
          line: 9,
          column: 77
        }
      },
      "1": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "closestAttributeValue",
        decl: {
          start: {
            line: 8,
            column: 16
          },
          end: {
            line: 8,
            column: 37
          }
        },
        loc: {
          start: {
            line: 8,
            column: 63
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 12,
            column: 10
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 11,
            column: 62
          }
        }, {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 10
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b8688d22bddabb27a72233cefcf13da109915157"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23c6eq8hk5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_23c6eq8hk5();
/**
 * Returns the value of the given attribute closest to the given element (including itself)
 *
 * @param {Element} $element - The element to start walking the DOM tree up
 * @param {string} attributeName - The name of the attribute
 * @returns {string | null} Attribute value
 */
function closestAttributeValue($element, attributeName) {
  cov_23c6eq8hk5().f[0]++;
  const $closestElementWithAttribute = (cov_23c6eq8hk5().s[0]++, $element.closest(`[${attributeName}]`));
  cov_23c6eq8hk5().s[1]++;
  return $closestElementWithAttribute ? (cov_23c6eq8hk5().b[0][0]++, $closestElementWithAttribute.getAttribute(attributeName)) : (cov_23c6eq8hk5().b[0][1]++, null);
}

export { closestAttributeValue };
//# sourceMappingURL=closest-attribute-value.mjs.map
