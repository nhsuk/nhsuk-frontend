'use strict';

var outdent = require('outdent');

/* eslint-disable no-irregular-whitespace */

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
const variants = [{
  // Regular variant
}, {
  description: "reverse",
  context: {
    variant: "reverse"
  },
  options: {
    layout: "background-blue"
  }
}];

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
    },
    options: {
      width: "full"
    }
  },
  "with HTML": {
    context: {
      html: outdent.outdent`
        <h1 class="nhsuk-heading-m" id="example-heading">Example heading</h1>
        <p class="nhsuk-body">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        <p class="nhsuk-body">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
        <p class="nhsuk-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Bibendum commodo ullamcorper vulputate. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.</p>
      `,
      labelledBy: "example-heading"
    },
    options: {
      width: "full"
    }
  },
  "with HTML via call block": {
    context: {
      labelledBy: "example-heading"
    },
    callBlock: outdent.outdent`
      <h1 class="nhsuk-heading-m" id="example-heading">Example heading</h1>
        <p class="nhsuk-body">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        <p class="nhsuk-body">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
        <p class="nhsuk-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Bibendum commodo ullamcorper vulputate. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.</p>
    `,
    options: {
      width: "full"
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

exports.examples = examples;
exports.variants = variants;
//# sourceMappingURL=fixtures.js.map
