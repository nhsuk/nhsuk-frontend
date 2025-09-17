import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Notification banner'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the notification banner.'
  },
  text: {
    type: 'string',
    required: true,
    description:
      'The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored.'
  },
  html: {
    type: 'string',
    required: true,
    description:
      'The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire notification banner component in a `call` block.'
  },
  titleText: {
    type: 'string',
    required: false,
    description: outdent`
      The title text that displays in the notification banner. You can use any string with this option. Use this option to set text that does not contain HTML. The available default values are \'Important\', \'Success\', and null:
      - if you do not set \`type\`, \`titleText\` defaults to \`"Important"\`
      - if you set \`type\` to \`success\`, \`titleText\` defaults to \`"Success"\`
      - if you set \`titleHtml\`, this option is ignored
    `
  },
  titleHtml: {
    type: 'string',
    required: false,
    description:
      'The title HTML to use within the notification banner. You can use any string with this option. Use this option to set text that contains HTML. If you set `titleHtml`, the `titleText` option is ignored.'
  },
  titleHeadingLevel: {
    type: 'string',
    required: false,
    description:
      'Sets heading level for the title only. You can only use values between `1` and `6` with this option. The default is `2`.'
  },
  type: {
    type: 'string',
    required: false,
    description:
      'The type of notification to render. You can use only `"success"` or `null` values with this option. If you set `type` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `type`, the notification banner sets `role` to `"region"`.'
  },
  role: {
    type: 'string',
    required: false,
    description:
      'Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `type` to `"success"`, `role` defaults to `"alert"`.'
  },
  titleId: {
    type: 'string',
    required: false,
    description:
      'The `id` for the banner title, and the `aria-labelledby` attribute in the banner. Defaults to `"nhsuk-notification-banner-title"`.'
  },
  disableAutoFocus: {
    type: 'boolean',
    required: false,
    description:
      'If you set `type` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'The classes that you want to add to the notification banner.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'The HTML attributes that you want to add to the notification banner, for example, data attributes.'
  }
}

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
      isHidden: true
    }
  },
  'auto-focus explicitly enabled, with type as success': {
    context: {
      type: 'success',
      disableAutoFocus: false,
      text: 'Email sent to example@email.com'
    },
    options: {
      isHidden: true
    }
  },
  'role=alert overridden to role=region, with type as success': {
    context: {
      type: 'success',
      role: 'region',
      text: 'Email sent to example@email.com'
    },
    options: {
      isHidden: true
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
      isHidden: true
    }
  }
}

export const options = components.getMacroOptions(params)

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
