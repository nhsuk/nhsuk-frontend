/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      titleText: "There is a problem",
      errorList: [
        {
          text: "Date of birth must be in the past",
          href: "#example-day"
        }
      ]
    },
    screenshot: {
      states: ["focus", "hover", "active"],
      selector: ".nhsuk-error-summary a"
    }
  },
  "with multiple errors": {
    context: {
      titleText: "There is a problem",
      errorList: [
        {
          text: "Enter your first name",
          href: "#example-first-name"
        },
        {
          text: "Enter your last name",
          href: "#example-last-name"
        }
      ]
    }
  },
  "with multiple errors (empty items)": {
    context: {
      titleText: "There is a problem",
      errorList: [
        {
          text: "Enter your first name",
          href: "#example-first-name"
        },
        false
      ]
    }
  },
  "with title HTML": {
    context: {
      titleHtml: "There is a <span>problem</span>",
      errorList: [
        {
          text: "Date of birth must be in the past",
          href: "#example-day"
        }
      ]
    }
  },
  "with description": {
    context: {
      titleText: "There is a problem",
      descriptionText: "Describe the errors and how to correct them",
      errorList: [
        {
          text: "Date of birth must be in the past",
          href: "#example-day"
        }
      ]
    },
    screenshot: true
  },
  "with description HTML": {
    context: {
      titleText: "There is a problem",
      descriptionHtml:
        "Describe the errors and <span>how to correct them</span>",
      errorList: [
        {
          text: "Date of birth must be in the past",
          href: "#example-day"
        }
      ]
    }
  },
  "with description via call block": {
    context: {
      titleText: "There is a problem",
      errorList: [
        {
          text: "Date of birth must be in the past",
          href: "#example-day"
        }
      ]
    },
    callBlock: "Describe the errors and <span>how to correct them</span>"
  },
  "with description only": {
    context: {
      titleText: "There is a problem",
      descriptionText: "Describe the errors and how to correct them"
    }
  },
  "without error link": {
    context: {
      titleText: "There is a problem",
      errorList: [
        {
          text: "Invalid username or password"
        }
      ]
    }
  },
  "without error link (mixed)": {
    context: {
      titleText: "There is a problem",
      errorList: [
        {
          text: "Invalid username or password"
        },
        {
          text: "Agree to the terms of service to log in",
          href: "#example-terms-of-service"
        }
      ]
    }
  },
  "auto-focus disabled": {
    context: {
      titleText: "There is a problem",
      errorList: [
        {
          text: "Date of birth must be in the past",
          href: "#example-day"
        }
      ],
      disableAutoFocus: true
    },
    options: {
      hidden: true
    }
  },
  "auto-focus explicitly enabled": {
    context: {
      titleText: "There is a problem",
      errorList: [
        {
          text: "Date of birth must be in the past",
          href: "#example-day"
        }
      ],
      disableAutoFocus: false
    },
    options: {
      hidden: true
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
