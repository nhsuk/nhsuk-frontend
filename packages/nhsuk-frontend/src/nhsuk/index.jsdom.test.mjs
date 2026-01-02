import { names } from '@nhsuk/frontend-lib'
import { outdent } from 'outdent'

import {
  Button,
  CharacterCount,
  Checkboxes,
  ErrorSummary,
  Header,
  NotificationBanner,
  PasswordInput,
  Radios,
  SkipLink,
  Tabs,
  initAll,
  createAll,
  Component,
  ConfigurableComponent
} from './index.mjs'
import * as NHSUKFrontend from './index.mjs'

jest.mock('./components/button/button.mjs')
jest.mock('./components/character-count/character-count.mjs')
jest.mock('./components/checkboxes/checkboxes.mjs')
jest.mock('./components/error-summary/error-summary.mjs')
jest.mock('./components/file-upload/file-upload.mjs')
jest.mock('./components/header/header.mjs')
jest.mock('./components/notification-banner/notification-banner.mjs')
jest.mock('./components/password-input/password-input.mjs')
jest.mock('./components/radios/radios.mjs')
jest.mock('./components/skip-link/skip-link.mjs')
jest.mock('./components/tabs/tabs.mjs')

describe('NHS.UK frontend', () => {
  const components = [
    'Checkboxes',
    'FileUpload',
    'Header',
    'Radios',
    'SkipLink',
    'Tabs',
    'Button',
    'CharacterCount',
    'ErrorSummary',
    'NotificationBanner',
    'PasswordInput'
  ]

  const componentsWithConfig = components.filter(
    (name) => 'defaults' in NHSUKFrontend[name]
  )

  describe('Exports', () => {
    it("should export 'initAll' function", () => {
      expect(NHSUKFrontend).toHaveProperty('initAll')
    })

    it("should export 'createAll' function", () => {
      expect(NHSUKFrontend).toHaveProperty('createAll')
    })

    it('should export error classes', () => {
      expect(NHSUKFrontend).toHaveProperty('NHSUKFrontendError')
      expect(NHSUKFrontend).toHaveProperty('SupportError')
      expect(NHSUKFrontend).toHaveProperty('ConfigError')
      expect(NHSUKFrontend).toHaveProperty('ElementError')
      expect(NHSUKFrontend).toHaveProperty('InitError')
    })

    it('should export component classes', () => {
      expect(NHSUKFrontend).toHaveProperty('Button')
      expect(NHSUKFrontend).toHaveProperty('CharacterCount')
      expect(NHSUKFrontend).toHaveProperty('Checkboxes')
      expect(NHSUKFrontend).toHaveProperty('ErrorSummary')
      expect(NHSUKFrontend).toHaveProperty('Header')
      expect(NHSUKFrontend).toHaveProperty('NotificationBanner')
      expect(NHSUKFrontend).toHaveProperty('PasswordInput')
      expect(NHSUKFrontend).toHaveProperty('Radios')
      expect(NHSUKFrontend).toHaveProperty('SkipLink')
      expect(NHSUKFrontend).toHaveProperty('Tabs')
    })

    it('should export component base classes', () => {
      expect(NHSUKFrontend).toHaveProperty('Component')
      expect(NHSUKFrontend).toHaveProperty('ConfigurableComponent')
    })

    it('should export component init functions', () => {
      expect(NHSUKFrontend).toHaveProperty('initButtons')
      expect(NHSUKFrontend).toHaveProperty('initCharacterCounts')
      expect(NHSUKFrontend).toHaveProperty('initCheckboxes')
      expect(NHSUKFrontend).toHaveProperty('initErrorSummary')
      expect(NHSUKFrontend).toHaveProperty('initHeader')
      expect(NHSUKFrontend).toHaveProperty('initNotificationBanners')
      expect(NHSUKFrontend).toHaveProperty('initPasswordInputs')
      expect(NHSUKFrontend).toHaveProperty('initRadios')
      expect(NHSUKFrontend).toHaveProperty('initSkipLinks')
      expect(NHSUKFrontend).toHaveProperty('initTabs')
    })
  })

  describe('initAll', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation()

      document.body.innerHTML = outdent`
        <div data-module="${Button.moduleName}"></div>
        <div data-module="${CharacterCount.moduleName}"></div>
        <div data-module="${Checkboxes.moduleName}"></div>
        <div data-module="${ErrorSummary.moduleName}"></div>
        <div data-module="${Header.moduleName}"></div>
        <div data-module="${NotificationBanner.moduleName}"></div>
        <div data-module="${PasswordInput.moduleName}"></div>
        <div data-module="${Radios.moduleName}"></div>
        <div data-module="${SkipLink.moduleName}"></div>
        <div data-module="${Tabs.moduleName}"></div>
      `
    })

    describe('Configurable components', () => {
      it.each(componentsWithConfig)("should init '%s'", (name) => {
        const NamespaceComponent = /** @type {CompatibleClass} */ (
          NHSUKFrontend[name]
        )

        document.body.innerHTML = outdent`
          <div data-module="${NamespaceComponent.moduleName}"></div>
        `

        const $root = document.querySelector(
          `[data-module="${NamespaceComponent.moduleName}"]`
        )

        // Determine `nhsuk-character-count` → `characterCount` config key
        const configName = names.kebabCaseToCamelCase(
          NamespaceComponent.moduleName.replace(/^nhsuk-/, '')
        )

        initAll({
          [configName]: {
            __test: true
          }
        })

        expect(NamespaceComponent).toHaveBeenCalledWith($root, { __test: true })
      })
    })

    describe('Configurable components (with scope)', () => {
      it.each(componentsWithConfig)("should init scoped '%s'", (name) => {
        const NamespaceComponent = /** @type {CompatibleClass} */ (
          NHSUKFrontend[name]
        )

        document.body.innerHTML = outdent`
          <div class="app-scope-1">
            <!-- No components -->
          </div>
          <div class="app-scope-2">
            <div data-module="${NamespaceComponent.moduleName}"></div>
          </div>
        `

        const $scope1 = document.querySelector('.app-scope-1')
        const $scope2 = document.querySelector('.app-scope-2')

        const $root1 = $scope1.querySelector(
          `[data-module="${NamespaceComponent.moduleName}"]`
        )

        const $root2 = $scope2.querySelector(
          `[data-module="${NamespaceComponent.moduleName}"]`
        )

        // Determine `nhsuk-character-count` → `characterCount` config key
        const configName = names.kebabCaseToCamelCase(
          NamespaceComponent.moduleName.replace(/^nhsuk-/, '')
        )

        initAll({
          scope: $scope1,
          [configName]: {
            __test: true
          }
        })

        expect(NamespaceComponent).not.toHaveBeenCalled()

        initAll({
          scope: $scope2,
          [configName]: {
            __test: true
          }
        })

        expect(NamespaceComponent).not.toHaveBeenCalledWith($root1, {
          __test: true
        })

        expect(NamespaceComponent).toHaveBeenCalledWith($root2, {
          __test: true
        })
      })
    })

    it('should skip initialisation with null scope parameter (and log errors)', () => {
      const $scope = document.querySelector('.unknown-scope')

      initAll($scope)

      expect(console.log).toHaveBeenCalledWith(expect.any(Error))
      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'NHS.UK frontend scope element (`$scope`) not found'
        })
      )

      expect(Button).not.toHaveBeenCalled()
      expect(CharacterCount).not.toHaveBeenCalled()
      expect(Checkboxes).not.toHaveBeenCalled()
      expect(ErrorSummary).not.toHaveBeenCalled()
      expect(Header).not.toHaveBeenCalled()
      expect(NotificationBanner).not.toHaveBeenCalled()
      expect(PasswordInput).not.toHaveBeenCalled()
      expect(Radios).not.toHaveBeenCalled()
      expect(SkipLink).not.toHaveBeenCalled()
      expect(Tabs).not.toHaveBeenCalled()
    })

    it('should skip initialisation with null scope option (and log errors)', () => {
      const $scope = document.querySelector('.unknown-scope')

      initAll({ scope: $scope })

      expect(console.log).toHaveBeenCalledWith(expect.any(Error))
      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'NHS.UK frontend scope element (`$scope`) not found'
        })
      )

      expect(Button).not.toHaveBeenCalled()
      expect(CharacterCount).not.toHaveBeenCalled()
      expect(Checkboxes).not.toHaveBeenCalled()
      expect(ErrorSummary).not.toHaveBeenCalled()
      expect(Header).not.toHaveBeenCalled()
      expect(NotificationBanner).not.toHaveBeenCalled()
      expect(PasswordInput).not.toHaveBeenCalled()
      expect(Radios).not.toHaveBeenCalled()
      expect(SkipLink).not.toHaveBeenCalled()
      expect(Tabs).not.toHaveBeenCalled()
    })

    it('should ignore unsupported browsers (and log errors)', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      initAll()

      expect(console.log).toHaveBeenCalledWith(expect.any(Error))
      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'NHS.UK frontend is not supported in this browser'
        })
      )

      expect(Button).not.toHaveBeenCalled()
      expect(CharacterCount).not.toHaveBeenCalled()
      expect(Checkboxes).not.toHaveBeenCalled()
      expect(ErrorSummary).not.toHaveBeenCalled()
      expect(Header).not.toHaveBeenCalled()
      expect(NotificationBanner).not.toHaveBeenCalled()
      expect(PasswordInput).not.toHaveBeenCalled()
      expect(Radios).not.toHaveBeenCalled()
      expect(SkipLink).not.toHaveBeenCalled()
      expect(Tabs).not.toHaveBeenCalled()
    })
  })

  describe('createAll', () => {
    beforeEach(() => {
      document.body.innerHTML = ''
    })

    class MockComponent extends Component {
      constructor($root) {
        super($root)
        this.args = [$root]
      }
    }

    class MockComponentThatErrors extends MockComponent {
      constructor($root) {
        super($root)

        if ('boom' in $root.dataset) {
          throw new Error('Error thrown from constructor')
        }
      }
    }

    /**
     * @augments {ConfigurableComponent<MockConfig>}
     */
    class MockConfigurableComponent extends ConfigurableComponent {
      constructor($root, config) {
        super($root, config)
        this.args = [$root, config]
      }

      /**
       * @satisfies {Schema<MockConfig>}
       */
      static schema = {
        properties: {
          __test: { type: 'boolean' }
        }
      }

      /**
       * @satisfies {MockConfig}
       */
      static defaults = {
        __test: false
      }
    }

    it('should return initialised components', () => {
      document.body.innerHTML = outdent`
        <div data-module="${MockComponent.moduleName}" id="a"></div>
        <div data-module="${MockComponent.moduleName}" id="b"></div>
      `

      const $root1 = document.getElementById('a')
      const $root2 = document.getElementById('b')

      const result = createAll(MockComponent)

      expect(result).toStrictEqual([
        expect.any(MockComponent),
        expect.any(MockComponent)
      ])

      expect(result[0]).toHaveProperty('args', [$root1])
      expect(result[1]).toHaveProperty('args', [$root2])
    })

    it('should return initialised components (with failed components omitted)', () => {
      document.body.innerHTML = outdent`
        <div data-module="${MockComponentThatErrors.moduleName}" id="a"></div>
        <div data-module="${MockComponentThatErrors.moduleName}" id="b" data-boom></div>
        <div data-module="${MockComponentThatErrors.moduleName}" id="c"></div>
      `

      const $root1 = document.getElementById('a')
      const $root2 = document.getElementById('b')
      const $root3 = document.getElementById('c')

      const result = createAll(MockComponentThatErrors)

      expect(result).toStrictEqual([
        expect.any(MockComponentThatErrors),
        expect.any(MockComponentThatErrors)
      ])

      expect(result[0]).toHaveProperty('args', [$root1])
      expect(result[1]).not.toHaveProperty('args', [$root2])
      expect(result[1]).toHaveProperty('args', [$root3])
    })

    it('should return empty array without components', () => {
      const result = createAll(MockComponent)

      expect(result).toStrictEqual([])
    })

    it('should return empty array without matching components', () => {
      document.body.innerHTML = outdent`
        <div data-module="this-is-not-the-component-you-are-looking-for"></div>
      `

      const result = createAll(MockComponent)

      expect(result).toStrictEqual([])
    })

    it('should return empty array with null scope parameter (and log errors)', () => {
      const $scope = document.querySelector('.unknown-scope')

      const result = createAll(MockComponent, undefined, $scope)

      expect(result).toStrictEqual([])

      expect(console.log).toHaveBeenCalledWith(expect.any(Error))
      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          message: `${MockComponent.moduleName}: Scope element (\`$scope\`) not found`
        })
      )
    })

    it('should return empty array with null scope option (and log errors)', () => {
      const $scope = document.querySelector('.unknown-scope')

      const result = createAll(MockComponent, undefined, {
        scope: $scope
      })

      expect(result).toStrictEqual([])

      expect(console.log).toHaveBeenCalledWith(expect.any(Error))
      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          message: `${MockComponent.moduleName}: Scope element (\`$scope\`) not found`
        })
      )
    })

    it('should return empty array with unsupported browsers (and log errors)', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      const result = createAll(MockComponent)

      expect(result).toStrictEqual([])

      expect(console.log).toHaveBeenCalledWith(expect.any(Error))
      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'NHS.UK frontend is not supported in this browser'
        })
      )
    })

    it('should return empty array with failed component (and log errors)', () => {
      document.body.innerHTML = outdent`
        <div data-module="${MockComponentThatErrors.moduleName}" data-boom></div>
      `

      const result = createAll(MockComponentThatErrors)

      expect(result).toStrictEqual([])

      expect(console.log).toHaveBeenCalledWith(expect.any(Error))
      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Error thrown from constructor'
        })
      )
    })

    describe('Non-configurable components', () => {
      it('initialises component', () => {
        document.body.innerHTML = outdent`
          <div data-module="${MockComponent.moduleName}"></div>
        `

        const $root = document.querySelector(
          `[data-module="${MockComponent.moduleName}"]`
        )

        const result = createAll(MockComponent)

        expect(result).toStrictEqual([expect.any(MockComponent)])
        expect(result[0]).toHaveProperty('args', [$root])
      })
    })

    describe('Non-configurable components (with scope)', () => {
      it('initialises scoped component', () => {
        document.body.innerHTML = outdent`
          <div class="app-scope-1">
            <!-- No components -->
          </div>
          <div class="app-scope-2">
            <div data-module="${MockComponent.moduleName}"></div>
          </div>
        `

        const $scope1 = document.querySelector('.app-scope-1')
        const $scope2 = document.querySelector('.app-scope-2')

        const $root2 = $scope2.querySelector(
          `[data-module="${MockComponent.moduleName}"]`
        )

        const result1 = createAll(MockComponent, undefined, $scope1)
        expect(result1).toStrictEqual([])

        const result2 = createAll(MockComponent, undefined, $scope2)

        expect(result2).toStrictEqual([expect.any(MockComponent)])
        expect(result2[0]).toHaveProperty('args', [$root2])
      })
    })

    describe('Configurable components', () => {
      it('initialises component', () => {
        document.body.innerHTML = outdent`
          <div data-module="${MockConfigurableComponent.moduleName}"></div>
        `

        const $root = document.querySelector(
          `[data-module="${MockConfigurableComponent.moduleName}"]`
        )

        const result = createAll(MockConfigurableComponent, {
          __test: true
        })

        expect(result).toStrictEqual([expect.any(MockConfigurableComponent)])
        expect(result[0]).toHaveProperty('args', [$root, { __test: true }])
      })
    })

    describe('Configurable components (with scope)', () => {
      it('initialises scoped component', () => {
        document.body.innerHTML = outdent`
          <div class="app-scope-1">
            <!-- No components -->
          </div>
          <div class="app-scope-2">
            <div data-module="${MockConfigurableComponent.moduleName}"></div>
          </div>
        `

        const $scope1 = document.querySelector('.app-scope-1')
        const $scope2 = document.querySelector('.app-scope-2')

        const $root2 = $scope2.querySelector(
          `[data-module="${MockConfigurableComponent.moduleName}"]`
        )

        const result1 = createAll(
          MockConfigurableComponent,
          { __test: true },
          $scope1
        )

        expect(result1).toStrictEqual([])

        const result2 = createAll(
          MockConfigurableComponent,
          { __test: true },
          $scope2
        )

        expect(result2).toStrictEqual([expect.any(MockConfigurableComponent)])
        expect(result2[0]).toHaveProperty('args', [$root2, { __test: true }])
      })
    })
  })
})

/**
 * @typedef {object} MockConfig
 * @property {boolean} __test - Test flag
 */

/**
 * @import { Schema } from './common/configuration/index.mjs'
 * @import { CompatibleClass } from './component.mjs'
 */
