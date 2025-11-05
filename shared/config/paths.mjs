import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// Repository root directory
export const root = resolve(fileURLToPath(new URL('../..', import.meta.url)))

// Package for npm publish
export const pkg = join(root, 'packages/nhsuk-frontend')

// GitHub Pages review app
export const app = join(root, 'packages/nhsuk-frontend-review')
