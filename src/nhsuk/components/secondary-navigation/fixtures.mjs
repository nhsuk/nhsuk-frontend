/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      items: [
        {
          href: '#',
          text: 'All clinics'
        },
        {
          href: '#',
          text: 'Today',
          current: true
        },
        {
          href: '#',
          text: 'Upcoming'
        },
        {
          href: '#',
          text: 'Completed'
        }
      ]
    },
    options: {
      width: 'full'
    }
  },
  'with count': {
    context: {
      items: [
        {
          href: '#',
          text: 'All',
          count: 12
        },
        {
          href: '#',
          text: 'Today',
          count: 3,
          current: true
        },
        {
          href: '#',
          text: 'Upcoming',
          count: "New"
        },
        {
          href: '#',
          text: 'Completed',
          count: 0
        }
      ]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with html': {
    context: {
      items: [
        {
          href: '#',
          html: 'Overview'
        },
        {
          href: '#',
          html: 'Vaccinations <strong class="nhsuk-tag nhsuk-tag--green nhsuk-u-margin-left-1">New</strong>',
          current: true
        },
        {
          href: '#',
          html: 'Consent'
        }
      ]
    },
    options: {
      width: 'full'
    }
  },
  'reverse': {
    context: {
      classes: 'nhsuk-secondary-navigation--reverse',
      items: [
        {
          href: '#',
          text: 'All clinics'
        },
        {
          href: '#',
          text: 'Today',
          current: true
        },
        {
          href: '#',
          text: 'Upcoming'
        },
        {
          href: '#',
          text: 'Completed'
        }
      ]
    },
    options: {
      layout: 'background-blue',
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'reverse with count': {
    context: {
      classes: 'nhsuk-secondary-navigation--reverse',
      items: [
        {
          href: '#',
          text: 'All',
          count: 12
        },
        {
          href: '#',
          text: 'Today',
          count: 3,
          current: true
        },
        {
          href: '#',
          text: 'Upcoming',
          count: 9
        },
        {
          href: '#',
          text: 'Completed',
          count: 0
        }
      ]
    },
    options: {
      layout: 'background-blue',
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with custom label': {
    context: {
      label: 'Section navigation',
      items: [
        {
          href: '#',
          text: 'Summary',
          current: true
        },
        {
          href: '#',
          text: 'History'
        },
        {
          href: '#',
          text: 'Documents'
        }
      ]
    },
    options: {
      width: 'full'
    }
  },
  'vertical': {
    context: {
      vertical: true,
      items: [
        {
          href: '#',
          text: 'All clinics'
        },
        {
          href: '#',
          text: 'Today',
          current: true
        },
        {
          href: '#',
          text: 'Upcoming'
        },
        {
          href: '#',
          text: 'Completed'
        }
      ]
    },
    options: {
      width: 'full'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with unlinked current item': {
    context: {
      items: [
        {
          href: '#',
          text: 'All clinics'
        },
        {
          text: 'Today',
          current: true
        },
        {
          href: '#',
          text: 'Upcoming'
        },
        {
          href: '#',
          text: 'Completed'
        }
      ]
    },
    options: {
      width: 'full'
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
