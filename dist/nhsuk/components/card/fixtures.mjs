import { outdent } from 'outdent';
import { components } from '#lib';

let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7,
  _t8,
  _t9,
  _t0,
  _t1,
  _t10,
  _t11,
  _t12,
  _t13,
  _t14,
  _t15,
  _t16,
  _t17,
  _t18,
  _t19,
  _t20,
  _t21,
  _t22,
  _t23,
  _t24;

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      heading: "If you need help now, but it's not an emergency",
      headingLevel: 3
    },
    callBlock: outdent(_t || (_t = _`
      <p class="nhsuk-card__description">Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>
    `)),
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'basic without heading': {
    context: {
      description: 'A quick guide for people who have care and support needs and their carers'
    }
  },
  'basic with heading link': {
    context: {
      href: '#',
      heading: 'Introduction to care and support',
      headingSize: 'm',
      headingLevel: 3,
      description: 'A quick guide for people who have care and support needs and their carers'
    }
  },
  'basic with custom HTML': {
    context: {
      heading: 'Help from NHS 111',
      headingLevel: 3
    },
    callBlock: outdent(_t2 || (_t2 = _`
      <p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
      <p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
      <p class="nhsuk-body">For a life-threatening emergency call 999.</p>
    `)),
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'basic with summary list': {
    context: {
      heading: 'Regional Manager',
      headingLevel: 3
    },
    callBlock: outdent(_t3 || (_t3 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    })),
    screenshot: {
      viewports: ['mobile', 'tablet']
    }
  },
  'basic with summary lists': {
    context: {
      heading: 'Regional Managers',
      headingLevel: 3
    },
    callBlock: outdent(_t4 || (_t4 = _`
      <h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">East</h4>
      ${0}

      <h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">West</h4>
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Sarah Philips'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '5 January 1978'
          }
        }]
      }
    })),
    screenshot: {
      viewports: ['mobile', 'tablet']
    }
  },
  'basic with summary list and button': {
    context: {
      heading: 'Regional Manager',
      headingLevel: 3
    },
    callBlock: outdent(_t5 || (_t5 = _`
      ${0}

      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }), components.render('button', {
      context: {
        text: 'Add role',
        classes: 'nhsuk-button--secondary'
      }
    })),
    screenshot: {
      viewports: ['mobile', 'tablet']
    }
  },
  'basic with summary list and actions': {
    context: {
      heading: 'Regional Manager',
      headingLevel: 3,
      actions: {
        items: [{
          text: 'Delete',
          href: '#/delete'
        }, {
          text: 'Withdraw',
          href: '#/withdraw'
        }]
      }
    },
    callBlock: outdent(_t6 || (_t6 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'basic with summary list and actions, without heading': {
    context: {
      actions: {
        items: [{
          text: 'Delete',
          visuallyHiddenText: '(Karen Francis)',
          href: '#/delete'
        }, {
          text: 'Withdraw',
          visuallyHiddenText: '(Karen Francis)',
          href: '#/withdraw'
        }]
      }
    },
    callBlock: outdent(_t7 || (_t7 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'basic with summary list and actions (empty items)': {
    context: {
      heading: 'Regional Manager',
      headingLevel: 3,
      actions: {
        items: [{
          text: 'Delete',
          href: '#/delete'
        }, false]
      }
    },
    callBlock: outdent(_t8 || (_t8 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'basic with summary list and heading link': {
    context: {
      href: '#',
      heading: 'Regional Manager',
      headingLevel: 3
    },
    callBlock: outdent(_t9 || (_t9 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'secondary without heading': {
    context: {
      secondary: true,
      description: 'A quick guide for people who have care and support needs and their carers'
    }
  },
  'secondary with heading link': {
    context: {
      href: '#',
      secondary: true,
      heading: 'Introduction to care and support',
      headingSize: 'm',
      headingLevel: 3,
      description: 'A quick guide for people who have care and support needs and their carers'
    }
  },
  'secondary with custom HTML': {
    context: {
      secondary: true,
      heading: 'Help from NHS 111',
      headingLevel: 3
    },
    callBlock: outdent(_t0 || (_t0 = _`
      <p class="nhsuk-body">If you're worried about a symptom and not sure what help you need, NHS 111 can tell you what to do next.</p>
      <p class="nhsuk-body">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
      <p class="nhsuk-body">For a life-threatening emergency call 999.</p>
    `))
  },
  'secondary with summary list': {
    context: {
      secondary: true,
      heading: 'Regional Manager',
      headingLevel: 3
    },
    callBlock: outdent(_t1 || (_t1 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'secondary with summary lists': {
    context: {
      secondary: true,
      heading: 'Regional Managers',
      headingLevel: 3
    },
    callBlock: outdent(_t10 || (_t10 = _`
      <h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">East</h4>
      ${0}

      <h4 class="nhsuk-heading-s nhsuk-u-margin-bottom-1">West</h4>
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Sarah Philips'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '5 January 1978'
          }
        }]
      }
    }))
  },
  'secondary with summary list and button': {
    context: {
      secondary: true,
      heading: 'Regional Manager',
      headingLevel: 3
    },
    callBlock: outdent(_t11 || (_t11 = _`
      ${0}

      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }), components.render('button', {
      context: {
        text: 'Add role',
        classes: 'nhsuk-button--secondary'
      }
    }))
  },
  'secondary with summary list and actions': {
    context: {
      secondary: true,
      heading: 'Regional Manager',
      headingLevel: 3,
      actions: {
        items: [{
          text: 'Delete',
          href: '#/delete'
        }, {
          text: 'Withdraw',
          href: '#/withdraw'
        }]
      }
    },
    callBlock: outdent(_t12 || (_t12 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'secondary with summary list and actions, without heading': {
    context: {
      secondary: true,
      actions: {
        items: [{
          text: 'Delete',
          visuallyHiddenText: '(Karen Francis)',
          href: '#/delete'
        }, {
          text: 'Withdraw',
          visuallyHiddenText: '(Karen Francis)',
          href: '#/withdraw'
        }]
      }
    },
    callBlock: outdent(_t13 || (_t13 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'secondary with summary list and actions (empty items)': {
    context: {
      secondary: true,
      heading: 'Regional Manager',
      headingLevel: 3,
      actions: {
        items: [{
          text: 'Delete',
          href: '#/delete'
        }, false]
      }
    },
    callBlock: outdent(_t14 || (_t14 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'secondary with summary list and heading link': {
    context: {
      href: '#',
      secondary: true,
      heading: 'Regional Manager',
      headingLevel: 3
    },
    callBlock: outdent(_t15 || (_t15 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'non-urgent (blue)': {
    context: {
      heading: 'Speak to a GP if:',
      headingLevel: 3,
      type: 'non-urgent'
    },
    callBlock: outdent(_t16 || (_t16 = _`
      <ul>
        <li>you're not sure it's chickenpox</li>
        <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
        <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
        <li>you're concerned about your child or they get worse</li>
      </ul>
      <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
    `)),
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
    callBlock: outdent(_t17 || (_t17 = _`
      <ul>
        <li>you're an adult and have chickenpox</li>
        <li>you're pregnant and haven't had chickenpox before and you've been near someone with it</li>
        <li>you have a weakened immune system and you've been near someone with chickenpox</li>
        <li>you think your newborn baby has chickenpox</li>
      </ul>
      <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
    `)),
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
    callBlock: outdent(_t18 || (_t18 = _`
      <ul>
        <li>spreads to your arms, back, neck or jaw</li>
        <li>makes your chest feel tight or heavy</li>
        <li>also started with shortness of breath, sweating and feeling or being sick</li>
      </ul>
      <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
    `)),
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
    callBlock: outdent(_t19 || (_t19 = _`
      <ul>
        <li>you're coughing up more than just a few spots or streaks of blood – this could be a sign of serious bleeding in your lungs</li>
        <li>you have severe difficulty breathing – you're gasping, choking or not able to get words out</li>
      </ul>

      ${0}
    `), components.render('action-link', {
      context: {
        classes: 'nhsuk-action-link--reverse',
        text: 'Find your nearest A&E',
        href: '#'
      }
    }))
  },
  'primary (with chevron)': {
    context: {
      href: '#',
      primary: true,
      clickable: true,
      heading: 'Breast screening',
      headingSize: 'm'
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
      headingSize: 'm',
      description: 'A quick guide for people who have care and support needs and their carers'
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
      headingSize: 'm',
      description: 'A quick guide for people who have care and support needs and their carers'
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
      headingSize: 'm',
      description: 'Services the NHS provides if you need urgent or emergency medical help'
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
      descriptionHtml: outdent(_t20 || (_t20 = _`
        <p class="nhsuk-body-s nhsuk-u-margin-bottom-2">21 July 2025</p>
        <p class="nhsuk-card__description">Frankie and Mike explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it.</p>
      `))
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
  'feature with A to Z content': {
    context: {
      feature: true,
      heading: 'A',
      headingId: 'a',
      headingSize: 'm',
      descriptionHtml: outdent(_t21 || (_t21 = _`
        <ul class="nhsuk-list nhsuk-list--border">
          <li><a href="#/conditions/abdominal-aortic-aneurysm/">AAA, see Abdominal aortic aneurysm</a></li>
          <li><a href="#/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a></li>
          <li><a href="#/conditions/abscess/">Abscess</a></li>
        </ul>
      `))
    }
  },
  'feature with summary list': {
    context: {
      feature: true,
      heading: 'Feature card heading'
    },
    callBlock: outdent(_t22 || (_t22 = _`
      ${0}
    `), components.render('summary-list', {
      context: {
        rows: [{
          key: {
            text: 'Name'
          },
          value: {
            text: 'Karen Francis'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Date of birth'
          },
          value: {
            text: '15 March 1984'
          }
        }]
      }
    }))
  },
  'feature with nested card and summary list': {
    context: {
      feature: true,
      heading: 'Flu: Follow-up requested'
    },
    callBlock: outdent(_t23 || (_t23 = _`
      <p>Sarah Philips (Mum) would like to speak to a member of the team about other options for their child's vaccination.</p>
      <a class="nhsuk-button nhsuk-button--secondary" href="#">Record a new consent response</a>

      <h3 class="nhsuk-heading-s">Consent responses</h3>

      ${0}
    `), components.render('summary-list', {
      context: {
        card: {
          href: '#',
          clickable: true,
          heading: 'Sarah Philips (Mum)',
          headingLevel: 4
        },
        rows: [{
          key: {
            text: 'Email address'
          },
          value: {
            text: 'sarah.philips@example.com'
          }
        }, {
          key: {
            text: 'Date'
          },
          value: {
            text: '25 August 2025 at 4:04 pm'
          }
        }, {
          classes: 'nhsuk-summary-list__row--no-border',
          key: {
            text: 'Response'
          },
          value: {
            html: components.render('tag', {
              context: {
                text: 'Follow up requested',
                classes: 'nhsuk-tag--orange'
              }
            })
          }
        }]
      }
    }))
  },
  'warning': {
    context: {
      warning: true,
      heading: 'School, nursery or work',
      description: 'Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.'
    }
  },
  'warning with actions': {
    context: {
      warning: true,
      heading: 'School, nursery or work',
      description: 'Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.',
      actions: {
        items: [{
          text: 'Dismiss',
          href: '#/dismiss'
        }]
      }
    }
  },
  'with image': {
    context: {
      image: {
        src: 'https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg'
      },
      href: '#',
      clickable: true,
      heading: 'Exercise',
      headingSize: 'm',
      description: 'Programmes, workouts and tips to get you moving and improve your fitness and wellbeing'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with image and caption': {
    context: {
      image: {
        html: components.render('images', {
          context: {
            src: 'https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg',
            caption: {
              classes: 'nhsuk-u-secondary-text-colour',
              text: 'No specific amount of time is recommended, but a typical training session could take less than 20 minutes.'
            }
          }
        })
      },
      href: '#',
      clickable: true,
      heading: 'Exercise',
      headingSize: 'm',
      description: 'Programmes, workouts and tips to get you moving and improve your fitness and wellbeing'
    }
  },
  'with image and custom HTML': {
    context: {
      image: {
        src: 'https://service-manual.nhs.uk/assets/blog-prototype-kit.png'
      },
      href: 'https://digital.nhs.uk/blog/design-matters/2025/why-we-are-reinvesting-in-the-nhs-prototype-kit',
      clickable: true,
      heading: 'Why we are reinvesting in the NHS prototype kit',
      headingSize: 'm',
      headingHtml: outdent(_t24 || (_t24 = _`
        <p class="nhsuk-body-s nhsuk-u-secondary-text-colour nhsuk-u-margin-bottom-0"><span class="nhsuk-u-visually-hidden">Published on: </span>21 July 2025</p>
        <p class="nhsuk-body-s nhsuk-u-font-weight-bold">NHS England Design Matters blog</p>
      `)),
      description: 'Frankie Roberto and Mike Gallagher explain why we revived the NHS prototype kit, the benefits of prototyping in code and how digital teams in the NHS can get started using it.'
    },
    options: {
      width: 'one-half'
    }
  },
  'top task': {
    context: {
      href: '#',
      clickable: true,
      heading: 'Order a repeat prescription',
      headingSize: 'xs',
      headingLevel: 3
    },
    options: {
      width: 'one-third'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
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

export { examples };
//# sourceMappingURL=fixtures.mjs.map
