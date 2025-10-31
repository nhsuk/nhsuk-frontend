/**
 * Default viewport sizes
 *
 * @type {Map<string, Omit<ViewportNext, 'label'>>}
 */
export const viewports = new Map([
  [
    'watch',
    {
      width: 224,
      height: 100
    }
  ],
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

/**
 * Get viewports by names
 *
 * @param {string[]} [names] - Viewport names
 * @returns {ViewportNext[]}
 */
export function getViewports(names = []) {
  return names.flatMap((name) => {
    const viewport = viewports.get(name)

    // No viewport found
    if (!viewport) {
      return []
    }

    // Set viewport label
    return { label: name, ...viewport }
  })
}

/**
 * @import { ViewportNext } from 'backstopjs'
 */
