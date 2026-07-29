'use strict';

var outdent = require('outdent');

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
      caption: {
        text: "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
      }
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "width": {
    context: {
      src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
      alt: "A person in a bright pink athletic top, listening to music, pauses for thought during a short training session."
    },
    variants: [{
      description: "with one-quarter",
      context: {
        width: "one-quarter"
      }
    }, {
      description: "with one-third",
      context: {
        width: "one-third"
      }
    }, {
      description: "with one-half",
      context: {
        width: "one-half"
      }
    }, {
      description: "with two-thirds",
      context: {
        width: "two-thirds"
      }
    }, {
      description: "with three-quarters",
      context: {
        width: "three-quarters"
      }
    }, {
      description: "with full",
      context: {
        width: "full"
      }
    }]
  },
  "with srcset": {
    context: {
      src: "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg",
      sizes: "(max-width: 768px) 100vw, 66vw",
      srcset: "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg 600w, /nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg 1000w",
      caption: {
        text: "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
      }
    }
  },
  "with srcset and alt text": {
    context: {
      src: "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg",
      sizes: "(max-width: 768px) 100vw, 66vw",
      srcset: "/nhsuk-frontend/assets/example-image-stretch-marks-600w.jpg 600w, /nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg 1000w",
      alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
      caption: {
        text: "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
      }
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "without caption": {
    context: {
      src: "/nhsuk-frontend/assets/example-image-stretch-marks-1000w.jpg",
      alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin."
    }
  },
  "without background": {
    context: {
      background: false,
      src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
      caption: {
        text: "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
      }
    }
  },
  "without border": {
    context: {
      border: false,
      src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
      caption: {
        text: "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
      }
    },
    options: {
      layout: "background-blue"
    }
  },
  "without background, border or caption": {
    context: {
      background: false,
      border: false,
      src: "/nhsuk-frontend/assets/example-image-exercise.jpg",
      alt: "A person in a bright pink athletic top, listening to music, pauses for thought during a short training session."
    },
    options: {
      layout: "background-blue"
    },
    screenshot: {
      viewports: ["mobile", "tablet", "desktop"]
    }
  },
  "with custom HTML": {
    context: {
      caption: {
        text: "No specific amount of time is recommended, but a typical training session could take less than 20 minutes."
      }
    },
    callBlock: outdent.outdent`
      <img src="/nhsuk-frontend/assets/example-image-exercise.jpg" alt="">
    `
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
