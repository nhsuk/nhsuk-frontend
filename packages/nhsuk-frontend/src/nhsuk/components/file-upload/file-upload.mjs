import { closestAttributeValue } from '../../common/closest-attribute-value.mjs'
import { normaliseOptions } from '../../common/configuration/index.mjs'
import { ConfigurableComponent } from '../../configurable-component.mjs'
import { ElementError } from '../../errors/index.mjs'
import { I18n } from '../../i18n.mjs'

/**
 * File upload component
 *
 * @augments {ConfigurableComponent<FileUploadConfig>}
 */
export class FileUpload extends ConfigurableComponent {
  /**
   * @type {boolean | undefined}
   */
  enteredAnotherElement

  /**
   * @param {Element | null} $root - File input element
   * @param {Partial<FileUploadConfig>} [config] - File Upload config
   */
  constructor($root, config = {}) {
    super($root, config)

    const $input = this.$root.querySelector('input')

    if (!($input instanceof HTMLInputElement)) {
      throw new ElementError({
        component: FileUpload,
        element: $input,
        expectedType: 'HTMLInputElement',
        identifier: 'Form field (`<input>`)'
      })
    }

    if ($input.type !== 'file') {
      throw new ElementError({
        component: FileUpload,
        element: $input,
        identifier: 'Form field (`<input>`)',
        expectedType: 'HTMLInputElement with attribute (`type="file"`)'
      })
    }

    this.$input = /** @type {HTMLFileInputElement} */ ($input)

    if (!this.$input.id) {
      throw new ElementError({
        component: FileUpload,
        identifier: 'File input (`<input type="file">`) attribute (`id`)'
      })
    }

    this.id = this.$input.id

    const {
      i18n,
      dropZoneClass,
      announcementsClass,
      buttonClass,
      statusClass,
      instructionClass,
      pseudoButtonClass,
      pseudoButtonContainerClass
    } = this.config

    this.i18n = new I18n(i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    })

    const $label = this.findLabel()
    // Add an ID to the label if it doesn't have one already
    // so it can be referenced by `aria-labelledby`
    if (!$label.id) {
      $label.id = `${this.id}-label`
    }

    // We need to copy the 'id' of the root element
    // to the new button replacement element
    // so that focus will work in the error summary
    this.$input.id = `${this.id}-input`

    // Hide the native input
    this.$input.setAttribute('hidden', '')

    // Locate or create the file drop zone
    this.$dropZone = this.$root.classList.contains(dropZoneClass)
      ? this.$root
      : document.createElement('div')

    if (this.$root !== this.$dropZone) {
      this.$dropZone.classList.add(dropZoneClass)
    }

    // Create the file selection button
    this.$button = document.createElement('button')
    this.$button.classList.add(buttonClass)
    this.$button.type = 'button'
    this.$button.id = this.id
    this.$button.classList.add(`${buttonClass}--empty`)

    // Copy `aria-describedby` if present so hints and errors
    // are associated to the `<button>`
    const ariaDescribedBy = this.$input.getAttribute('aria-describedby')
    if (ariaDescribedBy) {
      this.$button.setAttribute('aria-describedby', ariaDescribedBy)
    }

    // Create status element that shows what/how many files are selected
    this.$status = document.createElement('span')
    this.$status.classList.add('nhsuk-body', statusClass)
    this.$status.setAttribute('aria-live', 'polite')
    this.$status.innerText = this.formatStatusMessage(0)

    this.$button.appendChild(this.$status)

    const $statusComma = document.createElement('span')
    $statusComma.classList.add('nhsuk-u-visually-hidden')
    $statusComma.innerText = ', '
    $statusComma.id = `${this.id}-comma`

    this.$button.appendChild($statusComma)

    const $pseudoButtonContainer = document.createElement('span')
    $pseudoButtonContainer.classList.add(pseudoButtonContainerClass)

    const $pseudoButton = document.createElement('span')
    $pseudoButton.classList.add(
      'nhsuk-button',
      'nhsuk-button--secondary',
      pseudoButtonClass
    )
    $pseudoButton.innerText = this.i18n.t('chooseFilesButton')

    $pseudoButtonContainer.appendChild($pseudoButton)

    // Add a space so the button and instruction read correctly
    // when CSS is disabled
    $pseudoButtonContainer.append(' ')

    const $instruction = document.createElement('span')
    $instruction.classList.add('nhsuk-body', instructionClass)
    $instruction.innerText = this.i18n.t('dropInstruction')

    $pseudoButtonContainer.appendChild($instruction)

    this.$button.appendChild($pseudoButtonContainer)
    this.$button.setAttribute(
      'aria-labelledby',
      `${$label.id} ${$statusComma.id} ${this.$button.id}`
    )
    this.$button.addEventListener('click', this.onClick.bind(this))
    this.$button.addEventListener('dragover', (event) => {
      // prevent default to allow drop
      event.preventDefault()
    })

    // For backwards compatibility with GOV.UK Frontend, optionally replace
    // the native input with the drop zone unless already in the HTML
    if (!this.$dropZone.parentElement) {
      this.$input.parentElement?.insertBefore(this.$dropZone, this.$input)
      this.$dropZone.appendChild(this.$input)
    }

    // Assemble these all together
    this.$dropZone.insertAdjacentElement('afterbegin', this.$button)

    this.$input.setAttribute('tabindex', '-1')
    this.$input.setAttribute('aria-hidden', 'true')

    // Bind change event to the underlying input
    this.$input.addEventListener('change', this.onChange.bind(this))

    // Synchronise the `disabled` state between the button and underlying input
    this.updateDisabledState()
    this.observeDisabledState()

    // Handle drop zone visibility
    // A live region to announce when users enter or leave the drop zone
    this.$announcements = document.createElement('span')
    this.$announcements.classList.add(
      announcementsClass,
      'nhsuk-u-visually-hidden'
    )
    this.$announcements.setAttribute('aria-live', 'assertive')
    this.$dropZone.insertAdjacentElement('afterend', this.$announcements)

    // if there is no CSS and input is hidden
    // button will need to handle drop event
    this.$button.addEventListener('drop', this.onDrop.bind(this))

    // While user is dragging, it gets a little more complex because of Safari.
    // Safari doesn't fill `relatedTarget` on `dragleave` (nor `dragenter`).
    // This means we can't use `relatedTarget` to:
    // - check if the user is still within the wrapper
    //   (`relatedTarget` being a descendant of the wrapper)
    // - check if the user is still over the viewport
    //   (`relatedTarget` being null if outside)

    // Thanks to `dragenter` bubbling, we can listen on the `document` with a
    // single function and update the visibility based on whether we entered a
    // node inside or outside the wrapper.
    document.addEventListener(
      'dragenter',
      this.updateDropzoneVisibility.bind(this)
    )

    // To detect if we're outside the document, we can track if there was a
    // `dragenter` event preceding a `dragleave`. If there wasn't, this means
    // we're outside the document.
    //
    // The order of events is guaranteed by the HTML specs:
    // https://html.spec.whatwg.org/multipage/dnd.html#drag-and-drop-processing-model
    document.addEventListener('dragenter', () => {
      this.enteredAnotherElement = true
    })

    document.addEventListener('dragleave', () => {
      if (!this.enteredAnotherElement && !this.$button.disabled) {
        this.hideDraggingState()
        this.$announcements.innerText = this.i18n.t('leftDropZone')
      }

      this.enteredAnotherElement = false
    })
  }

  /**
   * Updates the visibility of the dropzone as users enters the various elements on the page
   *
   * @param {DragEvent} event - The `dragenter` event
   */
  updateDropzoneVisibility(event) {
    if (this.$button.disabled) {
      return
    }

    const { buttonClass } = this.config

    // DOM interfaces only type `event.target` as `EventTarget`
    // so we first need to make sure it's a `Node`
    if (event.target instanceof Node) {
      if (this.$dropZone.contains(event.target)) {
        if (event.dataTransfer && this.canDrop(event.dataTransfer)) {
          // Only update the class and make the announcement if not already visible
          // to avoid repeated announcements on NVDA (2024.4) + Firefox (133)
          if (!this.$button.classList.contains(`${buttonClass}--dragging`)) {
            this.showDraggingState()
            this.$announcements.innerText = this.i18n.t('enteredDropZone')
          }
        }
      } else if (this.$button.classList.contains(`${buttonClass}--dragging`)) {
        // Only hide the dropzone if it is visible to prevent announcing user
        // left the drop zone when they enter the page but haven't reached yet
        // the file upload component
        this.hideDraggingState()
        this.$announcements.innerText = this.i18n.t('leftDropZone')
      }
    }
  }

  /**
   * Show the drop zone visually
   */
  showDraggingState() {
    const { buttonClass } = this.config
    this.$button.classList.add(`${buttonClass}--dragging`)
  }

  /**
   * Hides the drop zone visually
   */
  hideDraggingState() {
    const { buttonClass } = this.config
    this.$button.classList.remove(`${buttonClass}--dragging`)
  }

  /**
   * Handles user dropping on the component
   *
   * @param {DragEvent} event - The `dragenter` event
   */
  onDrop(event) {
    event.preventDefault()

    if (event.dataTransfer && this.canFillInput(event.dataTransfer)) {
      this.$input.files = event.dataTransfer.files

      // Dispatch a `change` event so external code that would rely on the `<input>`
      // dispatching an event when files are dropped still work.
      // Use a `CustomEvent` so our events are distinguishable from browser's native events
      this.$input.dispatchEvent(new CustomEvent('change'))

      this.hideDraggingState()
    }
  }

  /**
   * Confirms if enhanced `<input>` can be filled with files from the given `DataTransfer`
   *
   * @param {DataTransfer} dataTransfer - The `DataTransfer` being dropped
   * @returns {boolean} Whether the `DataTransfer` contains files, in number matching the `multiple` attribute of the original `<input>`
   */
  canFillInput(dataTransfer) {
    return this.matchesInputCapacity(dataTransfer.files.length)
  }

  /**
   * Confirms if the content of a `DataTransfer` dragged over component can be dropped
   *
   * Unfortunately, there's a certain level of uncertainty in Safari which does not
   * even provide a list of `items` while dragging (and seems to even miss the `types` sometimes)
   *
   * @param {DataTransfer} dataTransfer - The `DataTransfer` being dragged
   * @returns {boolean} Whether the `DataTransfer` looks OK for filling the input, false otherwise
   */
  canDrop(dataTransfer) {
    // If the browser is kind enough to give a list of items, we'll use that as source of truth
    if (dataTransfer.items.length) {
      return this.matchesInputCapacity(countFileItems(dataTransfer.items))
    }

    // If we have some type information, we'll use that
    if (dataTransfer.types.length) {
      return dataTransfer.types.includes('Files')
    }

    // If we have nothing to go by, we'll assume things are OK
    // until we have a more accurate picture inside the `drop` event
    return true
  }

  /**
   * Confirms the given number of files matches that allowed by the enhanced `<input>`
   *
   * @param {number} numberOfFiles - The number of files
   * @returns {boolean} Whether the enhanced `<input>` can accept that number of files
   */
  matchesInputCapacity(numberOfFiles) {
    if (this.$input.multiple) {
      return numberOfFiles > 0
    }

    return numberOfFiles === 1
  }

  /**
   * Check if the value of the underlying input has changed
   */
  onChange() {
    const { buttonClass } = this.config
    const fileCount = this.$input.files.length

    if (fileCount === 0) {
      // If there are no files, show the default selection text
      this.$status.innerText = this.formatStatusMessage(fileCount)
      this.$button.classList.add(`${buttonClass}--empty`)
    } else {
      if (
        // If there is 1 file, just show the file name
        fileCount === 1
      ) {
        this.$status.innerText = this.$input.files[0].name
      } else {
        // Otherwise, tell the user how many files are selected
        this.$status.innerText = this.formatStatusMessage(fileCount)
      }

      this.$button.classList.remove(`${buttonClass}--empty`)
    }
  }

  /**
   * Formats the message shown to users according to files chosen
   *
   * @param {number} fileCount - The number of files chosen
   * @returns {string} Status message
   */
  formatStatusMessage(fileCount) {
    if (fileCount === 0) {
      return this.i18n.t('noFileChosen')
    }

    return this.i18n.t('multipleFilesChosen', { count: fileCount })
  }

  /**
   * Looks up the `<label>` element associated to the field
   *
   * @returns {HTMLElement} The `<label>` element associated to the field
   * @throws {ElementError} If the `<label>` cannot be found
   */
  findLabel() {
    // Use `label` in the selector so TypeScript knows the type of `HTMLElement`
    const $label = document.querySelector(`label[for="${this.$input.id}"]`)

    if (!$label) {
      throw new ElementError({
        component: FileUpload,
        identifier: `Field label (\`<label for=${this.$input.id}>\`)`
      })
    }

    return $label
  }

  /**
   * When the button is clicked, emulate clicking the actual, hidden file input
   */
  onClick() {
    this.$input.click()
  }

  /**
   * Create a mutation observer to check if the input's attributes altered.
   */
  observeDisabledState() {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'disabled'
        ) {
          this.updateDisabledState()
        }
      }
    })

    observer.observe(this.$input, {
      attributes: true
    })
  }

  /**
   * Synchronise the `disabled` state between the input and replacement button.
   */
  updateDisabledState() {
    const { dropZoneClass } = this.config

    const disabledStateClass = this.$root.classList.contains(dropZoneClass)
      ? `${dropZoneClass}--disabled`
      : `${FileUpload.moduleName}--disabled`

    this.$button.disabled = this.$input.disabled
    this.$root.classList.toggle(disabledStateClass, this.$button.disabled)
  }

  /**
   * Name for the component used when initialising using data-module attributes.
   */
  static moduleName = 'nhsuk-file-upload'

  /**
   * File upload default config
   *
   * @see {@link FileUploadConfig}
   * @constant
   * @type {FileUploadConfig}
   */
  static defaults = Object.freeze({
    dropZoneClass: 'nhsuk-drop-zone',
    announcementsClass: 'nhsuk-file-upload-announcements',
    buttonClass: 'nhsuk-file-upload-button',
    statusClass: 'nhsuk-file-upload-button__status',
    instructionClass: 'nhsuk-file-upload-button__instruction',
    pseudoButtonClass: 'nhsuk-file-upload-button__pseudo-button',
    pseudoButtonContainerClass:
      'nhsuk-file-upload-button__pseudo-button-container',
    i18n: {
      chooseFilesButton: 'Choose file',
      dropInstruction: 'or drop file',
      noFileChosen: 'No file chosen',
      multipleFilesChosen: {
        // the 'one' string isn't used as the component displays the filename
        // instead, however it's here for coverage's sake
        one: '%{count} file chosen',
        other: '%{count} files chosen'
      },
      enteredDropZone: 'Entered drop zone',
      leftDropZone: 'Left drop zone'
    }
  })

  /**
   * File upload config schema
   *
   * @constant
   * @satisfies {Schema<FileUploadConfig>}
   */
  static schema = Object.freeze({
    properties: {
      dropZoneClass: { type: 'string' },
      announcementsClass: { type: 'string' },
      buttonClass: { type: 'string' },
      statusClass: { type: 'string' },
      instructionClass: { type: 'string' },
      pseudoButtonClass: { type: 'string' },
      pseudoButtonContainerClass: { type: 'string' },
      i18n: { type: 'object' }
    }
  })
}

/**
 * Counts the number of `DataTransferItem` whose kind is `file`
 *
 * @param {DataTransferItemList} list - The list
 * @returns {number} The number of items whose kind is `file` in the list
 */
function countFileItems(list) {
  let result = 0

  // `DataTransferItemList` is not iterable
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < list.length; i++) {
    if (list[i].kind === 'file') {
      result++
    }
  }
  return result
}

/**
 * Initialise file upload component
 *
 * @deprecated Use {@link createAll | `createAll(FileUpload, options)`} instead.
 * @param {InitOptions & Partial<FileUploadConfig>} [options]
 */
export function initFileUploads(options) {
  const { scope: $scope } = normaliseOptions(options)

  const $fileUploads = $scope?.querySelectorAll(
    `[data-module="${FileUpload.moduleName}"]`
  )

  $fileUploads?.forEach(($root) => {
    new FileUpload($root, options)
  })
}

/**
 * @typedef {HTMLInputElement & {files: FileList}} HTMLFileInputElement
 */

/**
 * File upload config
 *
 * @see {@link FileUpload.defaults}
 * @typedef {object} FileUploadConfig
 * @property {string} dropZoneClass - Drop zone class
 * @property {string} announcementsClass - Announcements class
 * @property {string} buttonClass - Button class
 * @property {string} statusClass - Status class
 * @property {string} instructionClass - Instruction class
 * @property {string} pseudoButtonClass - Pseudo button class
 * @property {string} pseudoButtonContainerClass - Pseudo button container class
 * @property {FileUploadTranslations} [i18n=FileUpload.defaults.i18n] - File upload translations
 */

/**
 * File upload translations
 *
 * @see {@link FileUpload.defaults.i18n}
 * @typedef {object} FileUploadTranslations
 *
 * Messages used by the component
 * @property {string} [chooseFilesButton] - The text of the button that opens the file picker
 * @property {string} [dropInstruction] - The text informing users they can drop files
 * @property {TranslationPluralForms} [multipleFilesChosen] - The text displayed when multiple files
 *   have been chosen by the user
 * @property {string} [noFileChosen] - The text to displayed when no file has been chosen by the user
 * @property {string} [enteredDropZone] - The text announced by assistive technology
 *   when user drags files and enters the drop zone
 * @property {string} [leftDropZone] - The text announced by assistive technology
 *   when user drags files and leaves the drop zone without dropping
 */

/**
 * @import { Schema } from '../../common/configuration/index.mjs'
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { TranslationPluralForms } from '../../i18n.mjs'
 */
