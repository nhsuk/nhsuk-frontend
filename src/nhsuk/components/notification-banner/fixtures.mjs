import { outdent } from 'outdent'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      text: 'The patient record was updated.'
    },
    screenshot: true
  },
  'paragraph as html heading': {
    context: {
      html: '<p class="nhsuk-notification-banner__heading">You have 9 days to send a response.</p>'
    }
  },
  'with text as html': {
    context: {
      html: outdent`
        <h3 class="nhsuk-notification-banner__heading">
          The patient record was updated
        </h3>
        <p class="nhsuk-body">
          Contact <a class="nhsuk-notification-banner__link" href="#">example@nhs.uk</a> if you think there's a problem.
        </p>
      `
    }
  },
  'with type as success': {
    context: {
      type: 'success',
      text: 'Email sent to example@email.com'
    },
    screenshot: true
  },
  'success with custom html': {
    context: {
      type: 'success',
      html: outdent`
        <h3 class="nhsuk-notification-banner__heading">
          4 files uploaded
        </h3>
        <ul class="nhsuk-u-margin-0 nhsuk-list">
          <li><a href="link-1" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
          <li><a href="link-2" class="nhsuk-notification-banner__link">government-strategy-v1.pdf</a></li>
        </ul>
      `
    }
  },
  'with a list': {
    context: {
      html: outdent`
        <h3 class="nhsuk-notification-banner__heading">4 files uploaded</h3>
        <ul class="nhsuk-list nhsuk-list--bullet nhsuk-u-margin-bottom-0">
          <li><a href="#" class="nhsuk-notification-banner__link">government-strategy.pdf</a></li>
          <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v2.pdf</a></li>
          <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v3-FINAL.pdf</a></li>
          <li><a href="#" class="nhsuk-notification-banner__link">government-strategy-v4-FINAL-v2.pdf</a></li>
        </ul>
      `
    }
  },
  'with long heading': {
    context: {
      text: 'The patient record was withdrawn on 7 March 2014, before being sent in, sent back, queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft peat for three months and recycled as firelighters.'
    }
  },
  'with lots of content': {
    context: {
      html: outdent`
        <h3 class="nhsuk-notification-banner__heading">
          Check if you need to apply the reverse charge to this application
        </h3>
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
  'auto-focus disabled, with type as success': {
    context: {
      type: 'success',
      disableAutoFocus: true,
      text: 'Email sent to example@email.com'
    },
    options: {
      hidden: true
    }
  },
  'auto-focus explicitly enabled, with type as success': {
    context: {
      type: 'success',
      disableAutoFocus: false,
      text: 'Email sent to example@email.com'
    },
    options: {
      hidden: true
    }
  },
  'role=alert overridden to role=region, with type as success': {
    context: {
      type: 'success',
      role: 'region',
      text: 'Email sent to example@email.com'
    },
    options: {
      hidden: true
    }
  },
  'custom tabindex': {
    context: {
      type: 'success',
      text: 'Email sent to example@email.com',
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
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
