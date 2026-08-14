import '@testing-library/jest-dom'
import { outdent } from 'outdent'

beforeEach(() => {
  const stylesheet = document.createElement('style')

  stylesheet.innerHTML = outdent`
    :root {
      --nhsuk-breakpoint-mobile: 20rem;
      --nhsuk-breakpoint-tablet: 40.0625rem;
      --nhsuk-breakpoint-desktop: 48.0625rem;
      --nhsuk-breakpoint-large-desktop: 61.875rem;
    }
  `

  // Add styles for NHS.UK frontend checks
  document.head.appendChild(stylesheet)

  // Flag NHS.UK frontend as supported
  document.body.classList.add('nhsuk-frontend-supported')
})
