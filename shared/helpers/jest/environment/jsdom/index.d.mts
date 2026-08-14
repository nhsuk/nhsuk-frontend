import type HappyDOM from '@happy-dom/jest-environment'

declare global {
  const happyDOM: HappyDOM['window']['happyDOM']
}
