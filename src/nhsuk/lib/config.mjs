import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const pkgPath = import.meta.resolve('nhsuk-frontend/package.json')

/**
 * NHS.UK frontend path
 */
export const nhsukFrontendPath = pkgPath.startsWith('file:')
  ? fileURLToPath(dirname(pkgPath)) // ES modules resolve to file URL
  : dirname(pkgPath) // CommonJS modules resolve to file path
