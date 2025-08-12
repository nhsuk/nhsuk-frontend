import { outdent } from 'outdent'

import { isSupported, getBreakpoint, toggleConditionalInput } from './index.mjs'

describe('isSupported util', () => {
  it('returns true if the nhsuk-frontend-supported class is set', () => {
    expect(isSupported(document.body)).toBe(true)
  })

  it('returns false if the nhsuk-frontend-supported class is not set', () => {
    document.body.classList.remove('nhsuk-frontend-supported')
    expect(isSupported(document.body)).toBe(false)
  })

  it('returns false when `document.body` is not set', () => {
    // For example, running `initAll()` in `<head>` without `type="module"`
    // will see support checks run when document.body is still `null`
    expect(isSupported(null)).toBe(false)
  })
})

describe('getBreakpoint util', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = ''

    const stylesheet = document.createElement('style')

    stylesheet.innerHTML = outdent`
      :root {
        --nhsuk-breakpoint-mobile: 40rem;
        --nhsuk-breakpoint-tablet: 80rem;
      }

      body {
        --nhsuk-breakpoint-tablet: 90rem;
      }
    `

    document.body.appendChild(stylesheet)
  })

  it('returns the breakpoint value if it exists', () => {
    expect(getBreakpoint('mobile')).toEqual({
      property: '--nhsuk-breakpoint-mobile',
      value: '40rem'
    })
  })

  it('returns the value as set on the HTML (root) element', () => {
    expect(getBreakpoint('tablet')).toEqual({
      property: '--nhsuk-breakpoint-tablet',
      value: '80rem'
    })
  })

  it('returns an undefined value if the breakpoint does not exist', () => {
    expect(getBreakpoint('giant-video-wall')).toEqual({
      property: '--nhsuk-breakpoint-giant-video-wall',
      value: undefined
    })
  })
})

describe('toggleConditionalInput util', () => {
  const className = 'nhsuk-checkboxes__conditional--hidden'

  /** @type {HTMLInputElement} */
  let $input

  /** @type {HTMLElement} */
  let $target

  beforeEach(() => {
    $input = document.createElement('input')
    $input.setAttribute('aria-controls', 'target-id')

    $target = document.createElement('div')
    $target.classList.add('nhsuk-checkboxes__conditional')
    $target.id = 'target-id'

    document.body.innerHTML = ''
    document.body.appendChild($input)
    document.body.appendChild($target)
  })

  describe('does not throw an error', () => {
    it('if the element does not exist', () => {
      expect(() => toggleConditionalInput(null, 'fake-class')).not.toThrow()
    })

    it('if the element is not an input', () => {
      const $div = document.createElement('div')
      expect(() => toggleConditionalInput($div, className)).not.toThrow()
    })

    it('if no class is passed', () => {
      // @ts-expect-error Parameter 'className' not provided
      expect(() => toggleConditionalInput($input)).not.toThrow()
    })

    it('if the input has no aria-controls', () => {
      $input.removeAttribute('aria-controls')
      expect(() => toggleConditionalInput($input, className)).not.toThrow()
    })

    it('if the input has an invalid aria-controls', () => {
      $input.setAttribute('aria-controls', 'fake-id')
      expect(() => toggleConditionalInput($input, className)).not.toThrow()
    })

    it('if the target has no ID', () => {
      $target.removeAttribute('id')
      expect(() => toggleConditionalInput($input, className)).not.toThrow()
    })
  })

  describe('toggles the passed class', () => {
    it('if the aria-controls element is valid and content is hidden', () => {
      $input.checked = true
      toggleConditionalInput($input, className)

      expect($target).not.toHaveClass(className)
      expect($input).toHaveAttribute('aria-expanded', 'true')

      $input.checked = false
      toggleConditionalInput($input, className)

      expect($target).toHaveClass(className)
      expect($input).toHaveAttribute('aria-expanded', 'false')
    })

    it('if the aria-controls element is valid and content is not hidden', () => {
      $input.checked = false
      toggleConditionalInput($input, className)

      expect($target).toHaveClass(className)
      expect($input).toHaveAttribute('aria-expanded', 'false')

      $input.checked = true
      toggleConditionalInput($input, className)

      expect($target).not.toHaveClass(className)
      expect($input).toHaveAttribute('aria-expanded', 'true')
    })
  })
})
