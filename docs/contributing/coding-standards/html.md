# HTML

Use valid HTML5 where possible.

Use HTML according to its purpose. Use elements for what they have been created for. This is important for accessibility, reuse and code efficiency reasons.

## Syntax

- Use soft tabs with two spaces - they're the only way to guarantee code renders the same in any environment.
- Nested elements should be indented once (two spaces).
- Always use double quotes, never single quotes, on attributes.
- Don't include a trailing slash in self-closing elements - the HTML5 spec says they're optional.
- Don’t omit optional closing tags (e.g. `</li>` or `</body>`).

## Attribute order

HTML attributes should come in this particular order for easier reading of code.

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value`
- `title`, `alt`
- `role`, `aria-*`

Classes make for great reusable components, so they come first. Ids are more specific and should be used sparingly (e.g., for in-page bookmarks), so they come second.
