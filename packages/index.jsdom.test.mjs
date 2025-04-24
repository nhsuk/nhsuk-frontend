import {
  initAll,
  initButton,
  initCharacterCount,
  initCheckboxes,
  initDetails,
  initErrorSummary,
  initHeader,
  initRadios,
  initSkipLink,
  initTabs
} from './index.js'
import * as NHSUKFrontend from './index.js'

jest.mock('./components/button/button.js')
jest.mock('./components/character-count/character-count.js')
jest.mock('./components/checkboxes/checkboxes.js')
jest.mock('./components/details/details.js')
jest.mock('./components/error-summary/error-summary.js')
jest.mock('./components/header/header.js')
jest.mock('./components/radios/radios.js')
jest.mock('./components/skip-link/skip-link.js')
jest.mock('./components/tabs/tabs.js')

describe('NHS.UK frontend', () => {
  describe('Exports', () => {
    it('should export init all function', () => {
      expect(NHSUKFrontend).toHaveProperty('initAll')
    })

    it('should export init component functions', () => {
      expect(NHSUKFrontend).toHaveProperty('initButton')
      expect(NHSUKFrontend).toHaveProperty('initCharacterCount')
      expect(NHSUKFrontend).toHaveProperty('initCheckboxes')
      expect(NHSUKFrontend).toHaveProperty('initDetails')
      expect(NHSUKFrontend).toHaveProperty('initErrorSummary')
      expect(NHSUKFrontend).toHaveProperty('initHeader')
      expect(NHSUKFrontend).toHaveProperty('initRadios')
      expect(NHSUKFrontend).toHaveProperty('initSkipLink')
      expect(NHSUKFrontend).toHaveProperty('initTabs')
    })
  })

  describe('initAll', () => {
    it('should init components', () => {
      initAll()

      expect(initButton).toHaveBeenCalled()
      expect(initCharacterCount).toHaveBeenCalled()
      expect(initCheckboxes).toHaveBeenCalled()
      expect(initDetails).toHaveBeenCalled()
      expect(initErrorSummary).toHaveBeenCalled()
      expect(initHeader).toHaveBeenCalled()
      expect(initRadios).toHaveBeenCalled()
      expect(initSkipLink).toHaveBeenCalled()
      expect(initTabs).toHaveBeenCalled()
    })

    it('should init components (with scope)', () => {
      const scope = document

      initAll(scope)

      expect(initHeader).toHaveBeenCalled()
      expect(initSkipLink).toHaveBeenCalled()

      expect(initButton).toHaveBeenCalledWith({ scope })
      expect(initCharacterCount).toHaveBeenCalledWith({ scope })
      expect(initCheckboxes).toHaveBeenCalledWith({ scope })
      expect(initDetails).toHaveBeenCalledWith({ scope })
      expect(initErrorSummary).toHaveBeenCalledWith({ scope })
      expect(initRadios).toHaveBeenCalledWith({ scope })
      expect(initTabs).toHaveBeenCalledWith({ scope })
    })
  })
})
