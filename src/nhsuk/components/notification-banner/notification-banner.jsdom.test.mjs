import { components } from '@nhsuk/frontend-lib'

import { examples } from './macro-options.mjs'
import {
  NotificationBanner,
  initNotificationBanners
} from './notification-banner.mjs'

describe('Notification banner', () => {
  /** @type {HTMLElement} */
  let $root

  beforeEach(() => {
    document.body.innerHTML = components.render(
      'notification-banner',
      examples['with type as success']
    )

    $root = /** @type {HTMLElement} */ (
      document.querySelector(`[data-module="${NotificationBanner.moduleName}"]`)
    )
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
})
