'use strict';

var component = require('../../component.js');

/**
 * Section navigation component
 */
class SectionNavigation extends component.Component {
  /**
   * Automatically toggles the `--horizontal` or `--vertical` modifier classes
   * based on the horizontal space available, unless already set.
   *
   * @param {Element | null} $root - HTML element to use for component
   */
  constructor($root) {
    super($root);

    // The --vertical variant is always stacked; no JS behaviour needed
    /** @type {HTMLElement | null} */
    this.$list = null;
    /** @type {MediaQueryList | null} */
    this.mobileMediaQuery = null;
    /** @type {ResizeObserver | null} */
    this.resizeObserver = null;
    /** @type {number | null} */
    this.updateTimer = null;
    /** @type {FrameRequestCallback} */
    this.handleUpdate = this.updateLayout.bind(this);
    /** @type {() => void} */
    this.handleResize = this.onResize.bind(this);
    if (this.$root.classList.contains('nhsuk-section-navigation--vertical')) {
      return;
    }
    const $list = this.$root.querySelector('.nhsuk-section-navigation__list');
    if (!($list instanceof HTMLElement)) {
      return;
    }
    this.$list = $list;

    // "until tablet" matches the nhsuk-frontend tablet breakpoint (641px).
    // Media query em units are relative to the browser's default font size,
    // so 40em = 640px, matching the $until: tablet sass-mq output.
    this.mobileMediaQuery = window.matchMedia('(max-width: 40em)');
    window.addEventListener('resize', this.handleResize);

    // ResizeObserver catches text-only zoom and container size changes
    // that don't fire a window resize event
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        window.dispatchEvent(new Event('resize'));
      });
      this.resizeObserver.observe(this.$list);
    }
    this.updateLayout();
  }

  /**
   * Handle resize events (throttled via requestAnimationFrame)
   */
  onResize() {
    if (this.updateTimer) {
      window.cancelAnimationFrame(this.updateTimer);
    }
    this.updateTimer = window.requestAnimationFrame(this.handleUpdate);
  }

  /**
   * Measure whether all navigation items fit in a single horizontal row
   * and toggle the `--horizontal` / `--vertical` modifier classes accordingly.
   */
  updateLayout() {
    this.updateTimer = null;
    const {
      $root,
      $list,
      mobileMediaQuery
    } = this;
    if (!$list || !mobileMediaQuery) {
      return;
    }

    // Reset both JS-managed modifiers before measuring from a known baseline.
    // On mobile, the base layout is stacked; at tablet+ it is horizontal.
    $root.classList.remove('nhsuk-section-navigation--horizontal');
    $root.classList.remove('nhsuk-section-navigation--vertical');

    // On mobile, temporarily apply the horizontal class so links get their
    // horizontal padding rather than the stacked padding. Tablet+ already uses
    // the horizontal layout by default.
    if (mobileMediaQuery.matches) {
      $root.classList.add('nhsuk-section-navigation--horizontal');
    }

    // With the horizontal layout applied, $root.offsetWidth reflects the space
    // available for the navigation to sit on one row.
    const availableWidth = $root.offsetWidth;

    // Force width: max-content so the list expands to its natural row width
    // rather than being constrained to the container. offsetWidth then reflects
    // the true total width of all items in a single row.
    $list.style.setProperty('width', 'max-content');
    const naturalWidth = $list.offsetWidth;
    $list.style.removeProperty('width');
    const fitsHorizontally = naturalWidth <= availableWidth;
    $root.classList.toggle('nhsuk-section-navigation--horizontal', mobileMediaQuery.matches && fitsHorizontally);
    $root.classList.toggle('nhsuk-section-navigation--vertical', !fitsHorizontally);
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}
SectionNavigation.moduleName = 'nhsuk-section-navigation';

exports.SectionNavigation = SectionNavigation;
//# sourceMappingURL=section-navigation.js.map
