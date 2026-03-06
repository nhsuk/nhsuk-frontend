import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * NHS.UK frontend path
 */
export const nhsukFrontendPath = fileURLToPath(
  dirname(import.meta.resolve('nhsuk-frontend/package.json'))
)
