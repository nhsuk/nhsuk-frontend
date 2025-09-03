import { Component } from './component.mjs'
import { SupportError } from './errors/index.mjs'

describe('Component', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = ''
    document.body.classList.add('nhsuk-frontend-supported')
  })

  describe('checkSupport()', () => {
    describe('default implementation', () => {
      class ServiceComponent extends Component {
        static moduleName = 'app-service-component'
      }

      it('Makes initialisation throw if NHS.UK frontend is not supported', () => {
        document.body.classList.remove('nhsuk-frontend-supported')
        expect(() => new ServiceComponent(document.body)).toThrow(SupportError)
      })

      it('Allows initialisation if NHS.UK frontend is supported', () => {
        expect(() => new ServiceComponent(document.body)).not.toThrow()
      })
    })

    describe('when overriden', () => {
      it('Allows child classes to define their own condition for support', () => {
        class ServiceComponent extends Component {
          static moduleName = 'app-service-component'

          static checkSupport() {
            throw new Error('Custom error')
          }
        }

        // Use the message rather than the class as `SupportError` extends `Error`
        expect(() => new ServiceComponent(document.body)).toThrow(
          'Custom error'
        )
      })
    })
  })
})
