import {
  MockConfigurableComponent,
  MockConfigurableComponentNoDefaults,
  MockConfigurableComponentNoSchema
} from '#lib/fixtures/configuration/mock-component.mjs'

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
})
