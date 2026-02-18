import { outdent } from 'outdent';

let _ = t => t,
  _t;

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  default: {
    callBlock: outdent(_t || (_t = _`
      <p>You can report any suspected side effect using the <a href="#">Yellow Card safety scheme</a>.</p>
    `)),
    screenshot: true
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
