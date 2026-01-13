/**
 * @param {string} text
 * @returns {number}
 */
export function graphemeCount(text) {
  if (typeof text !== 'string') {
    throw new TypeError('graphemeCount expects a string argument')
  }

  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    try {
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' })
      return [...segmenter.segment(text)].length
    } catch {
      // fallback for older browsers
    }
  }

  let result = 0
  let index = 0

  while (index < text.length) {
    const point = text.codePointAt(index)
    if (point === undefined) {
      index++
      continue
    }
    result++
    index += point > 0xffff ? 2 : 1
  }

  return result
}
