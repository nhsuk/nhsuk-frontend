/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      items: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'NHS services'
        },
        {
          href: '#',
          text: 'Hospitals'
        }
      ]
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-breadcrumb a'
    }
  },
  'reverse': {
    context: {
      classes: 'nhsuk-breadcrumb--reverse',
      items: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'NHS services'
        },
        {
          href: '#',
          text: 'Hospitals'
        }
      ]
    },
    options: {
      layout: 'background-blue'
    },
    screenshot: {
      states: ['focus', 'hover', 'active'],
      selector: '.nhsuk-breadcrumb a'
    }
  },
  'with back link as a button': {
    context: {
      items: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'Search results'
        }
      ],
      backLink: {
        element: 'button'
      }
    }
  },
  'with back link custom text': {
    context: {
      items: [
        {
          href: '#',
          text: 'Home'
        },
        {
          href: '#',
          text: 'Advanced search'
        }
      ],
      backLink: {
        text: 'Search results',
        href: '#'
      }
    }
  },
  'attributes': {
    context: {
      id: 'with-attributes',
      items: [
        {
          href: '#',
          text: 'Home',
          attributes: { lang: 'en' }
        },
        {
          href: '#',
          text: 'NHS services',
          attributes: { lang: 'en' }
        },
        {
          href: '#',
          text: 'Hospitals',
          classes: 'example-class-one example-class-two',
          attributes: { lang: 'en' }
        }
      ],
      backLink: {
        id: 'back-link-with-attributes',
        attributes: { lang: 'en' }
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
