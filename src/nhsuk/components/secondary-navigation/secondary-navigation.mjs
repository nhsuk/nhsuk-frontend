import { Component } from '../../component.mjs'

/**
 * Secondary navigation component
 *
 * At mobile breakpoints, CSS defaults to a vertically stacked layout.
 * When JS is available, this component measures whether all navigation items
 * fit side-by-side and — if they do — adds the `--horizontal` modifier class
 * so CSS can switch to a wrapping row layout.
 *
 * The `--vertical` modifier opts out of this behaviour: the list stays
 * stacked at all breakpoints regardless.
 *
 * @augments {Component}
 */
export class SecondaryNavigation extends Component {
  /** @type {HTMLElement | null} */
  $list = null

  /** @type {MediaQueryList | null} */
  mobileMediaQuery = null

  /** @type {ResizeObserver | null} */
  resizeObserver = null

  /** @type {number | null} */
  updateTimer = null

  /** @type {FrameRequestCallback} */
  handleUpdate = this.updateLayout.bind(this)

  /** @type {() => void} */
  handleResize = this.onResize.bind(this)

  /**
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root)

    // The --vertical variant is always stacked; no JS behaviour needed
    if (this.$root.classList.contains('nhsuk-secondary-navigation--vertical')) {
      return
    }

    const $list = this.$root.querySelector('.nhsuk-secondary-navigation__list')

    if (!($list instanceof HTMLElement)) {
      return
    }

    this.$list = $list

    // "until tablet" matches the nhsuk-frontend tablet breakpoint (641px).
    // Media query em units are relative to the browser's default font size,
    // so 40em = 640px, matching the $until: tablet sass-mq output.
    this.mobileMediaQuery = window.matchMedia('(max-width: 40em)')

    window.addEventListener('resize', this.handleResize)

    // ResizeObserver catches text-only zoom and container size changes
    // that don't fire a window resize event
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        window.dispatchEvent(new Event('resize'))
      })

      this.resizeObserver.observe(this.$list)
    }

    this.updateLayout()
  }

  /**
   * Handle resize events (throttled via requestAnimationFrame)
   */
  onResize() {
    if (this.updateTimer) {
      window.cancelAnimationFrame(this.updateTimer)
    }

    this.updateTimer = window.requestAnimationFrame(this.handleUpdate)
  }

  /**
   * Measure whether all navigation items fit in a single horizontal row
   * and toggle the `--horizontal` modifier class accordingly.
   *
   * Only runs at mobile breakpoints — at tablet+ the CSS media query
   * already provides a wrapping row layout without any JS involvement.
   */
  updateLayout() {
    this.updateTimer = null

    const { $root, $list, mobileMediaQuery } = this

    if (!$list || !mobileMediaQuery) {
      return
    }

    if (!mobileMediaQuery.matches) {
      // At tablet+ the CSS handles layout; ensure the mobile JS class is gone
      $root.classList.remove('nhsuk-secondary-navigation--horizontal')
      return
    }

    // Remove the horizontal class to take measurements from a known stacked
    // state, where the nav has its negative bleed margins applied.
    $root.classList.remove('nhsuk-secondary-navigation--horizontal')

    // Temporarily apply the horizontal class so links get their horizontal
    // padding (2px per side) rather than the stacked padding (16px per side).
    // This ensures naturalWidth reflects actual rendered horizontal widths.
    // All reads/writes happen in one synchronous block within a rAF frame so
    // the browser never paints the intermediate state.
    $root.classList.add('nhsuk-secondary-navigation--horizontal')

    // With --horizontal applied the nav has no bleed margins, so $root.offsetWidth
    // equals the parent's content width — the space available for the horizontal layout.
    const availableWidth = $root.offsetWidth

    // Force width: max-content so the list expands to its natural row width
    // rather than being constrained to the container. offsetWidth then reflects
    // the true total width of all items in a single row.
    $list.style.setProperty('width', 'max-content')
    const naturalWidth = $list.offsetWidth
    $list.style.removeProperty('width')

    $root.classList.toggle(
      'nhsuk-secondary-navigation--horizontal',
      naturalWidth <= availableWidth
    )

    $root.classList.toggle(
      'nhsuk-secondary-navigation--horizontal',
      naturalWidth <= availableWidth
    )
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-secondary-navigation'
}
