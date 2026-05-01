import {
  MockConfigurableComponent,
  MockConfigurableComponentNoDefaults,
  MockConfigurableComponentNoSchema
} from '#lib/fixtures/configuration/mock-component.mjs'

import { ConfigError } from './errors/index.mjs'

describe('ConfigurableComponent', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = ''
    document.body.classList.add('nhsuk-frontend-supported')
  })

  describe('throws error', () => {
    it('if no schema defined', () => {
      expect(
        () => new MockConfigurableComponentNoSchema(document.body)
      ).toThrow(
        new ConfigError(
          'mock-component: Config passed as parameter into constructor but no schema defined'
        )
      )
    })

    it('if no defaults defined', () => {
      expect(
        () => new MockConfigurableComponentNoDefaults(document.body)
      ).toThrow(
        new ConfigError(
          'mock-component: Config passed as parameter into constructor but no defaults defined'
        )
      )
    })
  })

  describe('set configuration on initialisation to', () => {
    it('defaults if no configuration provided', () => {
      document.body.innerHTML = `
        <div id="test-component"></div>
      `

      const testComponent = document.querySelector('#test-component')
      const configComponent = new MockConfigurableComponent(testComponent)

      expect(configComponent.config).toMatchObject({ aNumber: 0 })
    })

    it('dataset of root', () => {
      document.body.innerHTML = `
        <div id="test-component" data-a-number="42"></div>
      `

      const testComponent = document.querySelector('#test-component')
      const configComponent = new MockConfigurableComponent(testComponent)

      expect(configComponent.config).toMatchObject({ aNumber: 42 })
    })

    it('configuration object from class initialisation', () => {
      document.body.innerHTML = `
        <div id="test-component"></div>
      `

      const testComponent = document.querySelector('#test-component')
      const configComponent = new MockConfigurableComponent(testComponent, {
        aNumber: 100,
        aFunction: (name) => name
      })

      expect(configComponent.config.aNumber).toBe(100)
      expect(configComponent.config.aFunction).toBeInstanceOf(Function)
      expect(configComponent.config.aFunction('albatross')).toBe('albatross')
    })

    it('dataset configuration over the configuration object from class initialisation', () => {
      document.body.innerHTML = `
        <div id="test-component" data-a-number="12"></div>
      `

      const testComponent = document.querySelector('#test-component')
      const configComponent = new MockConfigurableComponent(testComponent, {
        aNumber: 100,
        aFunction: (name) => name
      })

      expect(configComponent.config.aNumber).toBe(12)
      expect(configComponent.config.aFunction).toBeInstanceOf(Function)
      expect(configComponent.config.aFunction('albatross')).toBe('albatross')
    })
  })
})
