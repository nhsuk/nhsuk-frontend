import { ConfigError } from './errors/index.mjs'

import {
  MockConfigurableComponentNoSchema,
  MockConfigurableComponentNoDefaults,
  MockConfigurableComponentNumber
} from '#lib/fixtures/configuration/mock-component.mjs'

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
      const configComponent = new MockConfigurableComponentNumber(testComponent)

      expect(configComponent.config).toMatchObject({ example: 0 })
    })

    it('dataset of root', () => {
      document.body.innerHTML = `
        <div id="test-component" data-example="42"></div>
      `

      const testComponent = document.querySelector('#test-component')
      const configComponent = new MockConfigurableComponentNumber(testComponent)

      expect(configComponent.config).toMatchObject({ example: 42 })
    })

    it('configuration object from class initialisation', () => {
      document.body.innerHTML = `
        <div id="test-component"></div>
      `

      const testComponent = document.querySelector('#test-component')
      const configComponent = new MockConfigurableComponentNumber(
        testComponent,
        { example: 100 }
      )

      expect(configComponent.config).toMatchObject({ example: 100 })
    })

    it('dataset configuration over the configuration object from class initialisation', () => {
      document.body.innerHTML = `
        <div id="test-component" data-example="12"></div>
      `

      const testComponent = document.querySelector('#test-component')
      const configComponent = new MockConfigurableComponentNumber(
        testComponent,
        { example: 100 }
      )

      expect(configComponent.config).toMatchObject({ example: 12 })
    })
  })
})
