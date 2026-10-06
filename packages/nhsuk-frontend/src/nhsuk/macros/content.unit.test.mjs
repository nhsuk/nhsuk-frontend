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

    it('renders text option without escaping when already escaped', () => {
      const input = '<strong>abc</strong>'
      const expected = '<strong>abc</strong>'

      // Render directly otherwise nunjucks `renderMacro()` will stringify
      // safe `is escaped` instances into plain `is mapping` objects
      const output = nunjucks.renderString(outdent`
        {%- from "nhsuk/macros/content.njk" import nhsukContent %}
        {{- nhsukContent({
          text: "${input}" | safe
        }) -}}
      `)

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
        description: 'content slot "before"',
        context: {
          text: 'What is your date of birth?',
          slots: {
            before: {
              html: '<em>Before</em>'
            }
          }
        },
        expected: outdent`
          <em>Before</em>
          What is your date of birth?
        `
      },
      {
        description: 'content slot "before" only',
        context: {
          slots: {
            before: {
              html: '<em>Before</em>'
            }
          }
        },
        expected: outdent`
          <em>Before</em>
        `
      },
      {
        description: 'content slot "start"',
        context: {
          text: 'What is your date of birth?',
          slots: {
            start: {
              html: '<em>Start</em>'
            }
          }
        },
        expected: outdent`
          <em>Start</em>What is your date of birth?
        `
      },
      {
        description: 'content slot "end"',
        context: {
          text: 'What is your date of birth?',
          slots: {
            end: {
              html: '<em>End</em>'
            }
          }
        },
        expected: outdent`
          What is your date of birth?<em>End</em>
        `
      },
      {
        description: 'content slot "after"',
        context: {
          text: 'What is your date of birth?',
          slots: {
            after: {
              html: '<em>After</em>'
            }
          }
        },
        expected: outdent`
          What is your date of birth?
          <em>After</em>
        `
      },
      {
        description: 'content slot "after" only',
        context: {
          slots: {
            after: {
              html: '<em>After</em>'
            }
          }
        },
        expected: outdent`

          <em>After</em>
        `
      }
    ])('renders $description', ({ context, expected }) => {
      expect(renderMacro(context)).toBe(expected)
    })

    it.each([
      {
        description: 'visually hidden text',
        context: {
          text: 'Change',
          visuallyHidden: 'details for Zadie Munroe'
        },
        expected: outdent`
          Change<span class="nhsuk-u-visually-hidden"> details for Zadie Munroe</span>
        `
      },
      {
        description: 'visually hidden text (alias)',
        context: {
          text: 'Change',
          visuallyHiddenText: 'details for Zadie Munroe'
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
        description: 'visually hidden text only with content slots',
        context: {
          visuallyHidden: 'details for Zadie Munroe',
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          Start–<span class="nhsuk-u-visually-hidden">details for Zadie Munroe</span>–End
          [After]
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
        description: 'visually hidden text "before" only',
        context: {
          visuallyHidden: {
            text: 'Error:',
            placement: 'before'
          }
        },
        expected: outdent`
          <span class="nhsuk-u-visually-hidden">Error:</span>
        `
      },
      {
        description: 'visually hidden text "before" with content slots',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: 'Error:',
            placement: 'before'
          },
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          <span class="nhsuk-u-visually-hidden">Error:</span>
          Start–Enter your date of birth–End
          [After]
        `
      },
      {
        description: 'visually hidden text "before" only with content slots',
        context: {
          visuallyHidden: {
            text: 'Error:',
            placement: 'before'
          },
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          <span class="nhsuk-u-visually-hidden">Error:</span>
          Start––End
          [After]
        `
      },
      {
        description: 'visually hidden text "start"',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: 'Error:',
            placement: 'start'
          }
        },
        expected: outdent`
          <span class="nhsuk-u-visually-hidden">Error: </span>Enter your date of birth
        `
      },
      {
        description: 'visually hidden text "start" with content slots',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: 'Error:',
            placement: 'start'
          },
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          Start–<span class="nhsuk-u-visually-hidden">Error: </span>Enter your date of birth–End
          [After]
        `
      },
      {
        description: 'visually hidden text "start" only',
        context: {
          visuallyHidden: {
            text: 'details for Zadie Munroe',
            placement: 'start'
          }
        },
        expected: outdent`
          <span class="nhsuk-u-visually-hidden">details for Zadie Munroe</span>
        `
      },
      {
        description: 'visually hidden text "start" only with content slots',
        context: {
          visuallyHidden: {
            text: 'details for Zadie Munroe',
            placement: 'start'
          },
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          Start–<span class="nhsuk-u-visually-hidden">details for Zadie Munroe</span>–End
          [After]
        `
      },
      {
        description: 'visually hidden text "end"',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: '(Karen Francis)',
            placement: 'end'
          }
        },
        expected: outdent`
          Enter your date of birth<span class="nhsuk-u-visually-hidden"> (Karen Francis)</span>
        `
      },
      {
        description: 'visually hidden text "end" only',
        context: {
          visuallyHidden: {
            text: '(Karen Francis)',
            placement: 'end'
          }
        },
        expected: outdent`
          <span class="nhsuk-u-visually-hidden">(Karen Francis)</span>
        `
      },
      {
        description: 'visually hidden text "end" with content slots',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: '(Karen Francis)',
            placement: 'end'
          },
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          Start–Enter your date of birth<span class="nhsuk-u-visually-hidden"> (Karen Francis)</span>–End
          [After]
        `
      },
      {
        description: 'visually hidden text "end" only with content slots',
        context: {
          visuallyHidden: {
            text: '(Karen Francis)',
            placement: 'end'
          },
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          Start–<span class="nhsuk-u-visually-hidden">(Karen Francis)</span>–End
          [After]
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
      },
      {
        description: 'visually hidden text "after" only',
        context: {
          visuallyHidden: {
            text: '(Karen Francis)',
            placement: 'after'
          }
        },
        expected: outdent`
          <span class="nhsuk-u-visually-hidden">(Karen Francis)</span>
        `
      },
      {
        description: 'visually hidden text "after" with content slots',
        context: {
          text: 'Enter your date of birth',
          visuallyHidden: {
            text: '(Karen Francis)',
            placement: 'after'
          },
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          Start–Enter your date of birth–End
          <span class="nhsuk-u-visually-hidden">(Karen Francis)</span>
          [After]
        `
      },
      {
        description: 'visually hidden text "after" only with content slots',
        context: {
          visuallyHidden: {
            text: '(Karen Francis)',
            placement: 'after'
          },
          slots: {
            before: '[Before]',
            start: 'Start–',
            end: '–End',
            after: '[After]'
          }
        },
        expected: outdent`
          [Before]
          Start––End
          <span class="nhsuk-u-visually-hidden">(Karen Francis)</span>
          [After]
        `
      }
    ])('renders $description', ({ context, expected }) => {
      expect(renderMacro(context)).toBe(expected)
    })

    it.each([
      {
        description: 'visually hidden text slot "start" only',
        context: {
          visuallyHidden: {
            slots: {
              start: {
                html: '<em>Start</em>'
              }
            }
          }
        }
      },
      {
        description: 'visually hidden text slot "end" only',
        context: {
          visuallyHidden: {
            slots: {
              end: {
                html: '<em>End</em>'
              }
            }
          }
        }
      },
      {
        description: 'content slot "start" only',
        context: {
          slots: {
            start: {
              html: '<em>Start</em>'
            }
          }
        }
      },
      {
        description: 'content slot "end" only',
        context: {
          slots: {
            end: {
              html: '<em>End</em>'
            }
          }
        }
      },
      {
        description: 'content or visually hidden text slot "start"',
        context: {
          visuallyHidden: {
            slots: {
              start: {
                html: '<em>Start</em>'
              }
            }
          },
          slots: {
            start: {
              html: '<em>Start</em>'
            }
          }
        }
      },
      {
        description: 'content or visually hidden text slot "end"',
        context: {
          visuallyHidden: {
            slots: {
              end: {
                html: '<em>End</em>'
              }
            }
          },
          slots: {
            end: {
              html: '<em>End</em>'
            }
          }
        }
      },
      {
        description: 'content or visually hidden text slots "start" and "end"',
        context: {
          visuallyHidden: {
            slots: {
              start: {
                html: '<em>Start</em>'
              },
              end: {
                html: '<em>End</em>'
              }
            }
          },
          slots: {
            start: {
              html: '<em>Start</em>'
            },
            end: {
              html: '<em>End</em>'
            }
          }
        }
      }
    ])('does not render $description', ({ context }) => {
      expect(renderMacro(context)).toBe('')
    })
  })
})

/**
 * @import { MacroRenderOptions } from '#lib'
 */
