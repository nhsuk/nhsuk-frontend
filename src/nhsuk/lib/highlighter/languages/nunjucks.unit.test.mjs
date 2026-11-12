import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { highlighter } from '../index.mjs'

describe('Highlight.js Nunjucks language', () => {
  it('should output HTML for fixtures', async () => {
    const fixtures = await readFile(
      join(import.meta.dirname, 'fixtures.njk'),
      'utf8'
    )

    const result = highlighter.highlightAuto(fixtures, ['html', 'njk'])

    expect(result.value).toMatchSnapshot()
  })
})
