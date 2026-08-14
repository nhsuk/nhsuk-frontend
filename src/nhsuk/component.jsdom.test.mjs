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
      let /** @type {HTMLElement} */ $root1
      let /** @type {HTMLElement} */ $root2

      beforeEach(() => {
        $root1 = $root
        $root2 = document.createElement('div')

        document.body.appendChild($root2)
      })

      it('Allows child classes to define support checks', () => {
        class ServiceComponent extends MockComponent {
          static checkSupport() {
            throw new Error('Error thrown from support check')
          }
        }

        expect(() => new ServiceComponent($root)).toThrow(
          'Error thrown from support check'
        )
      })

      it('Allows child classes to define conditional $root support checks', () => {
        class ServiceComponent extends MockComponent {
          /**
           * @param {HTMLElement} [$root]
           */
          static checkSupport($root) {
            if ($root?.dataset.throw === 'true') {
              throw new Error('Error thrown from $root support check')
            }
          }
        }

        $root1.dataset.throw = 'false'
        $root2.dataset.throw = 'true'

        expect(() => new ServiceComponent($root1)).not.toThrow()

        expect(() => new ServiceComponent($root2)).toThrow(
          'Error thrown from $root support check'
        )
      })
    })
  })
})
