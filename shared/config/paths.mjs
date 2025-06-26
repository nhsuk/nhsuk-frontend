import { join, resolve } from 'node:path'

// Repository root directory
export const root = resolve(import.meta.dirname, '../../')

// Package for npm publish
export const pkg = join(root, 'packages/nhsuk-frontend')

// GitHub Pages review app
export const app = join(root, 'packages/nhsuk-frontend-review')
