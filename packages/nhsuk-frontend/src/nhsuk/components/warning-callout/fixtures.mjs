/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      heading: 'Important',
      text: "For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements."
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with custom heading': {
    context: {
      heading: 'School, nursery or work',
      text: 'Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.'
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
