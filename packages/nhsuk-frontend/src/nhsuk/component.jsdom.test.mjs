import { MockComponent } from '#lib/fixtures/configuration/mock-component.mjs'

import { SupportError } from './errors/index.mjs'

describe('Component', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = ''
    document.body.classList.add('nhsuk-frontend-supported')
  })

  describe('checkSupport()', () => {
    let /** @type {HTMLElement} */ $root

    beforeEach(() => {
      $root = document.createElement('div')
      $root.setAttribute('data-module', MockComponent.moduleName)

      document.body.appendChild($root)
    })

    describe('default implementation', () => {
      it('Makes initialisation throw if NHS.UK frontend is not supported', () => {
        document.body.classList.remove('nhsuk-frontend-supported')
        expect(() => new MockComponent($root)).toThrow(SupportError)
      })

      it('Allows initialisation if NHS.UK frontend is supported', () => {
        expect(() => new MockComponent($root)).not.toThrow()
      })
    })

    describe('when overriden', () => {
      it('Allows child classes to define their own condition for support', () => {
        class ServiceComponent extends MockComponent {
          static checkSupport() {
            throw new Error('Custom error')
          }
        }

        // Use the message rather than the class as `SupportError` extends `Error`
        expect(() => new ServiceComponent($root)).toThrow('Custom error')
      })
    })
  })
})
