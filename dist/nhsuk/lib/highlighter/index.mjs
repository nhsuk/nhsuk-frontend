import hljs from 'highlight.js';
import * as index from './languages/index.mjs';

const highlighter = hljs.newInstance();
highlighter.configure({
  cssSelector: '.nhsuk-code__content',
  classPrefix: 'nhsuk-code__',
  languages: Object.keys(index),
  throwUnescapedHTML: true
});
for (const [key, language] of Object.entries(index)) {
  highlighter.registerLanguage(key, language);
}

export { highlighter };
//# sourceMappingURL=index.mjs.map
