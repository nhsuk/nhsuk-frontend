/**
 * @param {string} text
 * @returns {number}
 */
export function codePointCount(text) {
  if (typeof text !== 'string') {
    throw new TypeError('codePointCount expects a string argument')
  }

  let count = 0
  let i = 0

  while (i < text.length) {
    const codePoint = text.codePointAt(i)
    if (codePoint !== undefined) {
      count++
      i += codePoint > 0xffff ? 2 : 1
    } else {
      i++
    }
  }

  return count
}

/**
 * @param {string} text
 * @returns {number}
 */
export function graphemeCount(text) {
  if (typeof text !== 'string') {
    throw new TypeError('graphemeCount expects a string argument')
  }

  if ('Segmenter' in Intl) {
    try {
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' })
      return [...segmenter.segment(text)].length
    } catch (_) {
      void _
    }
  }

  return codePointCount(text)
}
