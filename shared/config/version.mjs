import pkg from 'nhsuk-frontend/package.json' with { type: 'json' }

// Node.js environment with default
// https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
const { NODE_ENV = 'development' } = process.env

/**
 * NHS.UK frontend release version
 *
 * The version export identifies development builds using NODE_ENV by default
 * unlike test and production builds which use the release pkg.version number
 */
export const version = ['test', 'production'].includes(NODE_ENV)
  ? pkg.version // Use release version
  : NODE_ENV // or default to build type
