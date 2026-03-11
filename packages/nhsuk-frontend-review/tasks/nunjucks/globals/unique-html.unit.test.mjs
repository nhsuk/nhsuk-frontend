import { components } from 'nhsuk-frontend/src/nhsuk/lib/index.mjs'
import { outdent } from 'outdent'

import { configure } from '../environment.mjs'

import { uniqueHTML } from './unique-html.mjs'

describe('Nunjucks global: uniqueHTML', () => {
  const options = /** @type {MacroRenderOptions} */ ({
    context: {
      label: {
        text: 'What is your NHS number?',
        size: 'l',
        isPageHeading: true
      },
      hint: {
        html: 'This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App'
      },
      errorMessage: {
        text: 'Enter NHS number'
      },
      id: 'with-hint',
      name: 'example',
      classes: 'nhsuk-input--width-10 nhsuk-input--code',
      inputmode: 'numeric',
      spellcheck: false
    },
    env: configure()
  })

  it('renders original HTML for component', () => {
    const htmlCode = uniqueHTML(components.render('input', options))

    expect(htmlCode).toBe(outdent({ trimTrailingNewline: false })`
      <div class="nhsuk-form-group nhsuk-form-group--error">
        <h1 class="nhsuk-label-wrapper">
          <label class="nhsuk-label nhsuk-label--l" for="with-hint">
            What is your NHS number?
          </label>
        </h1>
        <div id="with-hint-hint" class="nhsuk-hint">
          This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App
        </div>
        <span id="with-hint-error" class="nhsuk-error-message">
          <span class="nhsuk-u-visually-hidden">Error:</span> Enter NHS number
        </span>
        <input class="nhsuk-input nhsuk-input--width-10 nhsuk-input--code nhsuk-input--error" id="with-hint" name="example" type="text" spellcheck="false" aria-describedby="with-hint-hint with-hint-error" inputmode="numeric">
      </div>
    `)
  })

  it.each([1, 2, 3, 4, 5])(
    'renders unique attributes for index %d',
    (index) => {
      const htmlCode = uniqueHTML(components.render('input', options), index)

      expect(htmlCode).toBe(outdent({ trimTrailingNewline: false })`
        <div class="nhsuk-form-group nhsuk-form-group--error">
          <h1 class="nhsuk-label-wrapper">
            <label class="nhsuk-label nhsuk-label--l" for="with-hint-${index}">
              What is your NHS number?
            </label>
          </h1>
          <div id="with-hint-hint-${index}" class="nhsuk-hint">
            This is a 10 digit number (like <span class="nhsuk-u-nowrap">999 123 4567</span>) that you can find on an NHS letter, prescription or in the NHS App
          </div>
          <span id="with-hint-${index}-error" class="nhsuk-error-message">
            <span class="nhsuk-u-visually-hidden">Error:</span> Enter NHS number
          </span>
          <input class="nhsuk-input nhsuk-input--width-10 nhsuk-input--code nhsuk-input--error" id="with-hint-${index}" name="example-${index}" type="text" spellcheck="false" aria-describedby="with-hint-hint-${index} with-hint-${index}-error" inputmode="numeric">
        </div>
      `)
    }
  )

  it('renders unique href attribute with index', () => {
    const htmlCode = uniqueHTML(
      components.render('skip-link', {
        context: {
          href: '#elsewhere',
          text: 'Skip to main content'
        }
      }),
      1
    )

    expect(htmlCode).toBe(outdent({ trimTrailingNewline: false })`
      <a class="nhsuk-skip-link" href="#elsewhere-1" data-module="nhsuk-skip-link">
        Skip to main content
      </a>
    `)
  })

  it('preserves original `#maincontent` href attribute with index', () => {
    const htmlCode = uniqueHTML(
      components.render('skip-link', {
        context: {
          href: '#maincontent',
          text: 'Skip to main content'
        }
      }),
      1
    )

    expect(htmlCode).toBe(outdent({ trimTrailingNewline: false })`
      <a class="nhsuk-skip-link" href="#maincontent" data-module="nhsuk-skip-link">
        Skip to main content
      </a>
    `)
  })

  it('preserves original `#maincontent` href attribute without index', () => {
    const htmlCode = uniqueHTML(
      components.render('skip-link', {
        context: {
          href: '#maincontent',
          text: 'Skip to main content'
        }
      })
    )

    expect(htmlCode).toBe(outdent({ trimTrailingNewline: false })`
      <a class="nhsuk-skip-link" href="#maincontent" data-module="nhsuk-skip-link">
        Skip to main content
      </a>
    `)
  })
})

/**
 * @import { MacroRenderOptions } from 'nhsuk-frontend/src/nhsuk/lib/index.mjs'
 */
