'use strict';

const name = 'Back link';

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the back link.',
    released: '10.0.0'
  },
  text: {
    type: 'string',
    required: false,
    description: 'Text to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`.',
    released: '1.0.0'
  },
  html: {
    type: 'string',
    required: false,
    description: 'HTML to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to `"Back"`.',
    released: '1.0.0'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description: 'Not strictly an option but supports the [`call` block](https://mozilla.github.io/nunjucks/templating.html#call) as an alternative to the `html` option. To use it, you will need to wrap the entire back link component in a `call` block.',
    released: '10.6.0'
  },
  type: {
    type: 'string',
    required: false,
    description: 'Type of back link as a button – `"button"` or `"submit"`. Defaults to `"submit"` unless `href` is provided.',
    released: '10.5.0'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The back link `href` attribute. If set, the back link will use an `<a>` tag automatically unless `type` is provided.',
    released: '1.0.0'
  },
  variant: {
    type: 'string',
    required: false,
    description: 'Optional variant of back link. You can use only `"reverse"` or empty values with this option.',
    released: '10.4.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the back link component.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description: 'HTML attributes (for example data attributes) to add to the back link component.',
    released: '1.0.0'
  },
  visuallyHiddenText: {
    type: 'string',
    required: false,
    description: 'An optional visually hidden prefix used before the back link text, for example `"Back to"` used by the breadcrumbs component.',
    released: '10.1.0'
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
