import { outdent } from 'outdent'

import { inspect } from './inspect.mjs'

describe('Nunjucks filter: inspect', () => {
  it.each([
    {
      input: 'hello world',
      output: "'hello world'"
    },
    {
      input: [1, 'two', { three: 3 }],
      output: outdent`
        [
          1,
          'two',
          {
            three: 3
          }
        ]
      `
    },
    {
      input: {
        logo: { href: '#' },
        service: { text: 'Digital service manual', href: '#' }
      },
      output: outdent`
        {
          logo: {
            href: '#'
          },
          service: {
            text: 'Digital service manual',
            href: '#'
          }
        }
      `
    }
  ])("formats '$input' to '$output'", ({ input, output }) => {
    expect(inspect(input)).toEqual(output)
  })
})
