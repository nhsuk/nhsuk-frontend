import {
  getFragmentFromUrl,
  isSupported,
  toggleConditionalInput
} from './index.mjs'

describe('getFragmentFromUrl util', () => {
  it.each([
    {
      url: 'https://www.nhs.uk/#content',
      fragment: 'content'
    },
    {
      url: 'https://www.nhs.uk/example/#content',
      fragment: 'content'
    },
    {
      url: 'https://www.nhs.uk/example/?keywords=123#content',
      fragment: 'content'
    },
    {
      url: '/#content',
      fragment: 'content'
    },
    {
      url: '/example/#content',
      fragment: 'content'
    },
    {
      url: '/?keywords=123#content',
      fragment: 'content'
    },
    {
      url: '#content',
      fragment: 'content'
    },
    {
      url: '/',
      fragment: undefined
    },
    {
      url: '',
      fragment: undefined
    }
  ])("returns '$fragment' for '$url'", ({ url, fragment }) => {
    expect(getFragmentFromUrl(url)).toBe(fragment)
  })
})

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
