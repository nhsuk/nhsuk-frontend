import { components } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

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
  'basic with heading link': {
    context: {
      heading: 'Introduction to care and support',
      headingClasses: 'nhsuk-heading-m',
      headingLevel: 3,
      href: '#',
      description:
        'A quick guide for people who have care and support needs and their carers'
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
  'basic with summary list': {
    context: {
      heading: 'Regional Manager',
      headingLevel: 3
    },
    callBlock: outdent`
      ${components.render('summary-list', {
        context: {
          rows: [
            {
              key: {
                text: 'Name'
              },
              value: {
                text: 'Karen Francis'
              }
            },
            {
              key: {
                text: 'Date of birth'
              },
              value: {
                text: '15 March 1984'
              }
            }
          ]
        }
      })}
    `
  },
  'basic with summary list and heading link': {
    context: {
      heading: 'Regional Manager',
      headingLevel: 3,
      href: '#'
    },
    callBlock: outdent`
      ${components.render('summary-list', {
        context: {
          rows: [
            {
              key: {
                text: 'Name'
              },
              value: {
                text: 'Karen Francis'
              }
            },
            {
              key: {
                text: 'Date of birth'
              },
              value: {
                text: '15 March 1984'
              }
            }
          ]
        }
      })}
    `
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
      descriptionHtml: outdent`
        <p class="nhsuk-body-s nhsuk-u-margin-bottom-2">21 July 2025</p>
        <p class="nhsuk-card__description">Frankie and Mike explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it.</p>
      `
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'feature': {
    context: {
      feature: true,
      heading: 'Feature card heading',
      description: 'Feature card description.'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'feature with summary list': {
    context: {
      feature: true,
      heading: 'Feature card heading'
    },
    callBlock: outdent`
      ${components.render('summary-list', {
        context: {
          rows: [
            {
              key: {
                text: 'Name'
              },
              value: {
                text: 'Karen Francis'
              }
            },
            {
              key: {
                text: 'Date of birth'
              },
              value: {
                text: '15 March 1984'
              }
            }
          ]
        }
      })}
    `
  },
  'feature with nested card and summary list': {
    context: {
      feature: true,
      heading: 'Flu: Follow-up requested'
    },
    callBlock: outdent`
      <p>Sarah Philips (Mum) would like to speak to a member of the team about other options for their child's vaccination.</p>
      <a class="nhsuk-button nhsuk-button--secondary" href="#">Record a new consent response</a>

      <h3 class="nhsuk-heading-s">Consent responses</h3>

      ${components.render('card', {
        context: {
          href: '#',
          clickable: true,
          heading: 'Sarah Philips (Mum)',
          headingLevel: 4
        },
        callBlock: outdent`
          ${components.render('summary-list', {
            context: {
              rows: [
                {
                  key: {
                    text: 'Email address'
                  },
                  value: {
                    text: 'sarah.philips@example.com'
                  }
                },
                {
                  key: {
                    text: 'Date'
                  },
                  value: {
                    text: '25 August 2025 at 4:04 pm'
                  }
                },
                {
                  classes: 'nhsuk-summary-list__row--no-border',
                  key: {
                    text: 'Response'
                  },
                  value: {
                    html: outdent`
                      ${components.render('tag', {
                        context: {
                          text: 'Follow up requested',
                          classes: 'nhsuk-tag--orange'
                        }
                      })}
                    `
                  }
                }
              ]
            }
          })}
        `
      })}
    `
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
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
