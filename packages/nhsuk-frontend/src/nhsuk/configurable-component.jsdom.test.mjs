import { ConfigurableComponent } from './configurable-component.mjs'
import { ConfigError } from './errors/index.mjs'

describe('ConfigurableComponent', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = ''
    document.body.classList.add('nhsuk-frontend-supported')
  })

  describe('throws error', () => {
    it('if no schema defined', () => {
      class MockConfigurableComponent extends ConfigurableComponent {
        static moduleName = 'config-component'

        static defaults = {
          randomAttribute: 0
        }
      }

      expect(() => new MockConfigurableComponent(document.body)).toThrow(
        new ConfigError(
          'config-component: Config passed as parameter into constructor but no schema defined'
        )
      )
    })

    it('if no defaults defined', () => {
      class MockConfigurableComponent extends ConfigurableComponent {
        static moduleName = 'config-component'

        static schema = {
          properties: {
            randomAttribute: { type: 'number' }
          }
        }
      }

      expect(() => new MockConfigurableComponent(document.body)).toThrow(
        new ConfigError(
          'config-component: Config passed as parameter into constructor but no defaults defined'
        )
      )
    })
  })

  describe('set configuration on initialisation to', () => {
    it('defaults if no configuration provided', () => {
      document.body.innerHTML = `
        <div id="test-component"></div>
      `

      class MockConfigurableComponent extends ConfigurableComponent {
        static moduleName = 'config-component'

        static schema = {
          properties: {
            randomAttribute: { type: 'number' }
          }
        }

        static defaults = {
          randomAttribute: 0
        }
      }

      const testComponent = document.querySelector('#test-component')

      const configComponent = new MockConfigurableComponent(testComponent)

      expect(configComponent.config).toMatchObject({ randomAttribute: 0 })
    })

    it('dataset of root', () => {
      document.body.innerHTML = `
        <div id="test-component" data-random-attribute="42"></div>
      `

      class MockConfigurableComponent extends ConfigurableComponent {
        static moduleName = 'config-component'

        static schema = {
          properties: {
            randomAttribute: { type: 'number' }
          }
        }

        static defaults = {
          randomAttribute: 0
        }
      }

      const testComponent = document.querySelector('#test-component')

      const configComponent = new MockConfigurableComponent(testComponent)

      expect(configComponent.config).toMatchObject({ randomAttribute: 42 })
    })

    it('configuration object from class initialisation', () => {
      document.body.innerHTML = `
        <div id="test-component"></div>
      `

      class MockConfigurableComponent extends ConfigurableComponent {
        static moduleName = 'config-component'

        static schema = {
          properties: {
            randomAttribute: { type: 'number' }
          }
        }

        static defaults = {
          randomAttribute: 0
        }
      }

      const testComponent = document.querySelector('#test-component')

      const configComponent = new MockConfigurableComponent(testComponent, {
        randomAttribute: 100
      })

      expect(configComponent.config).toMatchObject({ randomAttribute: 100 })
    })

    it('dataset configuration over the configuration object from class initialisation', () => {
      document.body.innerHTML = `
        <div id="test-component" data-random-attribute="12"></div>
      `

      class MockConfigurableComponent extends ConfigurableComponent {
        static moduleName = 'config-component'

        static schema = {
          properties: {
            randomAttribute: { type: 'number' }
          }
        }

        static defaults = {
          randomAttribute: 0
        }
      }

      const testComponent = document.querySelector('#test-component')

      const configComponent = new MockConfigurableComponent(testComponent, {
        randomAttribute: 100
      })

      expect(configComponent.config).toMatchObject({ randomAttribute: 12 })
    })
  })
})
