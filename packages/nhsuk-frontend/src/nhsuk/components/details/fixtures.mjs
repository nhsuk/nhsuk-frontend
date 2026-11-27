import { outdent } from "outdent"

import { components } from "#lib"

import { examples as tablesExamples } from "../tables/fixtures.mjs"

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you."
    }
  },
  "open": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
      open: true
    }
  },
  "open with form fields": {
    context: {
      summary: {
        text: "Role information"
      },
      open: true
    },
    callBlock: outdent`
      ${components.render("input", {
        context: {
          label: {
            text: "Name",
            size: "s"
          },
          name: "name",
          value: "Karen Francis",
          autocomplete: "name",
          spellcheck: false,
          width: 10
        }
      })}
      ${components.render("input", {
        context: {
          label: {
            text: "Email address",
            size: "s"
          },
          type: "email",
          name: "name",
          value: "karen.francis@example.com",
          autocomplete: "email",
          spellcheck: false,
          width: 20
        }
      })}
      ${components.render("date-input", {
        context: {
          fieldset: {
            legend: {
              text: "Date of birth",
              size: "s"
            }
          },
          hint: "For example, 31 3 1980",
          name: "dob",
          day: {
            value: "15",
            autocomplete: "bday-day"
          },
          month: {
            value: "3",
            autocomplete: "bday-month"
          },
          year: {
            value: "1984",
            autocomplete: "bday-year"
          }
        }
      })}
      ${components.render("character-count", {
        context: {
          label: {
            text: "Address",
            size: "s"
          },
          width: 30,
          maxlength: 350,
          threshold: 75,
          name: "address",
          value: outdent`
            73 Roman Rd
            Leeds
            LS2 5ZN
          `
        }
      })}
      ${components.render("radios", {
        context: {
          fieldset: {
            legend: {
              text: "Region",
              size: "s"
            }
          },
          inline: true,
          small: true,
          name: "region",
          value: "east",
          items: [
            {
              value: "east",
              text: "East"
            },
            {
              value: "west",
              text: "West"
            }
          ]
        }
      })}
      ${components.render("button", {
        context: {
          text: "Save role"
        }
      })}
    `
  },
  "closed explicitly": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      text: "You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you.",
      open: false
    }
  },
  "with HTML": {
    context: {
      summary: {
        text: "How to find your NHS number"
      },
      html: outdent`
        <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
        <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
        </ul>
        <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
      `
    },
    screenshot: {
      states: ["click"],
      selector: ".nhsuk-details__summary"
    }
  },
  "with HTML via call block": {
    context: {
      summary: {
        text: "How to find your NHS number"
      }
    },
    callBlock: outdent`
      <p>An NHS number is a 10 digit number, like <span class="nhsuk-u-nowrap">999 123 4567</span>.</p>
      <p>You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:</p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
      </ul>
      <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
    `
  },
  "with summary HTML": {
    context: {
      summary: {
        html: "How to find your <span>NHS number</span>"
      },
      text: "An NHS number is a 10 digit number, like 999 123 4567"
    }
  },
  "with summary as string": {
    context: {
      summary: "How to find your NHS number",
      text: "An NHS number is a 10 digit number, like 999 123 4567"
    }
  },
  "expander": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander"
    }
  },
  "expander open": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander",
      open: true
    }
  },
  "expander open with form fields": {
    context: {
      summary: {
        text: "Role information"
      },
      classes: "nhsuk-expander",
      open: true
    },
    callBlock: outdent`
      ${components.render("input", {
        context: {
          label: {
            text: "Name",
            size: "s"
          },
          name: "name",
          value: "Karen Francis",
          autocomplete: "name",
          spellcheck: false,
          width: 10
        }
      })}
      ${components.render("input", {
        context: {
          label: {
            text: "Email address",
            size: "s"
          },
          type: "email",
          name: "name",
          value: "karen.francis@example.com",
          autocomplete: "email",
          spellcheck: false,
          width: 20
        }
      })}
      ${components.render("date-input", {
        context: {
          fieldset: {
            legend: {
              text: "Date of birth",
              size: "s"
            }
          },
          hint: "For example, 31 3 1980",
          name: "dob",
          day: {
            value: "15",
            autocomplete: "bday-day"
          },
          month: {
            value: "3",
            autocomplete: "bday-month"
          },
          year: {
            value: "1984",
            autocomplete: "bday-year"
          }
        }
      })}
      ${components.render("character-count", {
        context: {
          label: {
            text: "Address",
            size: "s"
          },
          width: 30,
          maxlength: 350,
          threshold: 75,
          name: "address",
          value: outdent`
            73 Roman Rd
            Leeds
            LS2 5ZN
          `
        }
      })}
      ${components.render("radios", {
        context: {
          fieldset: {
            legend: {
              text: "Region",
              size: "s"
            }
          },
          inline: true,
          small: true,
          name: "region",
          value: "east",
          items: [
            {
              value: "east",
              text: "East"
            },
            {
              value: "west",
              text: "West"
            }
          ]
        }
      })}
      ${components.render("button", {
        context: {
          text: "Save role"
        }
      })}
    `
  },
  "expander closed explicitly": {
    context: {
      summary: {
        text: "Opening times"
      },
      text: "We are open 9am to 6pm, Monday to Saturday.",
      classes: "nhsuk-expander",
      open: false
    }
  },
  "expander with HTML": {
    context: {
      summary: {
        text: "Opening times"
      },
      html: components.render(
        "tables",
        tablesExamples["with first cell as header"]
      ),
      classes: "nhsuk-expander"
    },
    screenshot: {
      states: ["click"],
      selector: ".nhsuk-details__summary"
    }
  },
  "expander with HTML via call block": {
    context: {
      summary: {
        text: "Opening times"
      },
      classes: "nhsuk-expander"
    },
    callBlock: components.render(
      "tables",
      tablesExamples["with first cell as header"]
    )
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
