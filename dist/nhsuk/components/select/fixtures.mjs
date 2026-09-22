import { components } from '#lib';
import { examples as examples$1 } from '../button/fixtures.mjs';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      label: {
        heading: "Sort by",
        size: "l"
      },
      name: "example",
      items: [{
        value: "published",
        text: "Recently published"
      }, {
        value: "updated",
        text: "Recently updated"
      }, {
        value: "views",
        text: "Most views"
      }, {
        value: "comments",
        text: "Most comments"
      }]
    },
    screenshot: true
  },
  "disabled": {
    context: {
      label: {
        heading: "Sort by",
        size: "l"
      },
      name: "example",
      disabled: true,
      items: [{
        value: "published",
        text: "Recently published"
      }, {
        value: "updated",
        text: "Recently updated"
      }, {
        value: "views",
        text: "Most views"
      }, {
        value: "comments",
        text: "Most comments"
      }]
    },
    screenshot: true
  },
  "disabled option": {
    context: {
      label: {
        heading: "Sort by",
        size: "l"
      },
      name: "example",
      items: [{
        value: "published",
        text: "Recently published"
      }, {
        value: "updated",
        text: "Recently updated"
      }, {
        value: "views",
        text: "Most views"
      }, {
        value: "comments",
        text: "Most comments",
        disabled: true
      }]
    }
  },
  "with divider": {
    context: {
      label: {
        heading: "Sort by",
        size: "l"
      },
      name: "example",
      items: [{
        value: "first-name-ascending",
        text: "First name (A to Z)"
      }, {
        value: "first-name-descending",
        text: "First name (Z to A)"
      }, {
        divider: true
      }, {
        value: "last-name-ascending",
        text: "Last name (A to Z)"
      }, {
        value: "last-name-descending",
        text: "Last name (Z to A)"
      }]
    }
  },
  "with hint": {
    context: {
      label: {
        heading: "Choose location",
        size: "l"
      },
      hint: {
        text: "This can be different to where you went before"
      },
      id: "with-hint",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }]
    },
    screenshot: true
  },
  "with button": {
    context: {
      label: {
        heading: "Choose location",
        size: "l"
      },
      hint: {
        text: "This can be different to where you went before"
      },
      id: "with-hint",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }],
      formGroup: {
        afterInput: {
          html: components.render("button", examples$1["example secondary save button, small"])
        }
      }
    },
    screenshot: {
      viewports: ["watch", "mobile", "tablet", "desktop"]
    }
  },
  "with button and error message": {
    context: {
      label: {
        heading: "Choose location",
        size: "l"
      },
      hint: {
        text: "This can be different to where you went before"
      },
      errorMessage: {
        text: "Select a location"
      },
      id: "with-hint",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }],
      formGroup: {
        afterInput: {
          html: components.render("button", examples$1["example secondary save button, small"])
        }
      }
    },
    screenshot: {
      viewports: ["watch", "mobile", "tablet", "desktop"]
    }
  },
  "label": {
    context: {
      label: {
        heading: "Sort by",
        size: "l"
      },
      id: "custom-size",
      name: "example",
      items: [{
        value: "published",
        text: "Recently published"
      }, {
        value: "updated",
        text: "Recently updated"
      }, {
        value: "views",
        text: "Most views"
      }, {
        value: "comments",
        text: "Most comments"
      }]
    },
    variants: [{
      description: "with size S",
      context: {
        label: {
          size: "s"
        }
      }
    }, {
      description: "with size M",
      context: {
        label: {
          size: "m"
        }
      }
    }, {
      description: "with size L",
      context: {
        label: {
          size: "l"
        }
      }
    }, {
      description: "with size XL",
      context: {
        label: {
          size: "xl"
        }
      }
    }, {
      description: "with id attribute on",
      context: {
        label: {
          id: "custom-id"
        }
      },
      options: {
        hidden: true
      }
    }]
  },
  "without heading": {
    context: {
      label: "Sort by",
      id: "without-heading",
      name: "example",
      items: [{
        value: "published",
        text: "Recently published"
      }, {
        value: "updated",
        text: "Recently updated"
      }, {
        value: "views",
        text: "Most views"
      }, {
        value: "comments",
        text: "Most comments"
      }]
    }
  },
  "with error only": {
    context: {
      label: {
        heading: "Choose location",
        size: "l"
      },
      errorMessage: true,
      id: "with-error-only",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }]
    }
  },
  "with error message": {
    context: {
      label: {
        heading: "Choose location",
        size: "l"
      },
      errorMessage: {
        text: "Select a location"
      },
      id: "with-error-message",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }]
    }
  },
  "with error message and hint": {
    context: {
      label: {
        heading: "Choose location",
        size: "l"
      },
      hint: {
        text: "This can be different to where you went before"
      },
      errorMessage: {
        text: "Select a location"
      },
      id: "with-hint-error",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }]
    },
    screenshot: {
      states: ["focus"],
      selector: "#with-hint-error"
    }
  },
  "with error message and hint as strings": {
    context: {
      label: {
        heading: "Choose location",
        size: "l"
      },
      hint: "This can be different to where you went before",
      errorMessage: "Select a location",
      id: "with-hint-error",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }]
    }
  },
  "with error message, without heading": {
    context: {
      label: {
        text: "Choose location"
      },
      errorMessage: {
        text: "Select a location"
      },
      id: "with-error-message",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }]
    }
  },
  "with error message and hint, without heading": {
    context: {
      label: {
        text: "Choose location"
      },
      hint: {
        text: "This can be different to where you went before"
      },
      errorMessage: {
        text: "Select a location"
      },
      id: "with-hint-error",
      name: "example",
      items: [{
        value: "choose",
        text: "Choose location"
      }, {
        value: "eastmidlands",
        text: "East Midlands"
      }, {
        value: "eastofengland",
        text: "East of England"
      }, {
        value: "london",
        text: "London"
      }, {
        value: "northeast",
        text: "North East"
      }, {
        value: "northwest",
        text: "North West"
      }, {
        value: "southeast",
        text: "South East"
      }, {
        value: "southwest",
        text: "South West"
      }, {
        value: "westmidlands",
        text: "West Midlands"
      }, {
        value: "yorkshire",
        text: "Yorkshire and the Humber"
      }]
    }
  },
  "with selected value": {
    context: {
      label: {
        heading: "Sort by",
        size: "l"
      },
      id: "with-value",
      name: "example",
      value: "updated",
      items: [{
        value: "published",
        text: "Recently published"
      }, {
        value: "updated",
        text: "Recently updated"
      }, {
        value: "views",
        text: "Most views"
      }, {
        value: "comments",
        text: "Most comments"
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

export { examples };
//# sourceMappingURL=fixtures.mjs.map
