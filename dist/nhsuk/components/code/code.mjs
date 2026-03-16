import { closestAttributeValue } from '../../common/closest-attribute-value.mjs';
import '../../common/configuration/index.mjs';
import { formatErrorMessage } from '../../common/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { ElementError, SupportError } from '../../errors/index.mjs';
import { I18n } from '../../i18n.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

/**
 * Code component
 *
 * @augments {ConfigurableComponent<CodeConfig>}
 */
class Code extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<CodeConfig>} [config] - Code config
   */
  constructor($root, config = {}) {
    super($root, config);
    /** @type {HTMLButtonElement | null} */
    this.$button = null;
    /** @type {HTMLElement | null} */
    this.$screenReaderStatusMessage = null;
    /** @type {number | null} */
    this.resetTimeoutId = null;
    const {
      i18n,
      containerClass,
      contentClass
    } = this.config;
    this.i18n = new I18n(i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    });
    const $container = this.$root.querySelector(`.${containerClass}`);
    if (!($container instanceof HTMLPreElement)) {
      throw new ElementError({
        component: Code,
        element: $container,
        expectedType: 'HTMLPreElement',
        identifier: `Code container (\`.${containerClass}\`)`
      });
    }
    this.$container = $container;
    const $content = this.$root.querySelector(`.${contentClass}`);
    if (!($content instanceof HTMLElement)) {
      throw new ElementError({
        component: Code,
        element: $content,
        identifier: `Code content (\`.${contentClass}\`)`
      });
    }
    this.$content = $content;
    const $button = this.$root.querySelector('.nhsuk-js-code-button');
    if ($button) {
      if (!($button instanceof HTMLButtonElement)) {
        throw new ElementError({
          component: Code,
          element: $button,
          expectedType: 'HTMLButtonElement',
          identifier: 'Button (`.nhsuk-js-code-button`)'
        });
      }
      if ($button.type !== 'button') {
        throw new ElementError({
          component: Code,
          element: $button,
          expectedType: 'HTMLButtonElement with type="button"',
          identifier: 'Button (`.nhsuk-js-code-button`)'
        });
      }
      this.$button = $button;
      this.setupButton();
      this.enableButton();
    }
    this.handleEnableFocus = this.enableFocus.bind(this);

    // ResizeObserver isn't supported by Safari < 13.1 so we need to fall back
    // to window resize, checking the container width has actually changed
    if ('ResizeObserver' in window) {
      this.resizeObserver = new window.ResizeObserver(this.handleEnableFocus);
      this.resizeObserver.observe(this.$content);
    } else {
      // @ts-expect-error Property 'addEventListener' does not exist
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      window.addEventListener('resize', this.handleEnableFocus);
    }
  }

  /**
   * Set up copy button
   */
  setupButton() {
    const {
      $button,
      $screenReaderStatusMessage
    } = this;
    if (!$button) {
      return;
    }
    const {
      screenReaderStatusMessageClass
    } = this.config;

    // Set default button text
    $button.textContent = this.i18n.t('copyButton');

    // Set default status text for screen readers
    if ($screenReaderStatusMessage) {
      $screenReaderStatusMessage.textContent = '';
      return;
    }

    // Create and append the status text for screen readers
    this.$screenReaderStatusMessage = document.createElement('div');
    this.$screenReaderStatusMessage.setAttribute('aria-live', 'polite');
    this.$screenReaderStatusMessage.classList.add(screenReaderStatusMessageClass, 'nhsuk-u-visually-hidden');
    $button.insertAdjacentElement('afterend', this.$screenReaderStatusMessage);
  }

  /**
   * Enable copy button
   */
  enableButton() {
    const {
      $button
    } = this;
    if (!($button != null && $button.hasAttribute('hidden'))) {
      return;
    }

    // Show the copy button
    $button.removeAttribute('hidden');
    $button.addEventListener('click', () => this.copy());
  }

  /**
   * Enable container focus
   */
  enableFocus() {
    if (Code.isOverflowing(this.$content)) {
      this.$content.setAttribute('tabindex', '0');
    } else {
      this.$content.removeAttribute('tabindex');
    }
  }

  /**
   * Copy the code
   */
  copy() {
    navigator.clipboard.writeText(this.$container.textContent).then(() => this.copied()).catch(() => this.reset());
  }

  /**
   * Copy to clipboard success
   */
  copied() {
    const {
      $button,
      $screenReaderStatusMessage
    } = this;
    if (!$button || !$screenReaderStatusMessage) {
      return;
    }
    $button.textContent = this.i18n.t('copiedButton');
    $screenReaderStatusMessage.textContent = this.i18n.t('copiedAnnouncement');

    // Reset button after 5 seconds
    this.reset(5000);
  }

  /**
   * Copy to clipboard reset
   *
   * @param {number} [timeout] - Button text reset timeout
   */
  reset(timeout = 0) {
    const {
      $button,
      resetTimeoutId
    } = this;
    if (!$button) {
      return;
    }
    if (resetTimeoutId) {
      window.clearTimeout(resetTimeoutId);
    }

    // Reset button after timeout
    this.resetTimeoutId = window.setTimeout(() => this.setupButton(), timeout);
  }
  /**
   * Validates whether components are supported
   */
  static checkSupport() {
    ConfigurableComponent.checkSupport();
    if (!('clipboard' in navigator)) {
      throw new SupportError(formatErrorMessage(Code, 'Support for "navigator.clipboard" required'));
    }
  }

  /**
   * Checks if the elements scrollable width or height is greater than the
   * width or height the element is being rendered at.
   *
   * @param {Element} $element - The element to check
   * @returns {boolean} - Returns `true` if the given element is overflowing
   *   in either dimension, otherwise returns `false`
   */
  static isOverflowing($element) {
    return $element.scrollHeight > $element.clientHeight || $element.scrollWidth > $element.clientWidth;
  }

  /**
   * Password input default config
   *
   * @see {@link CodeConfig}
   * @constant
   * @type {CodeConfig}
   */
}

/**
 * Initialise code component
 *
 * @deprecated Use {@link createAll | `createAll(Code, options)`} instead.
 * @param {InitOptions & Partial<CodeConfig>} [options]
 */
Code.moduleName = 'nhsuk-code';
Code.defaults = Object.freeze({
  containerClass: 'nhsuk-code__container',
  contentClass: 'nhsuk-code__content',
  screenReaderStatusMessageClass: 'nhsuk-code__sr-status',
  i18n: {
    copyButton: 'Copy code',
    copiedButton: 'Code copied',
    copiedAnnouncement: 'Code copied to clipboard'
  }
});
/**
 * Code config schema
 *
 * @constant
 * @satisfies {Schema<CodeConfig>}
 */
Code.schema = Object.freeze({
  properties: {
    containerClass: {
      type: 'string'
    },
    contentClass: {
      type: 'string'
    },
    screenReaderStatusMessageClass: {
      type: 'string'
    },
    i18n: {
      type: 'object'
    }
  }
});
function initCode(options) {
  const {
    scope: $scope
  } = normaliseOptions(options);
  const $codes = $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Code.moduleName}"]`);
  $codes == null || $codes.forEach($root => {
    new Code($root);
  });
}

/**
 * Code config
 *
 * @see {@link Code.defaults}
 * @typedef {object} CodeConfig
 * @property {string} containerClass - Code container class for `<pre>` element
 * @property {string} contentClass - Code content class for `<code>` element
 * @property {string} screenReaderStatusMessageClass - Screen reader status message class
 * @property {CodeTranslations} [i18n=Code.defaults.i18n] - Code translations
 */

/**
 * Code translations
 *
 * @see {@link Code.defaults.i18n}
 * @typedef {object} CodeTranslations
 *
 * Messages displayed to the user indicating the state of the copy button.
 * @property {string} [copyButton] - Button text before the code is copied to clipboard
 * @property {string} [copiedButton] - Button text after the code is copied to clipboard
 * @property {string} [copiedAnnouncement] - Screen reader announcement to
 *   make when the code has just been copied.
 */

/**
 * @import { Schema } from '../../common/configuration/index.mjs'
 * @import { createAll, InitOptions } from '../../index.mjs'
 */

export { Code, initCode };
//# sourceMappingURL=code.mjs.map
