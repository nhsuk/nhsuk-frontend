import { initDetails } from './details.mjs'

describe('Details', () => {
  /** @type {HTMLDetailsElement} */
  let $details

  /** @type {HTMLElement} */
  let $summary

  /** @type {HTMLDivElement} */
  let $content

  beforeEach(() => {
    document.body.innerHTML = `
      <details class="nhsuk-details">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text">
            Where can I find my NHS number?
          </span>
        </summary>
        <div class="nhsuk-details__text">
          <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
          <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
          <ul>
            <li>prescriptions</li>
            <li>test results</li>
            <li>hospital referral letters</li>
            <li>appointment letters</li>
            <li>your NHS medical card</li>
          </ul>
          <p>Ask your GP practice for help if you can't find your NHS number.</p>
        </div>
      </details>
    `

    $details = document.querySelector('.nhsuk-details')
    $summary = document.querySelector('.nhsuk-details__summary')
    $content = document.querySelector('.nhsuk-details__text')

    jest.spyOn($summary, 'addEventListener')
  })

  describe('Modern browsers', () => {
    describe('Initialisation', () => {
      it('should not add event listeners', () => {
        initDetails()

        expect($summary.addEventListener).not.toHaveBeenCalledWith(
          'click',
          expect.any(Function)
        )

        expect($summary.addEventListener).not.toHaveBeenCalledWith(
          'keydown',
          expect.any(Function)
        )
      })

      it('should not throw with empty body', () => {
        document.body.innerHTML = ''
        expect(() => initDetails()).not.toThrow()
      })

      it('should not throw with empty scope', () => {
        const scope = document.createElement('div')
        expect(() => initDetails({ scope })).not.toThrow()
      })
    })

    describe('Expanded content', () => {
      beforeEach(() => {
        initDetails()
      })

      it('should not add attributes', () => {
        expect($summary).not.toHaveAttribute('role')
        expect($summary).not.toHaveAttribute('aria-controls')
        expect($summary).not.toHaveAttribute('aria-expanded')
        expect($content).not.toHaveAttribute('aria-hidden')
        expect($content).not.toHaveAttribute('id')
      })
    })
  })

  describe('Older browsers', () => {
    beforeEach(() => {
      // Identify HTMLDetailsElement (modern browsers) as HTMLDivElement
      Object.setPrototypeOf($details, document.createElement('div'))
    })

    describe('Initialisation', () => {
      it('should add event listeners', () => {
        initDetails()

        expect($summary.addEventListener).toHaveBeenCalledWith(
          'click',
          expect.any(Function)
        )

        expect($summary.addEventListener).toHaveBeenCalledWith(
          'keydown',
          expect.any(Function)
        )
      })

      it('should not throw with empty body', () => {
        document.body.innerHTML = ''
        expect(() => initDetails()).not.toThrow()
      })

      it('should not throw with empty scope', () => {
        const scope = document.createElement('div')
        expect(() => initDetails({ scope })).not.toThrow()
      })
    })

    describe('Accessibility', () => {
      beforeEach(() => {
        initDetails()
      })

      it('should add to summary the button role', async () => {
        expect($summary).toHaveAttribute('role', 'button')
      })

      it('should set the element controlled by the summary using aria-controls', async () => {
        expect($summary).toHaveAttribute('aria-controls', $content.id)
        expect($content).toHaveAttribute('id')
      })

      it('should set the expanded state of the summary to false using aria-expanded', async () => {
        expect($summary).toHaveAttribute('aria-expanded', 'false')
        expect($content).toHaveAttribute('aria-hidden', 'true')
      })
    })

    describe('Expanded content', () => {
      beforeEach(() => {
        initDetails()
      })

      it('should be visible when summary is clicked', () => {
        $summary.click()

        // Expanded content visible
        expect($summary).toHaveAttribute('aria-expanded', 'true')
        expect($content).toHaveAttribute('aria-hidden', 'false')
      })

      it('should be hidden when summary is clicked (again)', () => {
        $summary.click()
        $summary.click()

        // Expanded content hidden
        expect($summary).toHaveAttribute('aria-expanded', 'false')
        expect($content).toHaveAttribute('aria-hidden', 'true')
      })
    })
  })
})
