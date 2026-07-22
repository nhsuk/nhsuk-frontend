/**
 * Scroll to element
 *
 * @param {HTMLElement} $target - HTML element to scroll to
 * @param {SetScrollOptions} [options] - Scroll options
 */
export function setScroll($target, options = {}) {
  $target.scrollIntoView(options)
}

/**
 * @typedef {object} SetScrollOptions
 * @property {ScrollBehavior} [behavior] - Browser scroll behavior, e.g. 'smooth'
 */
