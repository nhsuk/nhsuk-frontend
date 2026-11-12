import { unindent } from './unindent.mjs'

describe('Nunjucks filter: unindent', () => {
  it.each([
    {
      input: 'Example text',
      output: 'Example text'
    },
    {
      input: `
      Example text
      `,
      output: `
Example text
`
    },
    {
      input: `
        Example text
      `,
      output: `
  Example text
`
    },
    {
      input: `
          Example text
      `,
      output: `
    Example text
`
    },
    {
      input: `
        <p>
          Example text
        </p>
      `,
      output: `
  <p>
    Example text
  </p>
`
    },
    {
      input: `
      <p>
        Example text
      </p>
      `,
      output: `
<p>
  Example text
</p>
`
    },
    {
      input: `
<p>
  Example text
</p>
`,
      output: `
<p>
  Example text
</p>
`
    },
    {
      input: `
<br>
<p>Example text</p>
<br>
`,
      output: `
<br>
<p>Example text</p>
<br>
`
    },
    {
      input: `
        <p>
      -   Example text 1
      +   Example text 2
        </p>
      `,
      output: `
  <p>
-   Example text 1
+   Example text 2
  </p>
`
    },
    {
      input: `
          <p>
        -   Example text 1
        +   Example text 2
          </p>
      `,
      output: `
    <p>
  -   Example text 1
  +   Example text 2
    </p>
`
    }
  ])('removes smallest indentation from all lines', ({ input, output }) => {
    expect(unindent(input)).toEqual(output)
  })
})
