import { highlighter } from '../../highlighter/index.mjs'

/**
 * Format code with syntax highlighting
 *
 * @param {string} code - Code in plain text
 * @param {string | string[]} [language] - Code programming language(s)
 * @returns {string} Code with syntax highlighting
 */
export function highlight(code, language = []) {
  const languages = language ? [language].flat() : undefined
  return highlighter.highlightAuto(code, languages).value
}
