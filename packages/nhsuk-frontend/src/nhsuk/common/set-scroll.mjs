/**
 * Scroll to element
 *
 * If the element is in the bottom half of the screen we scroll it into view,
 * avoiding situations where the input either ends up off the screen or is
 * obscured by a software keyboard
 *
 * @param {HTMLElement} $target - HTML element to scroll to
 * @param {SetScrollOptions & ScrollIntoViewOptions} [options] - Scroll options
 */
export function setScroll($target, options = {}) {
  const { scrollTo = [], threshold } = options

  // Add target element to list of (non-empty) targets
  const $targets = (Array.isArray(scrollTo) ? scrollTo : [scrollTo])
    .filter(($element) => !!$element)
    .concat([$target])

  // Cache the bounding box for each scroll target
  const candidates = new Map(
    $targets.map(($element, index) => [
      $element,
      {
        $elements: $targets.slice(index),
        bounds: $element.getBoundingClientRect()
      }
    ])
  )

  /**
   * @param {Element[]} $elements
   * @param {{ offset?: number }} [options]
   */
  function getResults($elements, { offset } = {}) {
    return $elements.filter(($candidate) => {
      const bounds = candidates.get($candidate)?.bounds
      const side = $candidate === $target ? 'all' : 'top'

      return !isInView(bounds, { offset, side, threshold })
    })
  }

  const $targetsOutOfView = getResults($targets)

  for (const [$element, candidate] of candidates) {
    const { $elements, bounds } = candidate

    // Check for elements out of view
    const $outOfView = $elements.filter(($candidate) =>
      $targetsOutOfView.includes($candidate)
    )

    // Skip scroll when all elements in view
    if (!$outOfView.length) {
      return
    }

    // Check again, but scroll (virtually) to the element
    const $outOfViewOffset = getResults($outOfView, {
      offset: $element === $target ? 0 : -bounds.top
    })

    // All in view now? Scroll to the element
    if (!$outOfViewOffset.length) {
      $element.scrollIntoView(options)
      return
    }
  }

  // Scroll to the default target
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
 * @property {(Element | null | undefined)[] | Element | null | undefined} [scrollTo] - Additional HTML elements to try scrolling to, should the target element stay in view
 * @property {number} [threshold=50] - The percentage value of the viewport height considered within view
 */
