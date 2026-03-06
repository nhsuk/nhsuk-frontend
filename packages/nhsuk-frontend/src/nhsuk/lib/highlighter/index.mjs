import hljs from 'highlight.js'

export const highlighter = hljs.newInstance()

highlighter.configure({
  cssSelector: '.nhsuk-code__container',
  classPrefix: 'nhsuk-code__',
  throwUnescapedHTML: true
})
