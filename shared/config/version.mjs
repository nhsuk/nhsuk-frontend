import pkg from 'nhsuk-frontend/package.json' with { type: 'json' }

const { NODE_ENV } = process.env

/**
 * NHS.UK frontend release version
 *
 * The version export identifies development builds using NODE_ENV by default
 * unlike test and production builds which use the release pkg.version number
 */
export const version = ['test', 'production'].includes(NODE_ENV)
  ? pkg.version // Use release version
  : 'development' // or set default
