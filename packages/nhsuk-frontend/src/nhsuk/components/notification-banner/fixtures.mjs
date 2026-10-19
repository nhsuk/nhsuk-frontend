import { outdent } from "outdent"

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "The patient record was updated."
    },
    screenshot: true
  },
  "paragraph with heading class": {
    context: {
      heading: {
        text: "You have 9 days to send a response.",
        element: "p"
      }
    }
  },
  "with HTML": {
    context: {
      heading: {
        text: "The patient record was updated"
      },
      html: outdent`
        <p class="nhsuk-body">
          Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there's a problem.
        </p>
      `
    }
  },
  "with HTML and heading as string": {
    context: {
      heading: "The patient record was updated",
      html: outdent`
        <p class="nhsuk-body">
          Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there's a problem.
        </p>
      `
    }
  },
  "with HTML via call block": {
    context: {
      heading: {
        text: "The patient record was updated"
      }
    },
    callBlock: outdent`
      <p class="nhsuk-body">
        Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there's a problem.
      </p>
    `
  },
  "with custom title": {
    context: {
      title: {
        text: "Important information"
      },
      text: "The patient record was updated."
    }
  },
  "with custom title as string": {
    context: {
      title: "Important information",
      text: "The patient record was updated."
    }
  },
  "with success variant": {
    context: {
      variant: "success",
      text: "Email sent to example@email.com"
    },
    screenshot: true
  },
  "success with HTML": {
    context: {
      variant: "success",
      heading: {
        text: "4 files uploaded"
      },
      html: outdent`
        <ul class="nhsuk-list">
          <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
          <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>
        </ul>
      `
    }
  },
  "success with HTML via call block": {
    context: {
      variant: "success",
      heading: {
        text: "4 files uploaded"
      }
    },
    callBlock: outdent`
      <ul class="nhsuk-list">
        <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
        <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>
      </ul>
    `
  },
  "with a list": {
    context: {
      heading: {
        text: "4 files uploaded"
      },
      html: outdent`
        <ul class="nhsuk-list nhsuk-list--bullet">
          <li><a href="#" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
          <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v2.pdf</a></li>
          <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v3-FINAL.pdf</a></li>
          <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v4-FINAL-v2.pdf</a></li>
        </ul>
      `
    }
  },
  "with long heading": {
    context: {
      text: "The patient record was withdrawn on 7 March 2014, before being sent in, sent back, queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft peat for three months and recycled as firelighters."
    }
  },
  "with lots of content": {
    context: {
      heading: {
        text: "Check if you need to apply the reverse charge to this application"
      },
      html: outdent`
        <p class="nhsuk-body">
          You will have to apply the <a href="#" class="nhsuk-notification-banner__link">reverse charge</a> if the applicant supplies any of these services:
        </p>
        <ul class="nhsuk-list nhsuk-list--bullet">
          <li>constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services</li>
          <li>constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours</li>
        </ul>
      `
    }
  },
  "auto-focus disabled, with success variant": {
    context: {
      variant: "success",
      disableAutoFocus: true,
      text: "Email sent to example@email.com"
    },
    options: {
      hidden: true
    }
  },
  "auto-focus explicitly enabled, with success variant": {
    context: {
      variant: "success",
      disableAutoFocus: false,
      text: "Email sent to example@email.com"
    },
    options: {
      hidden: true
    }
  },
  "role=alert overridden to role=region, with success variant": {
    context: {
      variant: "success",
      role: "region",
      text: "Email sent to example@email.com"
    },
    options: {
      hidden: true
    }
  },
  "custom tabindex": {
    context: {
      variant: "success",
      text: "Email sent to example@email.com",
      attributes: {
        tabindex: 2
      }
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
