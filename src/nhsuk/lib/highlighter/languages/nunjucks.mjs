/**
 * Highlight.js Nunjucks language
 *
 * @type {LanguageFn}
 */
export default function languageNunjucks(hljs) {
  return {
    name: 'Nunjucks',
    aliases: ['nj', 'njk', 'nunjucks'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      // Block comments
      {
        className: 'comment',
        begin: /\{%\s*comment\s*%\}/,
        end: /\{%\s*endcomment\s*%\}/
      },
      // Line comments
      {
        className: 'comment',
        begin: /\{#/,
        end: /#\}/
      },
      // Template variables
      {
        className: 'tag',
        begin: /\{\{\s*/,
        end: /\}\}/,
        contains: [
          {
            className: 'title',
            begin: /\b\w+(?=\s*\()/,
            relevance: 0
          },
          {
            begin: /\(\{/,
            end: /\}\)/,
            subLanguage: 'javascript'
          },
          {
            className: 'name',
            begin: /\w+/
          },
          {
            className: 'operator',
            begin: /\|/
          },
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE
        ]
      },
      // Template tags
      {
        className: 'tag',
        begin: /\{%-?\s*/,
        end: /-?%\}/,
        contains: [
          {
            className: 'keyword',
            begin:
              /\b(autoescape|endautoescape|block|endblock|for|endfor|if|endif|else|elif|include|extends|set|endset|filter|endfilter|with|endwith|macro|endmacro|call|endcall|raw|endraw|import|from|trans|endtrans|pluralize|debug|spaceless|endspaceless|csrf_token|cycle|url|lorem)\b/
          },
          {
            className: 'variable',
            begin: /\b\w+/,
            relevance: 0
          },
          {
            className: 'operator',
            begin: /\b(and|or|not|in|is|as|by)\b/
          },
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE
        ]
      }
    ]
  }
}

/**
 * @import { LanguageFn } from 'highlight.js'
 */
