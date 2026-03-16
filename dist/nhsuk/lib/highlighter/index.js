'use strict';

var hljs = require('highlight.js');
var index = require('./languages/index.js');

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

exports.highlighter = highlighter;
//# sourceMappingURL=index.js.map
