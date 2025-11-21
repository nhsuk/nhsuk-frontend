import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

export const name = 'Card'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the card.'
  },
  heading: {
    type: 'string',
    required: true,
    description:
      'Text to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored.'
  },
  headingHtml: {
    type: 'string',
    required: true,
    description:
      'HTML to use within the heading of the card component. If `headingHtml` is provided, the `heading` argument will be ignored.'
  },
  headingClasses: {
    type: 'string',
    required: false,
    description: 'Classes to add to the card heading.'
  },
  headingLevel: {
    type: 'integer',
    required: false,
    description: 'Optional heading level for the card heading. Defaults to `2`.'
  },
  href: {
    type: 'string',
    required: false,
    description: 'The value of the card link `href` attribute.'
  },
  clickable: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, then the whole card will become a clickable card variant.'
  },
  type: {
    type: 'string',
    required: false,
    description:
      'Care card variant type – `"non-urgent"`, `"urgent"` or `"emergency"`.'
  },
  feature: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, then the card will become a feature card variant.'
  },
  primary: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, the card will become a primary card variant (with chevron).'
  },
  secondary: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, the card will become a secondary card variant.'
  },
  topTask: {
    type: 'boolean',
    required: false,
    description:
      'If set to `true`, the card will become a top task card variant.'
  },
  imgURL: {
    type: 'string',
    required: false,
    description: 'The URL of the image in the card.'
  },
  imgALT: {
    type: 'string',
    required: false,
    description: 'The alternative text of the image in the card.'
  },
  description: {
    type: 'string',
    required: false,
    description:
      'Text description within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored.'
  },
  descriptionHtml: {
    type: 'string',
    required: false,
    description:
      'HTML to use within the card content. If `descriptionHtml` is provided, the `description` argument will be ignored.'
  },
  caller: {
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but a Nunjucks code convention. Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire card component in a `call` block.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the card.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the card.'
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
      heading: "If you need help now, but it's not an emergency",
      headingLevel: 3
    },
    callBlock: outdent`
      <p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'basic with custom HTML': {
    context: {
      heading: 'Help from NHS 111',
      headingLevel: 3
    },
    callBlock: outdent`
      <p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
      <p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
      <p class="nhsuk-body">For a life-threatening emergency call 999.</p>
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'non-urgent (blue)': {
    context: {
      heading: 'Speak to a GP if:',
      headingLevel: 3,
      type: 'non-urgent'
    },
    callBlock: outdent`
      <ul>
        <li>you're not sure it's chickenpox</li>
        <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
        <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
        <li>you're concerned about your child or they get worse</li>
      </ul>
      <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'urgent (red)': {
    context: {
      heading: 'Ask for an urgent GP appointment if:',
      headingLevel: 3,
      type: 'urgent'
    },
    callBlock: outdent`
      <ul>
        <li>you're an adult and have chickenpox</li>
        <li>you're pregnant and haven't had chickenpox before and you've been near someone with it</li>
        <li>you have a weakened immune system and you've been near someone with chickenpox</li>
        <li>you think your newborn baby has chickenpox</li>
      </ul>
      <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'emergency (red and black)': {
    context: {
      heading: 'Call 999 if you have sudden chest pain that:',
      headingLevel: 3,
      type: 'emergency'
    },
    callBlock: outdent`
      <ul>
        <li>spreads to your arms, back, neck or jaw</li>
        <li>makes your chest feel tight or heavy</li>
        <li>also started with shortness of breath, sweating and feeling or being sick</li>
      </ul>
      <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
    `,
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'emergency (red and black) with action link': {
    context: {
      heading: 'Call 999 or go to A&E now if:',
      headingLevel: 3,
      type: 'emergency'
    },
    callBlock: outdent`
      <ul>
        <li>you're coughing up more than just a few spots or streaks of blood – this could be a sign of serious bleeding in your lungs</li>
        <li>you have severe difficulty breathing – you're gasping, choking or not able to get words out</li>
      </ul>

      ${components.render('action-link', {
        context: {
          classes: 'nhsuk-action-link--reverse',
          text: 'Find your nearest A&E',
          href: '#'
        }
      })}
    `
  },
  'primary (with chevron)': {
    context: {
      href: '#',
      primary: true,
      clickable: true,
      heading: 'Breast screening',
      headingClasses: 'nhsuk-heading-m'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'primary (with chevron and description)': {
    context: {
      href: '#',
      primary: true,
      clickable: true,
      heading: 'Introduction to care and support',
      headingClasses: 'nhsuk-heading-m',
      description:
        'A quick guide for people who have care and support needs and their carers'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'clickable': {
    context: {
      href: '#',
      clickable: true,
      heading: 'Introduction to care and support',
      headingClasses: 'nhsuk-heading-m',
      description:
        'A quick guide for people who have care and support needs and their carers'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'secondary': {
    context: {
      href: '#',
      clickable: true,
      secondary: true,
      heading: 'Urgent and emergency care services',
      headingClasses: 'nhsuk-heading-m',
      description:
        'Services the NHS provides if you need urgent or emergency medical help'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'secondary non-clickable with custom description': {
    context: {
      href: '#',
      secondary: true,
      heading: 'Why we are reinvesting in the NHS Prototype kit',
      headingClasses: 'nhsuk-u-font-size-22 nhsuk-u-margin-bottom-2',
      descriptionHtml:
        '<p class="nhsuk-body-s nhsuk-u-margin-bottom-2">21 July 2025</p><p class="nhsuk-card__description">Frankie and Mike explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it.</p>'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'feature': {
    context: {
      feature: true,
      href: '#',
      heading: 'Feature card heading',
      headingClasses: 'nhsuk-heading-m',
      description: 'Feature card description.'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with image': {
    context: {
      imgURL:
        'https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg',
      href: '#',
      clickable: true,
      heading: 'Exercise',
      headingClasses: 'nhsuk-heading-m',
      description:
        'Programmes, workouts and tips to get you moving and improve your fitness and wellbeing'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'top task': {
    context: {
      href: '#',
      clickable: true,
      headingLevel: 5,
      heading: 'Order a repeat prescription',
      headingClasses: 'nhsuk-heading-xs'
    },
    options: {
      width: 'one-third'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

/**
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
