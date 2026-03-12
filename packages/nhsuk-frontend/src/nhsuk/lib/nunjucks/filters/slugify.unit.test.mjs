import { slugify } from './slugify.mjs'

describe('Nunjucks filter: slugify', () => {
  it.each([
    {
      input: 'Example heading',
      output: 'example-heading'
    },
    {
      input: 'Example   heading',
      output: 'example-heading'
    },
    {
      input: 'Example: Heading',
      output: 'example-heading'
    },
    {
      input: 'Example - Heading',
      output: 'example-heading'
    },
    {
      input: 'Example -- Heading',
      output: 'example-heading'
    },
    {
      input: "Example's Heading",
      output: 'examples-heading'
    }
  ])("formats '$input' to '$output'", ({ input, output }) => {
    expect(slugify(input)).toEqual(output)
  })
})
