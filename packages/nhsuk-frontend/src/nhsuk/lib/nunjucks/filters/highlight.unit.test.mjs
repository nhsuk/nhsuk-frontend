import { highlight } from './highlight.mjs'

describe('Nunjucks filter: highlight', () => {
  it('skips code highlighting by default', () => {
    expect(highlight('hello <br> {{ "world" }}')).toContain(
      'hello &lt;br&gt; {{ &quot;world&quot; }}'
    )
  })

  it('applies code highlighting', () => {
    expect(highlight('hello <br> {{ "world" }}', 'html')).toContain(
      'hello <span class="nhsuk-code__tag">&lt;<span class="nhsuk-code__name">br</span>&gt;</span> {{ &quot;world&quot; }}'
    )
  })

  it('applies code highlighting (multiple languages)', () => {
    expect(highlight('hello <br> {{ "world" }}', ['html', 'njk'])).toContain(
      'hello <span class="nhsuk-code__tag">&lt;<span class="nhsuk-code__name">br</span>&gt;</span> </span><span class="nhsuk-code__tag">{{ <span class="nhsuk-code__string">&quot;world&quot;</span> }}'
    )
  })
})
