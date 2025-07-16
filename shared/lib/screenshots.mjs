/**
 * Default viewport sizes
 *
 * @type {Map<string, Viewport>}
 */
export const viewports = new Map([
  [
    'mobile',
    {
      width: 320,
      height: 100
    }
  ],
  [
    'tablet',
    {
      width: 641,
      height: 100
    }
  ],
  [
    'desktop',
    {
      width: 769,
      height: 100
    }
  ],
  [
    'large-desktop',
    {
      width: 990,
      height: 100
    }
  ],
  [
    'xlarge-desktop',
    {
      width: 1281,
      height: 100
    }
  ]
])

// Set viewport labels
for (const [label, viewport] of viewports.entries()) {
  viewport.label = label
}

/**
 * @import { Viewport } from 'backstopjs'
 */
