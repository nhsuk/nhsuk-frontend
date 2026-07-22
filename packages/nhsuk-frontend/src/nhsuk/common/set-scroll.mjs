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
 * Check if target is in view
 *
 * @template {Element | DOMRect} TargetType
 * @param {TargetType | undefined} $target - HTML element or DOMRect to check
 * @param {{ offset?: number, side?: 'all' | 'top' } & SetScrollOptions} [options] - View options
 * @returns {$target is TargetType} Whether the target is in view
 */
export function isInView($target, options = {}) {
  if (!$target) {
    return false
  }

  const bounds = !($target instanceof DOMRect)
    ? $target.getBoundingClientRect()
    : $target

  const { offset = 0, side = 'all', threshold = 50 } = options
  const viewHeight = (window.innerHeight * threshold) / 100

  let { top, bottom } = bounds

  top += offset
  bottom += offset

  const isTopWithinView = top >= 0 && top < viewHeight
  const isBottomWithinView = bottom >= 0 && bottom <= viewHeight

  if (side === 'top') {
    return isTopWithinView
  }

  return isTopWithinView && isBottomWithinView
}

/**
 * @typedef {object} SetScrollOptions
 * @property {ScrollBehavior} [behavior] - Browser scroll behavior, e.g. 'smooth'
 * @property {number} [threshold=50] - The percentage value of the viewport height considered within view
 */
