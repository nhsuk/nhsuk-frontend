import { initAll } from 'nhsuk-frontend'

jest.mock('nhsuk-frontend')

describe('Review app', () => {
  it('should init NHS.UK frontend without auto-focus', () => {
    jest.requireActual('./application.mjs')

    expect(initAll).toHaveBeenCalledWith({
      errorSummary: { disableAutoFocus: true },
      notificationBanner: { disableAutoFocus: true }
    })
  })
})
