import { join } from 'node:path'

import { render } from './components.mjs'
import { configure } from './nunjucks.mjs'

describe('Node.js API: Components', () => {
  const context = {
    label: {
      text: 'Mobile phone number'
    },
    name: 'mobile',
    type: 'tel'
  }

  const output = `
    "<div class="nhsuk-form-group">
      <label class="nhsuk-label" for="mobile">
        Mobile phone number
      </label>
      <input class="nhsuk-input" id="mobile" name="mobile" type="tel">
    </div>
    "
  `

  const outputCustom = `
    "<p class="app-example">Custom example</p>
    "
  `

  describe('render', () => {
    it('returns component HTML', () => {
      const html = render('input', { context })
      expect(html).toMatchInlineSnapshot(output)
    })

    it('returns component HTML (custom env)', () => {
      const html = render('input', { context, env: configure() })
      expect(html).toMatchInlineSnapshot(output)
    })

    it('returns custom component HTML (custom env)', () => {
      const viewsPath = join(import.meta.dirname, 'fixtures/components')

      const html = render('example1', {
        context: { text: 'Custom example' },
        env: configure(viewsPath)
      })

      expect(html).toMatchInlineSnapshot(outputCustom)
    })

    it("returns custom component HTML with 'app' prefix (custom env)", () => {
      const viewsPath = join(import.meta.dirname, 'fixtures/components')

      const html = render('example2', {
        context: { text: 'Custom example' },
        env: configure(viewsPath),
        prefix: 'app'
      })

      expect(html).toMatchInlineSnapshot(outputCustom)
    })

    it('throws with missing component macro', () => {
      const renderHtml = () => render('example', { context })

      expect(() => renderHtml()).toThrowErrorMatchingInlineSnapshot(`
        "(unknown path)
          Template render error: (unknown path)
          Error: template not found: example/macro.njk"
      `)
    })
  })
})
