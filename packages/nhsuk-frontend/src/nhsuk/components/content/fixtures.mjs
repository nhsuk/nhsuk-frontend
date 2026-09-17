/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "Change"
    }
  },
  "slot": {
    context: {
      text: "A&E waiting times",
      classes: "nhsuk-heading-s nhsuk-u-margin-0",
      element: "h1"
    },
    variants: [
      {
        description: 'with "before"',
        context: {
          slots: {
            before: {
              html: "<samp>Before</samp>"
            }
          }
        }
      },
      {
        description: 'with "before" and "start"',
        context: {
          slots: {
            before: {
              html: "<samp>Before</samp>"
            },
            start: {
              html: "<samp>Start–</samp>"
            }
          }
        }
      },
      {
        description: 'with "before", "start", "end" and "after"',
        context: {
          slots: {
            before: {
              html: "<samp>Before</samp>"
            },
            start: {
              html: "<samp>Start–</samp>"
            },
            end: {
              html: "<samp>–End</samp>"
            },
            after: {
              html: "<samp>After</samp>"
            }
          }
        }
      },
      {
        description: 'with "start"',
        context: {
          slots: {
            start: {
              html: "<samp>Start–</samp>"
            }
          }
        }
      },
      {
        description: 'with "end"',
        context: {
          slots: {
            end: {
              html: "<samp>–End</samp>"
            }
          }
        }
      },
      {
        description: 'with "end" and "after"',
        context: {
          slots: {
            end: {
              html: "<samp>–End</samp>"
            },
            after: {
              html: "<samp>After</samp>"
            }
          }
        }
      },
      {
        description: 'with "after"',
        context: {
          slots: {
            after: {
              html: "<samp>After</samp>"
            }
          }
        }
      }
    ]
  },
  "slot only": {
    variants: [
      {
        description: 'with "before"',
        context: {
          slots: {
            before: {
              html: "<samp>Before</samp>"
            }
          }
        }
      },
      {
        description: 'with "start"',
        context: {
          slots: {
            start: {
              html: "<samp>Start</samp>"
            }
          }
        }
      },
      {
        description: 'with "end"',
        context: {
          slots: {
            end: {
              html: "<samp>End</samp>"
            }
          }
        }
      },
      {
        description: 'with "after"',
        context: {
          slots: {
            after: {
              html: "<samp>After</samp>"
            }
          }
        }
      }
    ]
  },
  "with text escaping": {
    context: {
      text: "A&E waiting times"
    }
  },
  "with HTML": {
    context: {
      html: "A&amp;E waiting times"
    }
  },
  "with HTML via call block": {
    callBlock: "A&amp;E waiting times"
  },
  "with link": {
    context: {
      href: "#/result",
      text: "Change"
    }
  },
  "with link and visually hidden text": {
    context: {
      href: "#/change",
      text: "Change",
      visuallyHidden: {
        text: "date of birth"
      }
    }
  },
  "with visually hidden text": {
    context: {
      text: "Change",
      visuallyHidden: {
        text: "date of birth"
      }
    }
  },
  "with visually hidden text only": {
    context: {
      visuallyHidden: "Action"
    }
  },
  'with visually hidden text "before"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "Error",
        suffix: ":",
        placement: "before"
      },
      element: "p"
    }
  },
  'with visually hidden text "start"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "Error",
        suffix: ":",
        placement: "start"
      },
      element: "p"
    }
  },
  'with visually hidden text "end"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "Karen Francis",
        prefix: "(",
        suffix: ")",
        placement: "end"
      },
      element: "p"
    }
  },
  'with visually hidden text "after"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "Karen Francis",
        prefix: "(",
        suffix: ")",
        placement: "after"
      },
      element: "p"
    }
  },
  "with visually hidden text escaping": {
    context: {
      text: "Visit",
      visuallyHidden: {
        text: "A&E"
      }
    }
  },
  "with visually hidden HTML": {
    context: {
      text: "Visit",
      visuallyHidden: {
        html: "A&amp;E"
      }
    }
  },
  "as a paragraph": {
    context: {
      text: "Change",
      element: "p"
    }
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
