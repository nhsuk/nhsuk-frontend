export const name = 'Images'

/**
 * Nunjucks macro option params
 *
 * @satisfies {{ [param: string]: MacroParam }}
 */
export const params = {
  id: {
    type: 'string',
    required: false,
    description: 'The ID of the image.'
  },
  src: {
    type: 'string',
    required: true,
    description: 'The source location of the image.'
  },
  alt: {
    type: 'string',
    required: true,
    description: 'The alt text of the image.'
  },
  caption: {
    type: 'string',
    required: false,
    description: 'Optional caption text for the image.'
  },
  sizes: {
    type: 'string',
    required: false,
    description:
      'A list of screen sizes for the browser to load the correct image from the srcset images.'
  },
  srcset: {
    type: 'string',
    required: false,
    description:
      'A list of image source URLs and their respective sizes. Separate each image with a comma.'
  },
  classes: {
    type: 'string',
    required: false,
    description: 'Classes to add to the image container.'
  },
  attributes: {
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the image container.'
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
      src: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg',
      sizes: '(max-width: 768px) 100vw, 66vw',
      srcset:
        'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w',
      alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
      caption:
        'Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time.'
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
 * @import { MacroExample, MacroParam } from '@nhsuk/frontend-lib/components.mjs'
 */
