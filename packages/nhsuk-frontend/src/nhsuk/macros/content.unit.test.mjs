import { outdent } from 'outdent'

import { nunjucks } from '#lib'

describe('Macro: Content', () => {
  /**
   * @param {MacroRenderOptions['context']} [context]
   */
  function renderMacro(context) {
    return nunjucks.renderMacro('nhsukContent', 'nhsuk/macros/content.njk', {
      context
    })
  }

  describe('nhsukContent', () => {
    it('renders empty string by default', () => {
      expect(renderMacro()).toBe('')
      expect(renderMacro({})).toBe('')
      expect(renderMacro(undefined)).toBe('')
      expect(renderMacro(true)).toBe('')
      expect(renderMacro(false)).toBe('')
      expect(renderMacro('')).toBe('')
    })

    it('renders text', () => {
      const input = 'abc'
      const expected = 'abc'

      const output = renderMacro(input)
      expect(output).toBe(expected)
    })

    it('renders text with escaping', () => {
      const input = 'A&E waiting times'
      const expected = 'A&amp;E waiting times'

      const output = renderMacro(input)
      expect(output).toBe(expected)
    })

    it('renders text option with escaping', () => {
      const input = {
        text: 'A&E waiting times'
      }

      const expected = 'A&amp;E waiting times'

      const output = renderMacro(input)
      expect(output).toBe(expected)
    })

    it('renders text option as number', () => {
      const input = {
        text: 123
      }

      const expected = '123'

      const output = renderMacro(input)
      expect(output).toBe(expected)
    })

    it('renders number', () => {
      const input = 123
      const expected = '123'

      const output = renderMacro(input)
      expect(output).toBe(expected)
    })

    it('renders number when zero', () => {
      const input = 0
      const expected = '0'

      const output = renderMacro(input)
      expect(output).toBe(expected)
    })

    it('renders HTML without escaping', () => {
      const input = '<strong>abc</strong>'
      const expected = '<strong>abc</strong>'

      // Render directly otherwise nunjucks `renderMacro()` will stringify
      // safe `is escaped` instances into plain `is mapping` objects
      const output = nunjucks.renderString(outdent`
        {%- from "nhsuk/macros/content.njk" import nhsukContent %}
        {{- nhsukContent("${input}" | safe) -}}
      `)

      expect(output).toBe(expected)
    })

    it('renders HTML option without escaping', () => {
      const input = {
        html: '<strong>abc</strong>'
      }

      const expected = '<strong>abc</strong>'

      const output = renderMacro(input)
      expect(output).toBe(expected)
    })

    it('renders HTML via call block without escaping', () => {
      const input = '<strong>abc</strong>'
      const expected = '<strong>abc</strong>'

      // Render directly otherwise nunjucks `renderMacro()` will stringify
      // safe `is escaped` instances into plain `is mapping` objects
      const output = nunjucks.renderString(outdent`
        {%- from "nhsuk/macros/content.njk" import nhsukContent %}
        {%- call nhsukContent() %}${input}{% endcall %}
      `)

      expect(output).toBe(expected)
    })

    it.each([
      {
        description: 'visually hidden text',
        context: {
          text: 'Change',
          visuallyHidden: ' details for Zadie Munroe'
        },
        expected: outdent`
          Change<span class="nhsuk-u-visually-hidden"> details for Zadie Munroe</span>
        `
      },
      {
        description: 'visually hidden text (alias)',
        context: {
          text: 'Change',
          visuallyHiddenText: ' details for Zadie Munroe'
        },
        expected: outdent`
          Change<span class="nhsuk-u-visually-hidden"> details for Zadie Munroe</span>
        `
      },
      {
        description: 'visually hidden text only',
        context: {
          visuallyHidden: 'details for Zadie Munroe'
        },
        expected: outdent`
          <span class="nhsuk-u-visually-hidden">details for Zadie Munroe</span>
        `
      },
      {
        description: 'visually hidden text "before"',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: 'Error:',
            placement: 'before'
          }
        },
        expected: outdent`
          <span class="nhsuk-u-visually-hidden">Error:</span>
          Enter your date of birth
        `
      },
      {
        description: 'visually hidden text "start"',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: 'Error: ',
            placement: 'start'
          }
        },
        expected: outdent`
          <span class="nhsuk-u-visually-hidden">Error: </span>Enter your date of birth
        `
      },
      {
        description: 'visually hidden text "end"',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: ' (Karen Francis)',
            placement: 'end'
          }
        },
        expected: outdent`
          Enter your date of birth<span class="nhsuk-u-visually-hidden"> (Karen Francis)</span>
        `
      },
      {
        description: 'visually hidden text "after"',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: '(Karen Francis)',
            placement: 'after'
          }
        },
        expected: outdent`
          Enter your date of birth
          <span class="nhsuk-u-visually-hidden">(Karen Francis)</span>
        `
      }
    ])('renders $description', ({ context, expected }) => {
      expect(renderMacro(context)).toBe(expected)
    })
  })
})

/**
 * @import { MacroRenderOptions } from '#lib'
 */
