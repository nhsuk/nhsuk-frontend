/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      src: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg',
      sizes: '(max-width: 768px) 100vw, 66vw',
      srcset:
        'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w',
      alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
      caption: {
        text: 'Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time.'
      }
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'without caption': {
    context: {
      src: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg',
      alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin."
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
