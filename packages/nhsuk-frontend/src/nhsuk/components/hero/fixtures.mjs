import { outdent } from 'outdent'

import { components } from '#lib'

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      heading: "We're here for you",
      text: 'Helping you take control of your health and wellbeing.'
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with image': {
    context: {
      image: {
        src: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with image, content': {
    context: {
      heading: "We're here for you",
      text: 'Helping you take control of your health and wellbeing.',
      image: {
        src: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
      }
    },
    options: {
      width: false
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop', 'large-desktop']
    }
  },
  'with html content': {
    context: {
      heading: 'This is a header for the product or service',
      headingSize: 'l',
      headingClasses: 'nhsuk-u-margin-top-5',
      html: outdent`
        <p class="nhsuk-body-l">This is some more content which explains the product or service.</p>
        ${components.render('button', {
          context: {
            text: 'Sign up',
            classes: 'nhsuk-button--reverse',
            href: '#'
          }
        })}
      `
    },
    options: {
      width: false
    }
  }
}

/**
 * @import { MacroExample } from '#lib'
 */
