import { env } from '../environment.mjs'
import { highlight } from './highlight.mjs'

describe('Nunjucks filter: highlight', () => {
  it('skips code highlighting by default', () => {
    const input = 'hello <br> {{ "world" }}'
    const output = highlight.call({ env }, input)

    expect(output.valueOf()).toContain(
      'hello &lt;br&gt; {{ &quot;world&quot; }}'
    )
  })

  it('applies code highlighting', () => {
    const input = 'hello <br> {{ "world" }}'
    const output = highlight.call({ env }, input, 'html')

    expect(output.valueOf()).toContain(
      'hello <span class="nhsuk-code__tag">&lt;<span class="nhsuk-code__name">br</span>&gt;</span> {{ &quot;world&quot; }}'
    )
  })

  it('applies code highlighting (multiple languages)', () => {
    const input = 'hello <br> {{ "world" }}'
    const output = highlight.call({ env }, input, ['html', 'njk'])

    expect(output.valueOf()).toContain(
      'hello <span class="nhsuk-code__tag">&lt;<span class="nhsuk-code__name">br</span>&gt;</span> </span><span class="nhsuk-code__tag">{{ <span class="nhsuk-code__string">&quot;world&quot;</span> }}'
    )
  })
})
