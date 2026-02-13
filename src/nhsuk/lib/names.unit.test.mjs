import {
  componentNameToMacroName,
  componentNameToClassName,
  componentNameToModuleName
} from './names.mjs'

describe('Node.js API: Names', () => {
  const components = [
    {
      aliases: ['buttons'],
      className: 'Button',
      component: 'button',
      macroName: 'button',
      moduleName: 'nhsuk-button'
    },
    {
      className: 'CharacterCount',
      component: 'character-count',
      macroName: 'characterCount',
      moduleName: 'nhsuk-character-count'
    },
    {
      aliases: ['expander'],
      className: 'Details',
      component: 'details',
      macroName: 'details',
      moduleName: 'nhsuk-details'
    },
    {
      className: 'FileUpload',
      component: 'file-upload',
      macroName: 'fileUpload',
      moduleName: 'nhsuk-file-upload'
    },
    {
      aliases: ['notification-banners'],
      className: 'NotificationBanner',
      component: 'notification-banner',
      macroName: 'notificationBanner',
      moduleName: 'nhsuk-notification-banner'
    },
    {
      className: 'Radios',
      component: 'radios',
      macroName: 'radios',
      moduleName: 'nhsuk-radios'
    },
    {
      className: 'SkipLink',
      component: 'skip-link',
      macroName: 'skipLink',
      moduleName: 'nhsuk-skip-link'
    },
    {
      className: 'CustomComponent',
      component: 'custom-component',
      macroName: 'appCustomComponent',
      moduleName: 'app-custom-component',
      prefix: 'app'
    }
  ]

  describe('componentNameToMacroName', () => {
    it.each(components)(
      "transforms '$component' to macro '$macroName'",
      ({ component, prefix, ...expected }) => {
        const macroName = componentNameToMacroName(component, prefix)
        expect(macroName).toBe(expected.macroName)
      }
    )

    it.each(components)(
      "transforms prefixed '$prefix-$component' to macro '$macroName'",
      ({ component, prefix = 'nhsuk', ...expected }) => {
        const componentName = `${prefix}-${component}`
        const macroName = componentNameToMacroName(componentName, prefix)
        expect(macroName).toBe(expected.macroName)
      }
    )

    it.each(components.filter((component) => !!component.aliases))(
      "transforms aliases '$aliases' to macro '$macroName'",
      ({ aliases, prefix, ...expected }) => {
        expect.assertions(aliases.length)

        for (const alias of aliases) {
          const macroName = componentNameToMacroName(alias, prefix)
          expect(macroName).toBe(expected.macroName)
        }
      }
    )
  })

  describe('componentNameToClassName', () => {
    it.each(components)(
      "transforms '$component' to class '$className'",
      ({ component, prefix, ...expected }) => {
        const className = componentNameToClassName(component, prefix)
        expect(className).toBe(expected.className)
      }
    )

    it.each(components)(
      "transforms prefixed '$prefix-$component' to class '$className'",
      ({ component, prefix = 'nhsuk', ...expected }) => {
        const componentName = `${prefix}-${component}`
        const className = componentNameToClassName(componentName, prefix)
        expect(className).toBe(expected.className)
      }
    )

    it.each(components.filter((component) => !!component.aliases))(
      "transforms aliases '$aliases' to class '$className'",
      ({ aliases, prefix, ...expected }) => {
        expect.assertions(aliases.length)

        for (const alias of aliases) {
          const className = componentNameToClassName(alias, prefix)
          expect(className).toBe(expected.className)
        }
      }
    )
  })

  describe('componentNameToModuleName', () => {
    it.each(components)(
      "transforms '$component' to module name '$moduleName'",
      ({ component, prefix, ...expected }) => {
        const moduleName = componentNameToModuleName(component, prefix)
        expect(moduleName).toBe(expected.moduleName)
      }
    )

    it.each(components)(
      "transforms prefixed '$prefix-$component' to module name '$moduleName'",
      ({ component, prefix = 'nhsuk', ...expected }) => {
        const componentName = `${prefix}-${component}`
        const moduleName = componentNameToModuleName(componentName, prefix)
        expect(moduleName).toBe(expected.moduleName)
      }
    )

    it.each(components.filter((component) => !!component.aliases))(
      "transforms aliases '$aliases' to module name '$moduleName'",
      ({ aliases, prefix, ...expected }) => {
        expect.assertions(aliases.length)

        for (const alias of aliases) {
          const moduleName = componentNameToModuleName(alias, prefix)
          expect(moduleName).toBe(expected.moduleName)
        }
      }
    )
  })
})
