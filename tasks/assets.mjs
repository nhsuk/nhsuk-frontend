import { join } from 'node:path'

import * as config from '@nhsuk/frontend-config'
import { files, icons } from '@nhsuk/frontend-lib'
import { assets, task } from '@nhsuk/frontend-tasks'

import { nunjucks } from '#lib'

/**
 * Copy NHS.UK frontend images and other assets
 */
export const copy = task.name('assets:copy', () =>
  assets.copy('nhsuk/assets/**', {
    srcPath: join(config.paths.pkg, 'src'),
    destPath: join(config.paths.pkg, 'dist/nhsuk/assets')
  })
)

/**
 * Render NHS.UK frontend icons
 */
export const render = task.name('assets:render', async () => {
  for (const icon of icons.getNames()) {
    const svg = nunjucks.renderMacro('nhsukIcon', 'nhsuk/macros/icon.njk', {
      context: [icon, { attributes: { fill: '#212b32' } }]
    })

    // Write icon SVG to destination
    await files.write(`nhsuk-icon-${icon}.svg`, {
      destPath: join(config.paths.pkg, 'dist/nhsuk/assets/images'),
      output: { contents: svg }
    })
  }
})
