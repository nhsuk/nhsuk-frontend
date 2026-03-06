import hljs from 'highlight.js'

import * as languages from './languages/index.mjs'

export const highlighter = hljs.newInstance()

highlighter.configure({
  cssSelector: '.nhsuk-code__container',
  classPrefix: 'nhsuk-code__',
  languages: Object.keys(languages),
  throwUnescapedHTML: true
})

for (const [key, language] of Object.entries(languages)) {
  highlighter.registerLanguage(key, language)
}
