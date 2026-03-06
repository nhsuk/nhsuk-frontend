import { outdent } from 'outdent'

import { env } from '../environment.mjs'

import { getNunjucksCode } from './get-nunjucks-code.mjs'

describe('Nunjucks global: getNunjucksCode', () => {
  it('gets Nunjucks code for component', () => {
    const nunjucksCode = getNunjucksCode.call({ env }, 'label', {
      context: {
        text: 'What is your full name?',
        size: 'l'
      }
    })

    expect(nunjucksCode).toBe(outdent`
      {% from "label/macro.njk" import label -%}

      {{ label({
        text: "What is your full name?",
        size: "l"
      }) }}
    `)
  })

  it('gets Nunjucks code for component using call block', () => {
    const nunjucksCode = getNunjucksCode.call({ env }, 'label', {
      context: {
        size: 'l'
      },
      callBlock: 'What is your full name?'
    })

    expect(nunjucksCode).toBe(outdent`
      {% from "label/macro.njk" import label -%}

      {% call label({
        size: "l"
      }) %}

      What is your full name?

      {% endcall %}
    `)
  })
})
