import { highlight } from './highlight.mjs'

describe('Nunjucks filter: highlight', () => {
  it('skips code highlighting by default', () => {
    expect(highlight('hello <br> {{ "world" }}')).toContain(
      'hello &lt;br&gt; {{ &quot;world&quot; }}'
    )
  })
})
