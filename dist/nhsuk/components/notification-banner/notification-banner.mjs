import '../../common/configuration/index.mjs';
import { setFocus } from '../../common/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

function cov_2onjimspp0() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/notification-banner/notification-banner.mjs";
  var hash = "82db14a8b5afdf133f4ec8c33ce76f2a3fcf7c2b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/notification-banner/notification-banner.mjs",
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
          line: 31,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "2": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 26
        }
      },
      "3": {
        start: {
          line: 42,
          column: 22
        },
        end: {
          line: 42,
          column: 49
        }
      },
      "4": {
        start: {
          line: 51,
          column: 20
        },
        end: {
          line: 53,
          column: 4
        }
      },
      "5": {
        start: {
          line: 61,
          column: 18
        },
        end: {
          line: 65,
          column: 4
        }
      },
      "6": {
        start: {
          line: 75,
          column: 28
        },
        end: {
          line: 75,
          column: 53
        }
      },
      "7": {
        start: {
          line: 77,
          column: 31
        },
        end: {
          line: 79,
          column: 3
        }
      },
      "8": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 83,
          column: 4
        }
      },
      "9": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 56
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
            line: 37,
            column: 3
          }
        },
        line: 17
      },
      "1": {
        name: "initNotificationBanners",
        decl: {
          start: {
            line: 74,
            column: 16
          },
          end: {
            line: 74,
            column: 39
          }
        },
        loc: {
          start: {
            line: 74,
            column: 49
          },
          end: {
            line: 84,
            column: 1
          }
        },
        line: 74
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 81,
            column: 32
          },
          end: {
            line: 81,
            column: 33
          }
        },
        loc: {
          start: {
            line: 81,
            column: 57
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 81
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
            line: 31,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 36,
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
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 33,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 49
          }
        }, {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 35
          }
        }],
        line: 32
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "82db14a8b5afdf133f4ec8c33ce76f2a3fcf7c2b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2onjimspp0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2onjimspp0();

/**
 * Notification banner component
 *
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v5.10.2/packages/govuk-frontend/src/govuk/components/notification-banner/notification-banner.mjs
 *
 * @augments {ConfigurableComponent<NotificationBannerConfig>}
 */
class NotificationBanner extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<NotificationBannerConfig>} [config] - Notification banner config
   */
  constructor($root, config = (cov_2onjimspp0().b[0][0]++, {})) {
    cov_2onjimspp0().f[0]++;
    cov_2onjimspp0().s[0]++;
    super($root, config);

    /**
     * Focus the notification banner
     *
     * If `role="alert"` is set, focus the element to help some assistive
     * technologies prioritise announcing it.
     *
     * You can turn off the auto-focus functionality by setting
     * `data-disable-auto-focus="true"` in the component HTML. You might wish to
     * do this based on user research findings, or to avoid a clash with another
     * element which should be focused when the page loads.
     */
    cov_2onjimspp0().s[1]++;
    if ((cov_2onjimspp0().b[2][0]++, this.$root.getAttribute('role') === 'alert') && (cov_2onjimspp0().b[2][1]++, !this.config.disableAutoFocus)) {
      cov_2onjimspp0().b[1][0]++;
      cov_2onjimspp0().s[2]++;
      setFocus(this.$root);
    } else {
      cov_2onjimspp0().b[1][1]++;
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes.
   */
}

/**
 * Initialise notification banner component
 *
 * @deprecated Use {@link createAll | `createAll(NotificationBanner, options)`} instead.
 * @param {InitOptions & Partial<NotificationBannerConfig>} [options]
 */
NotificationBanner.moduleName = (cov_2onjimspp0().s[3]++, 'nhsuk-notification-banner');
/**
 * Notification banner default config
 *
 * @see {@link NotificationBannerConfig}
 * @constant
 * @type {NotificationBannerConfig}
 */
NotificationBanner.defaults = (cov_2onjimspp0().s[4]++, Object.freeze({
  disableAutoFocus: false
}));
/**
 * Notification banner config schema
 *
 * @constant
 * @satisfies {Schema<NotificationBannerConfig>}
 */
NotificationBanner.schema = (cov_2onjimspp0().s[5]++, Object.freeze({
  properties: {
    disableAutoFocus: {
      type: 'boolean'
    }
  }
}));
function initNotificationBanners(options) {
  cov_2onjimspp0().f[1]++;
  const {
    scope: $scope
  } = (cov_2onjimspp0().s[6]++, normaliseOptions(options));
  const $notificationBanners = (cov_2onjimspp0().s[7]++, $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${NotificationBanner.moduleName}"]`));
  cov_2onjimspp0().s[8]++;
  $notificationBanners == null || $notificationBanners.forEach($notificationBanner => {
    cov_2onjimspp0().f[2]++;
    cov_2onjimspp0().s[9]++;
    new NotificationBanner($notificationBanner, options);
  });
}

/**
 * Notification banner config
 *
 * @typedef {object} NotificationBannerConfig
 * @property {boolean} [disableAutoFocus=false] - If set to `true` the
 *   notification banner will not be focussed when the page loads. This only
 *   applies if the component has a `role` of `alert` – in other cases the
 *   component will not be focused on page load, regardless of this option.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

export { NotificationBanner, initNotificationBanners };
//# sourceMappingURL=notification-banner.mjs.map
