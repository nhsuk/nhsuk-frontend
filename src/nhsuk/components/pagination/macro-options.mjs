export const name = 'Pagination'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
const options = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the pagination container.',
    released: '10.0.0'
  },
  items: {
    type: 'array',
    required: false,
    description: 'The items within the pagination component.',
    released: '10.1.0',
    params: {
      number: {
        type: 'string',
        required: false,
        description:
          'The pagination item text – usually a page number.  Required unless the item is an ellipsis.',
        released: '10.1.0'
      },
      visuallyHiddenText: {
        type: 'string',
        required: false,
        description:
          'The visually hidden label for the pagination item, which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number. Defaults to, for example "Page 1".',
        released: '10.1.0'
      },
      href: {
        type: 'string',
        required: false,
        description: "The link's URL. Required unless the item is an ellipsis.",
        released: '10.1.0'
      },
      current: {
        type: 'boolean',
        required: false,
        description:
          'Set to `true` to indicate the current page the user is on.',
        released: '10.1.0'
      },
      ellipsis: {
        type: 'boolean',
        required: false,
        description:
          'Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored.',
        released: '10.1.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.',
        released: '10.1.0'
      }
    }
  },
  previous: {
    type: 'object',
    required: false,
    description: 'A link to the previous page, if there is a previous page.',
    released: '10.1.0',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'The text content of the link to the previous page. Defaults to `"Previous page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.',
        released: '10.1.0'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'The HTML content of the link to the previous page. Defaults to `"Previous page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.',
        released: '10.1.0'
      },
      labelText: {
        type: 'string',
        required: false,
        description:
          'The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes.',
        released: '10.1.0'
      },
      href: {
        type: 'string',
        required: true,
        description: "The previous page's URL.",
        released: '10.1.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.',
        released: '10.1.0'
      }
    }
  },
  previousUrl: {
    type: 'string',
    required: false,
    description:
      "The previous page's URL. Replaced by the `previous.href` option.",
    released: '1.0.0',
    deprecated: '10.1.0'
  },
  previousPage: {
    type: 'string',
    required: false,
    description:
      'The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes. Replaced by the `previous.labelText` option.',
    released: '1.0.0',
    deprecated: '10.1.0'
  },
  next: {
    type: 'object',
    required: false,
    description: 'A link to the next page, if there is a next page.',
    released: '10.1.0',
    params: {
      text: {
        type: 'string',
        required: false,
        description:
          'The text content of the link to the next page. Defaults to `"Next page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.',
        released: '10.1.0'
      },
      html: {
        type: 'string',
        required: false,
        description:
          'The HTML content of the link to the next page. Defaults to `"Next page"`, with \'page\' being visually hidden. If `html` is provided, the `text` option will be ignored.',
        released: '10.1.0'
      },
      labelText: {
        type: 'string',
        required: false,
        description:
          'The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes.',
        released: '10.1.0'
      },
      href: {
        type: 'string',
        required: true,
        description: "The next page's URL.",
        released: '10.1.0'
      },
      attributes: {
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.',
        released: '10.1.0'
      }
    }
  },
  nextUrl: {
    type: 'string',
    required: false,
    description: "The next page's URL. Replaced by the `next.href` option.",
    released: '1.0.0',
    deprecated: '10.1.0'
  },
  nextPage: {
    type: 'string',
    required: false,
    description:
      'The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes. Replaced by the `next.labelText` option.',
    released: '1.0.0',
    deprecated: '10.1.0'
  },
  landmarkLabel: {
    type: 'string',
    required: false,
    description:
      'The label for the navigation landmark that wraps the pagination. Defaults to `"Pagination"`.',
    released: '10.1.0'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'The classes you want to add to the pagination `nav` parent.',
    released: '1.0.0'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent.',
    released: '1.0.0'
  }
}

/**
 * Nunjucks macro option params
 * (with typed keys)
 *
 * @type {Record<keyof typeof options, MacroParam>}
 */
export const params = options

/**
 * @import { MacroParam } from '#lib'
 */
