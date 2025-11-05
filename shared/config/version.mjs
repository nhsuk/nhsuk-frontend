import pkg from 'nhsuk-frontend/package.json' with { type: 'json' }

// Node.js environment with default
// https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
export const { NODE_ENV: environment = 'development' } = process.env

/**
 * NHS.UK frontend release version
 *
 * The version export identifies development builds using NODE_ENV by default
 * unlike test and production builds which use the release pkg.version number
 */
export const version = ['test', 'production'].includes(environment)
  ? pkg.version // Use release version
  : environment // or default to environment
