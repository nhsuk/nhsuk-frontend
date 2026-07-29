'use strict';

var outdent = require('outdent');

const name = 'Notification banner';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the notification banner.',
    released: '10.0.0'
  },
  text: {
    type: 'string',
    required: true,
    description: 'The text that displays in the notification banner. You can use any string with this option. If you set `html`, this option is not required and is ignored.',
    released: '10.0.0'
  },
  html: {
    type: 'string',
    required: true,
    description: 'The HTML to use within the notification banner. You can use any string with this option. If you set `html`, `text` is not required and is ignored.',
    released: '10.0.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire notification banner component in a `call` block.',
    released: '10.0.0'
  },
  titleText: {
    type: 'string',
    required: false,
    description: outdent.outdent`
      The title text that displays in the notification banner. You can use any string with this option. Use this option to set text that does not contain HTML. The available default values are \'Important\', \'Success\', and null:
      - if you do not set \`variant\`, \`titleText\` defaults to \`"Important"\`
      - if you set \`variant\` to \`success\`, \`titleText\` defaults to \`"Success"\`
      - if you set \`titleHtml\`, this option is ignored
    `,
    released: '10.0.0'
  },
  titleHtml: {
    type: 'string',
    required: false,
    description: 'The title HTML to use within the notification banner. You can use any string with this option. Use this option to set text that contains HTML. If you set `titleHtml`, the `titleText` option is ignored.',
    released: '10.0.0'
  },
  titleHeadingLevel: {
    type: 'string',
    required: false,
    description: 'Sets heading level for the title only. You can only use values between `1` and `6` with this option. The default is `2`.',
    released: '10.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description: 'Optional variant of notification banner. You can use only `"success"` or empty values with this option. If you set `variant` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `variant`, the notification banner sets `role` to `"region"`.',
    released: '10.4.0'
  },
  type: {
    type: 'string',
    required: false,
    description: 'Optional type of notification banner. You can use only `"success"` or empty values with this option. If you set `type` to `"success"`, the notification banner sets `role` to `"alert"`. JavaScript then moves the keyboard focus to the notification banner when the page loads. If you do not set `type`, the notification banner sets `role` to `"region"`. Replaced by the `variant` option.',
    released: '10.0.0',
    deprecated: '10.4.0'
  },
  role: {
    type: 'string',
    required: false,
    description: 'Overrides the value of the `role` attribute for the notification banner. Defaults to `"region"`. If you set `variant` to `"success"`, `role` defaults to `"alert"`.',
    released: '10.0.0'
  },
  titleId: {
    type: 'string',
    required: false,
    description: 'The `id` for the banner title, and the `aria-labelledby` attribute in the banner. Defaults to `"nhsuk-notification-banner-title"`.',
    released: '10.0.0'
  },
  disableAutoFocus: {
    type: 'boolean',
    required: false,
    description: 'If you set `variant` to `"success"`, or `role` to `"alert"`, JavaScript moves the keyboard focus to the notification banner when the page loads. To disable this behaviour, set `disableAutoFocus` to `true`.',
    released: '10.0.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'The classes that you want to add to the notification banner.',
    released: '10.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'The HTML attributes that you want to add to the notification banner, for example, data attributes.',
    released: '10.0.0'
  }
};

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
const params = options;

/**
 * @import { MacroParam } from '#lib'
 */

exports.name = name;
exports.params = params;
//# sourceMappingURL=macro-options.js.map
