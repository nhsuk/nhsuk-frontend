import pkg from 'nhsuk-frontend/package.json' with { type: 'json' }

// Node.js environment with default
// https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
const { NODE_ENV = 'development' } = process.env
/**
 * NHS.UK frontend release version
 */
export const version = pkg.version
