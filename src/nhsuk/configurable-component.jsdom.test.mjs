import {
  MockConfigurableComponent,
  MockConfigurableComponentNoDefaults,
  MockConfigurableComponentNoSchema
} from '#lib/fixtures/configuration/mock-component.mjs'

import { SupportError } from './errors/index.mjs'
import { ConfigError } from './errors/index.mjs'

describe('ConfigurableComponent', () => {
  let /** @type {HTMLElement} */ $root

  beforeEach(() => {
    document.documentElement.innerHTML = ''
    document.body.classList.add('nhsuk-frontend-supported')

    $root = document.createElement('div')
    $root.setAttribute('data-module', MockConfigurableComponent.moduleName)

    document.body.appendChild($root)
  })

  describe('throws error', () => {
    it('if no schema defined', () => {
      expect(() => new MockConfigurableComponentNoSchema($root)).toThrow(
        new ConfigError(
          'mock-component: Config passed as parameter into constructor but no schema defined'
        )
      )
    })

    it('if no defaults defined', () => {
      expect(() => new MockConfigurableComponentNoDefaults($root)).toThrow(
        new ConfigError(
          'mock-component: Config passed as parameter into constructor but no defaults defined'
        )
      )
    })
  })

  describe('set configuration on initialisation to', () => {
    it('defaults if no configuration provided', () => {
      const component = new MockConfigurableComponent($root)

      expect(component.config).toMatchObject({ aNumber: 0 })
    })

    it('dataset of root', () => {
      $root.setAttribute('data-a-number', '42')

      const component = new MockConfigurableComponent($root)

      expect(component.config).toMatchObject({ aNumber: 42 })
    })

    it('configuration object from class initialisation', () => {
      const component = new MockConfigurableComponent($root, {
        aNumber: 100,
        aFunction: (name) => name
      })

      expect(component.config.aNumber).toBe(100)
      expect(component.config.aFunction).toBeInstanceOf(Function)
      expect(component.config.aFunction('albatross')).toBe('albatross')
    })

    it('dataset configuration over the configuration object from class initialisation', () => {
      $root.setAttribute('data-a-number', '12')

      const component = new MockConfigurableComponent($root, {
        aNumber: 100,
        aFunction: (name) => name
      })

      expect(component.config.aNumber).toBe(12)
      expect(component.config.aFunction).toBeInstanceOf(Function)
      expect(component.config.aFunction('albatross')).toBe('albatross')
    })
  })

  describe('checkSupport()', () => {
    describe('default implementation', () => {
      it('Makes initialisation throw if NHS.UK frontend is not supported', () => {
        document.body.classList.remove('nhsuk-frontend-supported')
        expect(() => new MockConfigurableComponent($root)).toThrow(SupportError)
      })

      it('Allows initialisation if NHS.UK frontend is supported', () => {
        expect(() => new MockConfigurableComponent($root)).not.toThrow()
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
        class ServiceComponent extends MockConfigurableComponent {
          static checkSupport() {
            throw new Error('Error thrown from support check')
          }
        }

        expect(() => new ServiceComponent($root)).toThrow(
          'Error thrown from support check'
        )
      })

      it('Allows child classes to define conditional $root support checks', () => {
        class ServiceComponent extends MockConfigurableComponent {
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
