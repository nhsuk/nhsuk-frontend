import { components } from '@nhsuk/frontend-lib'

import { examples } from './fixtures.mjs'
import {
  NotificationBanner,
  initNotificationBanners
} from './notification-banner.mjs'

describe('Notification banner', () => {
  /** @type {HTMLElement} */
  let $root

  /**
   * @param {keyof typeof examples} example
   */
  function initExample(example) {
    document.body.innerHTML = components.render(
      'notification-banner',
      examples[example]
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${NotificationBanner.moduleName}"]`)
    )
  }

  beforeEach(() => {
    initExample('with type as success')
  })

  describe('Initialisation via init function', () => {
    it('should not throw with missing notification banner', () => {
      $root.remove()
      expect(() => initNotificationBanners()).not.toThrow()
    })

    it('should not throw with empty body', () => {
      document.body.innerHTML = ''
      expect(() => initNotificationBanners()).not.toThrow()
    })

    it('should not throw with empty scope', () => {
      const scope = document.createElement('div')
      expect(() => initNotificationBanners({ scope })).not.toThrow()
    })
  })

  describe('Initialisation via class', () => {
    it('should not throw with $root element', () => {
      expect(() => new NotificationBanner($root)).not.toThrow()
    })

    it('should throw with unsupported browser', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      expect(() => new NotificationBanner($root)).toThrow(
        'NHS.UK frontend is not supported in this browser'
      )
    })

    it('should throw with missing $root element', () => {
      // @ts-expect-error Parameter '$root' not provided
      expect(() => new NotificationBanner()).toThrow(
        `${NotificationBanner.moduleName}: Root element (\`$root\`) not found`
      )
    })

    it('should throw with wrong $root element type', () => {
      const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(() => new NotificationBanner($svg)).toThrow(
        `${NotificationBanner.moduleName}: Root element (\`$root\`) is not of type HTMLElement`
      )
    })

    it('should throw when initialised twice', () => {
      expect(() => {
        new NotificationBanner($root)
        new NotificationBanner($root)
      }).toThrow(
        `${NotificationBanner.moduleName}: Root element (\`$root\`) already initialised`
      )
    })
  })

  describe('Accessibility', () => {
    it('should add accessible name and role', () => {
      expect($root).toHaveAccessibleName('Success')
      expect($root).toHaveRole('alert')
    })
  })

  describe('Nunjucks configuration', () => {
    it('configures auto-focus explicitly enabled', () => {
      initExample('auto-focus explicitly enabled, with type as success')

      const notificationBanner = new NotificationBanner($root)
      expect(notificationBanner.config).toEqual({
        disableAutoFocus: false
      })

      expect($root).toHaveFocus()
    })

    it('configures auto-focus disabled', () => {
      initExample('auto-focus disabled, with type as success')

      const notificationBanner = new NotificationBanner($root)
      expect(notificationBanner.config).toEqual({
        disableAutoFocus: true
      })

      expect($root).not.toHaveFocus()
    })

    it('ignores unknown data attributes', () => {
      document.body.innerHTML = components.render('notification-banner', {
        context: {
          ...examples['default'].context,
          attributes: {
            'data-unknown1': '100',
            'data-unknown2': 200,
            'data-unknown3': false
          }
        }
      })

      const notificationBanner = new NotificationBanner(
        document.querySelector(
          `[data-module="${NotificationBanner.moduleName}"]`
        )
      )

      expect(notificationBanner.config).toEqual({
        disableAutoFocus: false
      })
    })
  })

  describe('JavaScript configuration', () => {
    it('configures auto-focus explicitly enabled', () => {
      const notificationBanner = new NotificationBanner($root, {
        disableAutoFocus: false
      })

      expect(notificationBanner.config).toEqual({
        disableAutoFocus: false
      })
    })

    it('configures auto-focus disabled', () => {
      const notificationBanner = new NotificationBanner($root, {
        disableAutoFocus: true
      })

      expect(notificationBanner.config).toEqual({
        disableAutoFocus: true
      })
    })
  })
})
