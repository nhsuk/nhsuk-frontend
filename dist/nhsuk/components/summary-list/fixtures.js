'use strict';

var outdent = require('outdent');
var _lib = require('#lib');

let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7,
  _t8,
  _t9,
  _t0,
  _t1,
  _t10,
  _t11,
  _t12,
  _t13,
  _t14,
  _t15,
  _t16,
  _t17,
  _t18;

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'name'
          }]
        }
      }, {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'date of birth'
          }]
        }
      }, {
        key: {
          text: 'Contact information'
        },
        value: {
          html: outdent.outdent(_t || (_t = _`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `))
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'contact information'
          }]
        }
      }, {
        key: {
          text: 'Contact details'
        },
        value: {
          html: outdent.outdent(_t2 || (_t2 = _`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `))
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'contact details'
          }]
        }
      }]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with multiple actions': {
    context: {
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'date of birth'
          }]
        }
      }, {
        key: {
          text: 'Contact information'
        },
        value: {
          html: outdent.outdent(_t3 || (_t3 = _`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `))
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'contact information'
          }]
        }
      }, {
        key: {
          text: 'Contact details'
        },
        value: {
          html: outdent.outdent(_t4 || (_t4 = _`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `))
        },
        actions: {
          items: [{
            href: '#/add',
            text: 'Add',
            visuallyHiddenText: 'new contact details'
          }, {
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'contact details'
          }]
        }
      }, {
        key: {
          text: 'Medicines'
        },
        value: {
          html: outdent.outdent(_t5 || (_t5 = _`
              <p>Isotretinoin capsules (Roaccutane)</p>
              <p>Isotretinoin gel (Isotrex)</p>
              <p>Pepto-Bismol (bismuth subsalicylate)</p>
            `))
        },
        actions: {
          items: [{
            href: '#/add',
            text: 'Add',
            visuallyHiddenText: 'new medicine'
          }, {
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'medicines'
          }]
        }
      }]
    },
    options: {
      width: 'full'
    }
  },
  'with multiple actions (empty items)': {
    context: {
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        },
        actions: {
          items: [false, {
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'date of birth'
          }]
        }
      }, {
        key: {
          text: 'Contact information'
        },
        value: {
          html: outdent.outdent(_t6 || (_t6 = _`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `))
        },
        actions: {
          items: [false, {
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'contact information'
          }]
        }
      }, {
        key: {
          text: 'Contact details'
        },
        value: {
          html: outdent.outdent(_t7 || (_t7 = _`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `))
        },
        actions: {
          items: [{
            href: '#/add',
            text: 'Add',
            visuallyHiddenText: 'new contact details'
          }, {
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'contact details'
          }]
        }
      }, {
        key: {
          text: 'Medicines'
        },
        value: {
          html: outdent.outdent(_t8 || (_t8 = _`
              <p>Isotretinoin capsules (Roaccutane)</p>
              <p>Isotretinoin gel (Isotrex)</p>
              <p>Pepto-Bismol (bismuth subsalicylate)</p>
            `))
        },
        actions: {
          items: [{
            href: '#/add',
            text: 'Add',
            visuallyHiddenText: 'new medicine'
          }, {
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'medicines'
          }]
        }
      }]
    },
    options: {
      width: 'full'
    }
  },
  'without actions': {
    context: {
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }, {
        key: {
          text: 'Contact information'
        },
        value: {
          html: outdent.outdent(_t9 || (_t9 = _`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `))
        }
      }, {
        key: {
          text: 'Contact details'
        },
        value: {
          html: outdent.outdent(_t0 || (_t0 = _`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `))
        }
      }]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'without border': {
    context: {
      classes: 'nhsuk-summary-list--no-border',
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }, {
        key: {
          text: 'Contact information'
        },
        value: {
          html: outdent.outdent(_t1 || (_t1 = _`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `))
        }
      }, {
        key: {
          text: 'Contact details'
        },
        value: {
          html: outdent.outdent(_t10 || (_t10 = _`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `))
        }
      }]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'without row border': {
    context: {
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }, {
        key: {
          text: 'Contact information'
        },
        value: {
          html: outdent.outdent(_t11 || (_t11 = _`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `))
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Contact details'
        },
        value: {
          html: outdent.outdent(_t12 || (_t12 = _`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `))
        }
      }]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'as a card': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm'
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }]
    }
  },
  'as a card with multiple actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'l',
        actions: {
          items: [{
            text: 'Delete',
            href: '#/delete'
          }, {
            text: 'Withdraw',
            href: '#/withdraw'
          }]
        }
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'date of birth'
          }]
        }
      }, {
        key: {
          text: 'Contact information'
        },
        value: {
          html: outdent.outdent(_t13 || (_t13 = _`
              73 Roman Rd<br>
              Leeds<br>
              LS2 5ZN
            `))
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'contact information'
          }]
        }
      }, {
        key: {
          text: 'Contact details'
        },
        value: {
          html: outdent.outdent(_t14 || (_t14 = _`
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            `))
        },
        actions: {
          items: [{
            href: '#/add',
            text: 'Add',
            visuallyHiddenText: 'new contact details'
          }, {
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'contact details'
          }]
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Medicines'
        },
        value: {
          html: outdent.outdent(_t15 || (_t15 = _`
              <p>Isotretinoin capsules (Roaccutane)</p>
              <p>Isotretinoin gel (Isotrex)</p>
              <p>Pepto-Bismol (bismuth subsalicylate)</p>
            `))
        },
        actions: {
          items: [{
            href: '#/add',
            text: 'Add',
            visuallyHiddenText: 'new medicine'
          }, {
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'medicines'
          }]
        }
      }]
    },
    options: {
      width: 'full'
    }
  },
  'as a card with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        actions: {
          items: [{
            text: 'Delete',
            href: '#/delete'
          }, {
            text: 'Withdraw',
            href: '#/withdraw'
          }]
        }
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }]
    }
  },
  'as a card (secondary) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        secondary: true,
        actions: {
          items: [{
            text: 'Delete',
            href: '#/delete'
          }, {
            text: 'Withdraw',
            href: '#/withdraw'
          }]
        }
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }]
    }
  },
  'as a card (feature) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        feature: true,
        actions: {
          items: [{
            text: 'Delete',
            href: '#/delete'
          }, {
            text: 'Withdraw',
            href: '#/withdraw'
          }]
        }
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }]
    }
  },
  'as a card (feature) with custom HTML': {
    context: {
      card: {
        heading: 'Your read',
        headingSize: 'm',
        feature: true
      },
      rows: [{
        key: {
          text: 'Opinion'
        },
        value: {
          html: outdent.outdent(_t16 || (_t16 = _`
              <p class="nhsuk-u-margin-bottom-3">
                ${0}
              </p>
            `), _lib.components.render('tag', {
            context: {
              text: 'Recall for assessment',
              classes: 'nhsuk-tag--red'
            }
          }))
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'opinion'
          }]
        }
      }, {
        key: {
          text: 'Detailed opinion'
        },
        value: {
          html: outdent.outdent(_t17 || (_t17 = _`
              <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-one-half">
                  <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">
                    Right breast
                  </p>
                  <p class="nhsuk-u-margin-bottom-3">
                    ${0}
                  </p>
                </div>

                <div class="nhsuk-grid-column-one-half">
                  <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">
                    Left breast
                  </p>
                  <p class="nhsuk-u-margin-bottom-3 nhsuk-u-secondary-text-colour">
                    Not recorded
                  </p>
                </div>
              </div>
            `), _lib.components.render('tag', {
            context: {
              text: 'Abnormal',
              classes: 'nhsuk-tag--red'
            }
          }))
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'detailed opinion'
          }]
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Annotations'
        },
        value: {
          html: outdent.outdent(_t18 || (_t18 = _`
              <p class="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">
                Right breast
              </p>
              <p class="nhsuk-u-margin-bottom-0">
                Microcalcification outside a mass, Clinical abnormality – Level 2 (benign)
              </p>
            `))
        },
        actions: {
          items: [{
            href: '#/change',
            text: 'Change',
            visuallyHiddenText: 'annotations'
          }]
        }
      }]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'as a card (clickable) without actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        headingSize: 'm',
        href: '#/card-clickable',
        clickable: true
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }]
    }
  },
  'as a card (type non-urgent) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        type: 'non-urgent',
        actions: {
          items: [{
            text: 'Delete',
            href: '#/delete'
          }, {
            text: 'Withdraw',
            href: '#/withdraw'
          }]
        }
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }]
    }
  },
  'as a card (type urgent) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        type: 'urgent',
        actions: {
          items: [{
            text: 'Delete',
            href: '#/delete'
          }, {
            text: 'Withdraw',
            href: '#/withdraw'
          }]
        }
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }]
    }
  },
  'as a card (type emergency) with actions': {
    context: {
      card: {
        heading: 'Regional Manager',
        type: 'emergency',
        actions: {
          items: [{
            text: 'Delete',
            href: '#/delete'
          }, {
            text: 'Withdraw',
            href: '#/withdraw'
          }]
        }
      },
      rows: [{
        key: {
          text: 'Name'
        },
        value: {
          text: 'Karen Francis'
        }
      }, {
        classes: 'nhsuk-summary-list__row--no-border',
        key: {
          text: 'Date of birth'
        },
        value: {
          text: '15 March 1984'
        }
      }]
    }
  }
};

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
const examples = fixtures;

/**
 * @import { MacroExample } from '#lib'
 */

exports.examples = examples;
//# sourceMappingURL=fixtures.js.map
