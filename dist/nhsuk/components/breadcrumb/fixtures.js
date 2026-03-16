'use strict';

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      items: [{
        href: '#',
        text: 'Home'
      }, {
        href: '#',
        text: 'NHS services'
      }, {
        href: '#',
        text: 'Hospitals'
      }]
    },
    screenshot: true
  },
  'reverse': {
    context: {
      classes: 'nhsuk-breadcrumb--reverse',
      items: [{
        href: '#',
        text: 'Home'
      }, {
        href: '#',
        text: 'NHS services'
      }, {
        href: '#',
        text: 'Hospitals'
      }]
    },
    options: {
      layout: 'background-blue'
    },
    screenshot: true
  },
  'with back link as a button': {
    context: {
      items: [{
        href: '#',
        text: 'Home'
      }, {
        href: '#',
        text: 'Search results'
      }],
      backLink: {
        element: 'button'
      }
    }
  },
  'with back link custom text': {
    context: {
      items: [{
        href: '#',
        text: 'Home'
      }, {
        href: '#',
        text: 'Advanced search'
      }],
      backLink: {
        text: 'Search results',
        href: '#'
      }
    }
  },
  'attributes': {
    context: {
      id: 'with-attributes',
      items: [{
        href: '#',
        text: 'Home',
        attributes: {
          lang: 'en'
        }
      }, {
        href: '#',
        text: 'NHS services',
        attributes: {
          lang: 'en'
        }
      }, {
        href: '#',
        text: 'Hospitals',
        classes: 'example-class-one example-class-two',
        attributes: {
          lang: 'en'
        }
      }],
      backLink: {
        id: 'back-link-with-attributes',
        attributes: {
          lang: 'en'
        }
      }
    },
    options: {
      hidden: true
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

exports.examples = examples;
//# sourceMappingURL=fixtures.js.map
