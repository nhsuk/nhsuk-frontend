import { normaliseOptions } from '../../common/configuration/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'
import { I18n } from '../../i18n.mjs'

/**
 * Accordion component
 *
 * This allows a collection of sections to be collapsed by default, showing only
 * their headers. Sections can be expanded or collapsed individually by clicking
 * their headers. A "Show all sections" button is also added to the top of the
 * accordion, which switches to "Hide all sections" when all the sections are
 * expanded.
 *
 * The state of each section is saved to the DOM via the `aria-expanded`
 * attribute, which also provides accessibility.
 *
 * @augments {ConfigurableComponent<AccordionConfig>}
 */
export class Accordion extends ConfigurableComponent {
  controlsClass = 'nhsuk-accordion__controls'
  showAllClass = 'nhsuk-accordion__show-all'
  showAllTextClass = 'nhsuk-accordion__show-all-text'
  upChevronIconClass = 'nhsuk-accordion-nav__chevron'
  downChevronIconClass = 'nhsuk-accordion-nav__chevron--down'

  sectionClass = 'nhsuk-accordion__section'
  sectionExpandedClass = 'nhsuk-accordion__section--expanded'
  sectionButtonClass = 'nhsuk-accordion__section-button'
  sectionContentClass = 'nhsuk-accordion__section-content'
  sectionHeaderClass = 'nhsuk-accordion__section-header'
  sectionHeadingClass = 'nhsuk-accordion__section-heading'
  sectionHeadingDividerClass = 'nhsuk-accordion__section-heading-divider'
  sectionHeadingTextClass = 'nhsuk-accordion__section-heading-text'
  sectionHeadingTextFocusClass = 'nhsuk-accordion__section-heading-text-focus'
  sectionSummaryClass = 'nhsuk-accordion__section-summary'
  sectionSummaryFocusClass = 'nhsuk-accordion__section-summary-focus'

  sectionShowHideToggleClass = 'nhsuk-accordion__section-toggle'
  sectionShowHideToggleFocusClass = 'nhsuk-accordion__section-toggle-focus'
  sectionShowHideTextClass = 'nhsuk-accordion__section-toggle-text'

  /**
   * @type {HTMLButtonElement | null}
   */
  $showAllButton = null

  /**
   * @type {HTMLElement | null}
   */
  $showAllIcon = null

  /**
   * @type {HTMLElement | null}
   */
  $showAllText = null

  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<AccordionConfig>} [config] - Accordion config
   */
  constructor($root, config = {}) {
    super($root, config)

    this.i18n = new I18n(this.config.i18n)

    const $sections = this.$root.querySelectorAll(`.${this.sectionClass}`)
    if (!$sections.length) {
      throw new ElementError({
        component: Accordion,
        identifier: `Sections (\`<div class="${this.sectionClass}">\`)`
      })
    }

    this.$sections = $sections

    this.initControls()
    this.initSectionHeaders()

    this.updateShowAllButton(this.areAllSectionsOpen())
  }

  /**
   * Initialise controls and set attributes
   */
  initControls() {
    // Create "Show all" button and set attributes
    this.$showAllButton = document.createElement('button')
    this.$showAllButton.setAttribute('type', 'button')
    this.$showAllButton.setAttribute('class', this.showAllClass)
    this.$showAllButton.setAttribute('aria-expanded', 'false')

    // Create icon, add to element
    this.$showAllIcon = document.createElement('span')
    this.$showAllIcon.classList.add(this.upChevronIconClass)
    this.$showAllButton.appendChild(this.$showAllIcon)

    // Create control wrapper and add controls to it
    const $accordionControls = document.createElement('div')
    $accordionControls.setAttribute('class', this.controlsClass)
    $accordionControls.appendChild(this.$showAllButton)
    this.$root.insertBefore($accordionControls, this.$root.firstChild)

    // Build additional wrapper for Show all toggle text and place after icon
    this.$showAllText = document.createElement('span')
    this.$showAllText.classList.add(this.showAllTextClass)
    this.$showAllButton.appendChild(this.$showAllText)

    // Handle click events on the show/hide all button
    this.$showAllButton.addEventListener('click', () =>
      this.onShowOrHideAllToggle()
    )

    // Handle 'beforematch' events, if the user agent supports them
    if ('onbeforematch' in document) {
      document.addEventListener('beforematch', (event) =>
        this.onBeforeMatch(event)
      )
    }
  }

  /**
   * Initialise section headers
   */
  initSectionHeaders() {
    this.$sections.forEach(($section, i) => {
      const $header = $section.querySelector(`.${this.sectionHeaderClass}`)
      if (!$header) {
        throw new ElementError({
          component: Accordion,
          identifier: `Section headers (\`<div class="${this.sectionHeaderClass}">\`)`
        })
      }

      // Set header attributes
      this.constructHeaderMarkup($header, i)
      this.setExpanded(this.isExpanded($section), $section)

      // Handle events
      $header.addEventListener('click', () => this.onSectionToggle($section))

      // See if there is any state stored in sessionStorage and set the sections
      // to open or closed.
      this.setInitialState($section)
    })
  }

  /**
   * Construct section header
   *
   * @param {Element} $header - Section header
   * @param {number} index - Section index
   */
  constructHeaderMarkup($header, index) {
    const $span = $header.querySelector(`.${this.sectionButtonClass}`)
    const $heading = $header.querySelector(`.${this.sectionHeadingClass}`)
    const $summary = $header.querySelector(`.${this.sectionSummaryClass}`)

    if (!$heading) {
      throw new ElementError({
        component: Accordion,
        identifier: `Section heading (\`.${this.sectionHeadingClass}\`)`
      })
    }

    if (!$span) {
      throw new ElementError({
        component: Accordion,
        identifier: `Section button placeholder (\`<span class="${this.sectionButtonClass}">\`)`
      })
    }

    // Create a button element that will replace the
    // '.nhsuk-accordion__section-button' span
    const $button = document.createElement('button')
    $button.setAttribute('type', 'button')
    $button.setAttribute(
      'aria-controls',
      `${this.$root.id}-content-${index + 1}`
    )

    // Copy all attributes from $span to $button (except `id`, which gets added
    // to the `$headingText` element)
    for (const attr of Array.from($span.attributes)) {
      if (attr.name !== 'id') {
        $button.setAttribute(attr.name, attr.value)
      }
    }

    // Create container for heading text so it can be styled
    const $headingText = document.createElement('span')
    $headingText.classList.add(this.sectionHeadingTextClass)
    // Copy the span ID to the heading text to allow it to be referenced by
    // `aria-labelledby` on the hidden content area without "Show this section"
    $headingText.id = $span.id

    // Create an inner heading text container to limit the width of the focus
    // state
    const $headingTextFocus = document.createElement('span')
    $headingTextFocus.classList.add(this.sectionHeadingTextFocusClass)
    $headingText.appendChild($headingTextFocus)
    // span could contain HTML elements
    // (see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content)
    Array.from($span.childNodes).forEach(($child) =>
      $headingTextFocus.appendChild($child)
    )

    // Create container for show / hide icons and text.
    const $showHideToggle = document.createElement('span')
    $showHideToggle.classList.add(this.sectionShowHideToggleClass)
    // Tell Google not to index the 'show' text as part of the heading. Must be
    // set on the element before it's added to the DOM.
    // See https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#data-nosnippet-attr
    $showHideToggle.setAttribute('data-nosnippet', '')
    // Create an inner container to limit the width of the focus state
    const $showHideToggleFocus = document.createElement('span')
    $showHideToggleFocus.classList.add(this.sectionShowHideToggleFocusClass)
    $showHideToggle.appendChild($showHideToggleFocus)
    // Create wrapper for the show / hide text. Append text after the show/hide icon
    const $showHideText = document.createElement('span')
    const $showHideIcon = document.createElement('span')
    $showHideIcon.classList.add(this.upChevronIconClass)
    $showHideToggleFocus.appendChild($showHideIcon)
    $showHideText.classList.add(this.sectionShowHideTextClass)
    $showHideToggleFocus.appendChild($showHideText)

    // Append elements to the button:
    // 1. Heading text
    // 2. Punctuation
    // 3. (Optional: Summary line followed by punctuation)
    // 4. Show / hide toggle
    $button.appendChild($headingText)
    $button.appendChild(this.getButtonPunctuationEl())

    // If summary content exists add to DOM in correct order
    if ($summary) {
      // Create a new `span` element and copy the summary line content from the
      // original `div` to the new `span`. This is because the summary line text
      // is now inside a button element, which can only contain phrasing
      // content.
      const $summarySpan = document.createElement('span')
      // Create an inner summary container to limit the width of the summary
      // focus state
      const $summarySpanFocus = document.createElement('span')
      $summarySpanFocus.classList.add(this.sectionSummaryFocusClass)
      $summarySpan.appendChild($summarySpanFocus)

      // Get original attributes, and pass them to the replacement
      for (const attr of Array.from($summary.attributes)) {
        $summarySpan.setAttribute(attr.name, attr.value)
      }

      // Copy original contents of summary to the new summary span
      Array.from($summary.childNodes).forEach(($child) =>
        $summarySpanFocus.appendChild($child)
      )

      // Replace the original summary `div` with the new summary `span`
      $summary.remove()

      $button.appendChild($summarySpan)
      $button.appendChild(this.getButtonPunctuationEl())
    }

    $button.appendChild($showHideToggle)

    $heading.removeChild($span)
    $heading.appendChild($button)
  }

  /**
   * When a section is opened by the user agent via the 'beforematch' event
   *
   * @param {Event} event - Generic event
   */
  onBeforeMatch(event) {
    const $fragment = event.target

    // Handle elements with `.closest()` support only
    if (!($fragment instanceof Element)) {
      return
    }

    // Handle when fragment is inside section
    const $section = $fragment.closest(`.${this.sectionClass}`)
    if ($section) {
      this.setExpanded(true, $section)
    }
  }

  /**
   * When section toggled, set and store state
   *
   * @param {Element} $section - Section element
   */
  onSectionToggle($section) {
    const nowExpanded = !this.isExpanded($section)
    this.setExpanded(nowExpanded, $section)

    // Store the state in sessionStorage when a change is triggered
    this.storeState($section, nowExpanded)
  }

  /**
   * When Open/Close All toggled, set and store state
   */
  onShowOrHideAllToggle() {
    const nowExpanded = !this.areAllSectionsOpen()

    this.$sections.forEach(($section) => {
      this.setExpanded(nowExpanded, $section)
      this.storeState($section, nowExpanded)
    })

    this.updateShowAllButton(nowExpanded)
  }

  /**
   * Set section attributes when opened/closed
   *
   * @param {boolean} expanded - Section expanded
   * @param {Element} $section - Section element
   */
  setExpanded(expanded, $section) {
    const $showHideIcon = $section.querySelector(`.${this.upChevronIconClass}`)
    const $showHideText = $section.querySelector(
      `.${this.sectionShowHideTextClass}`
    )
    const $button = $section.querySelector(`.${this.sectionButtonClass}`)
    const $content = $section.querySelector(`.${this.sectionContentClass}`)

    if (!$content) {
      throw new ElementError({
        component: Accordion,
        identifier: `Section content (\`<div class="${this.sectionContentClass}">\`)`
      })
    }

    if (!$showHideIcon || !$showHideText || !$button) {
      // Return early for elements we create
      return
    }

    const newButtonText = expanded
      ? this.i18n.t('hideSection')
      : this.i18n.t('showSection')

    $showHideText.textContent = newButtonText
    $button.setAttribute('aria-expanded', `${expanded}`)

    // Update aria-label combining
    const ariaLabelParts = []

    const $headingText = $section.querySelector(
      `.${this.sectionHeadingTextClass}`
    )
    if ($headingText) {
      ariaLabelParts.push($headingText.textContent.trim())
    }

    const $summary = $section.querySelector(`.${this.sectionSummaryClass}`)
    if ($summary) {
      ariaLabelParts.push($summary.textContent.trim())
    }

    const ariaLabelMessage = expanded
      ? this.i18n.t('hideSectionAriaLabel')
      : this.i18n.t('showSectionAriaLabel')
    ariaLabelParts.push(ariaLabelMessage)

    /*
     * Join with a comma to add pause for assistive technology.
     * Example: [heading]Section A ,[pause] Show this section.
     * https://accessibility.blog.gov.uk/2017/12/18/what-working-on-gov-uk-navigation-taught-us-about-accessibility/
     */
    $button.setAttribute('aria-label', ariaLabelParts.join(' , '))

    // Swap icon, change class
    if (expanded) {
      $content.removeAttribute('hidden')
      $section.classList.add(this.sectionExpandedClass)
      $showHideIcon.classList.remove(this.downChevronIconClass)
    } else {
      $content.setAttribute('hidden', 'until-found')
      $section.classList.remove(this.sectionExpandedClass)
      $showHideIcon.classList.add(this.downChevronIconClass)
    }

    // See if "Show all sections" button text should be updated
    this.updateShowAllButton(this.areAllSectionsOpen())
  }

  /**
   * Get state of section
   *
   * @param {Element} $section - Section element
   * @returns {boolean} True if expanded
   */
  isExpanded($section) {
    return $section.classList.contains(this.sectionExpandedClass)
  }

  /**
   * Check if all sections are open
   *
   * @returns {boolean} True if all sections are open
   */
  areAllSectionsOpen() {
    return Array.from(this.$sections).every(($section) =>
      this.isExpanded($section)
    )
  }

  /**
   * Update "Show all sections" button
   *
   * @param {boolean} expanded - Section expanded
   */
  updateShowAllButton(expanded) {
    if (!this.$showAllButton || !this.$showAllText || !this.$showAllIcon) {
      return
    }

    this.$showAllButton.setAttribute('aria-expanded', expanded.toString())
    this.$showAllText.textContent = expanded
      ? this.i18n.t('hideAllSections')
      : this.i18n.t('showAllSections')
    this.$showAllIcon.classList.toggle(this.downChevronIconClass, !expanded)
  }

  /**
   * Get the identifier for a section
   *
   * We need a unique way of identifying each content in the Accordion.
   * Since an `#id` should be unique and an `id` is required for `aria-`
   * attributes `id` can be safely used.
   *
   * @param {Element} $section - Section element
   * @returns {string | undefined | null} Identifier for section
   */
  getIdentifier($section) {
    const $button = $section.querySelector(`.${this.sectionButtonClass}`)

    return $button?.getAttribute('aria-controls')
  }

  /**
   * Set the state of the accordions in sessionStorage
   *
   * @param {Element} $section - Section element
   * @param {boolean} isExpanded - Whether the section is expanded
   */
  storeState($section, isExpanded) {
    if (!this.config.rememberExpanded) {
      return
    }

    const id = this.getIdentifier($section)

    if (id) {
      try {
        window.sessionStorage.setItem(id, isExpanded.toString())
      } catch {}
    }
  }

  /**
   * Read the state of the accordions from sessionStorage
   *
   * @param {Element} $section - Section element
   */
  setInitialState($section) {
    if (!this.config.rememberExpanded) {
      return
    }

    const id = this.getIdentifier($section)

    if (id) {
      try {
        const state = window.sessionStorage.getItem(id)

        if (state !== null) {
          this.setExpanded(state === 'true', $section)
        }
      } catch {}
    }
  }

  /**
   * Create an element to improve semantics of the section button with
   * punctuation
   *
   * Adding punctuation to the button can also improve its general semantics by
   * dividing its contents into thematic chunks. See
   * https://github.com/alphagov/nhsuk-frontend/issues/2327#issuecomment-922957442
   *
   * @returns {Element} DOM element
   */
  getButtonPunctuationEl() {
    const $punctuationEl = document.createElement('span')
    $punctuationEl.classList.add(
      'nhsuk-u-visually-hidden',
      this.sectionHeadingDividerClass
    )
    $punctuationEl.textContent = ', '
    return $punctuationEl
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
  static moduleName = 'nhsuk-accordion'

  /**
   * Accordion default config
   *
   * @see {@link AccordionConfig}
   * @constant
   * @type {AccordionConfig}
   */
  static defaults = Object.freeze({
    i18n: {
      hideAllSections: 'Hide all sections',
      hideSection: 'Hide',
      hideSectionAriaLabel: 'Hide this section',
      showAllSections: 'Show all sections',
      showSection: 'Show',
      showSectionAriaLabel: 'Show this section'
    },
    rememberExpanded: true
  })

  /**
   * Accordion config schema
   *
   * @constant
   * @satisfies {Schema<AccordionConfig>}
   */
  static schema = Object.freeze({
    properties: {
      i18n: { type: 'object' },
      rememberExpanded: { type: 'boolean' }
    }
  })
}

/**
 * Initialise accordion component
 *
 * @deprecated Use {@link createAll | `createAll(Accordion, options)`} instead.
 * @param {InitOptions & Partial<AccordionConfig>} [options]
 */
export function initAccordions(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $buttons = $scope?.querySelectorAll(
    `[data-module="${Accordion.moduleName}"]`
  )

  $buttons?.forEach(($root) => {
    new Accordion($root, options)
  })
}

/**
 * Accordion config
 *
 * @see {@link Accordion.defaults}
 * @typedef {object} AccordionConfig
 * @property {AccordionTranslations} [i18n=Accordion.defaults.i18n] - Accordion translations
 * @property {boolean} rememberExpanded - Whether the expanded and collapsed
 *   state of each section is remembered and restored when navigating.
 */

/**
 * Accordion translations
 *
 * @see {@link Accordion.defaults.i18n}
 * @typedef {object} AccordionTranslations
 *
 * Messages used by the component for the labels of its buttons. This includes
 * the visible text shown on screen, and text to help assistive technology users
 * for the buttons toggling each section.
 * @property {string} [hideAllSections] - The text content for the 'Hide all
 *   sections' button, used when at least one section is expanded.
 * @property {string} [hideSection] - The text content for the 'Hide'
 *   button, used when a section is expanded.
 * @property {string} [hideSectionAriaLabel] - The text content appended to the
 *   'Hide' button's accessible name when a section is expanded.
 * @property {string} [showAllSections] - The text content for the 'Show all
 *   sections' button, used when all sections are collapsed.
 * @property {string} [showSection] - The text content for the 'Show'
 *   button, used when a section is collapsed.
 * @property {string} [showSectionAriaLabel] - The text content appended to the
 *   'Show' button's accessible name when a section is expanded.
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */
