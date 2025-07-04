import {
  initAll,
  initButtons,
  initCharacterCounts,
  initCheckboxes,
  initDetails,
  initErrorSummary,
  initHeader,
  initRadios,
  initSkipLinks,
  initTabs
} from './index.mjs'
import * as NHSUKFrontend from './index.mjs'

jest.mock('./components/button/button.mjs')
jest.mock('./components/character-count/character-count.mjs')
jest.mock('./components/checkboxes/checkboxes.mjs')
jest.mock('./components/details/details.mjs')
jest.mock('./components/error-summary/error-summary.mjs')
jest.mock('./components/header/header.mjs')
jest.mock('./components/radios/radios.mjs')
jest.mock('./components/skip-link/skip-link.mjs')
jest.mock('./components/tabs/tabs.mjs')

describe('NHS.UK frontend', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  describe('Exports', () => {
    it('should export init all function', () => {
      expect(NHSUKFrontend).toHaveProperty('initAll')
    })

    it('should export init component functions', () => {
      expect(NHSUKFrontend).toHaveProperty('initButtons')
      expect(NHSUKFrontend).toHaveProperty('initCharacterCounts')
      expect(NHSUKFrontend).toHaveProperty('initCheckboxes')
      expect(NHSUKFrontend).toHaveProperty('initDetails')
      expect(NHSUKFrontend).toHaveProperty('initErrorSummary')
      expect(NHSUKFrontend).toHaveProperty('initHeader')
      expect(NHSUKFrontend).toHaveProperty('initRadios')
      expect(NHSUKFrontend).toHaveProperty('initSkipLinks')
      expect(NHSUKFrontend).toHaveProperty('initTabs')
    })
  })

  describe('initAll', () => {
    it('should ignore unsupported browsers', () => {
      document.body.classList.remove('nhsuk-frontend-supported')

      initAll()

      expect(console.log).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'NHS.UK frontend is not supported in this browser'
        })
      )

      expect(initButtons).not.toHaveBeenCalled()
      expect(initCharacterCounts).not.toHaveBeenCalled()
      expect(initCheckboxes).not.toHaveBeenCalled()
      expect(initDetails).not.toHaveBeenCalled()
      expect(initErrorSummary).not.toHaveBeenCalled()
      expect(initHeader).not.toHaveBeenCalled()
      expect(initRadios).not.toHaveBeenCalled()
      expect(initSkipLinks).not.toHaveBeenCalled()
      expect(initTabs).not.toHaveBeenCalled()
    })

    it('should init components', () => {
      initAll()

      expect(initButtons).toHaveBeenCalled()
      expect(initCharacterCounts).toHaveBeenCalled()
      expect(initCheckboxes).toHaveBeenCalled()
      expect(initDetails).toHaveBeenCalled()
      expect(initErrorSummary).toHaveBeenCalled()
      expect(initHeader).toHaveBeenCalled()
      expect(initRadios).toHaveBeenCalled()
      expect(initSkipLinks).toHaveBeenCalled()
      expect(initTabs).toHaveBeenCalled()
    })

    it('should init components (with scope)', () => {
      const scope = document

      initAll(scope)

      expect(initButtons).toHaveBeenCalledWith({ scope })
      expect(initCharacterCounts).toHaveBeenCalledWith({ scope })
      expect(initCheckboxes).toHaveBeenCalledWith({ scope })
      expect(initDetails).toHaveBeenCalledWith({ scope })
      expect(initErrorSummary).toHaveBeenCalledWith({ scope })
      expect(initHeader).toHaveBeenCalledWith({ scope })
      expect(initRadios).toHaveBeenCalledWith({ scope })
      expect(initSkipLinks).toHaveBeenCalledWith({ scope })
      expect(initTabs).toHaveBeenCalledWith({ scope })
    })
  })
})
