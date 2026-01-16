# Character count

## Installation

See the [main README quick start guide](https://github.com/nhsuk/nhsuk-frontend#quick-start) for how to install this component.

## Guidance and examples

To learn more about the character count component and when to use it, visit the [design system in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/character-count) for guidance, examples and options.

## How characters are counted

By default, the character count component uses **code point counting**, which matches Python's `len()` function for Unicode strings. This ensures consistency between client-side (JavaScript) and server-side (Python) validation in `nhsuk-frontend-jinja`, preventing mismatched error messages.

You can optionally enable **grapheme cluster counting** (user-perceived characters) by setting `useGraphemeCounting: true` in the component configuration. This provides more accurate counting for:

- **Emoji and emoji sequences**: Emoji like 👋, 👋🏼 (with skin tone), and 👨‍👩‍👧‍👦 (family emoji) are each counted as a single character
- **Characters with combining marks**: Accented characters like é, ñ, and ü are counted correctly regardless of whether they're stored as a single code point or as a base character plus combining mark
- **Complex scripts**: Non-Latin scripts (Chinese, Japanese, Korean, Arabic, etc.) are counted accurately

**Important**: Only enable grapheme counting if your server-side validation also uses grapheme counting. Otherwise, you may see different counts between client and server validation messages.

### Examples

**Default behavior (code point counting - matches Python `len()`):**

```javascript
// Simple ASCII
"Hello" // 5 characters

// Emoji (counted as code points)
"👋" // 1 character
"👋🏼" // 2 characters (base emoji + skin tone modifier)
"👨‍👩‍👧‍👦" // 7 characters (multiple code points)

// Accented characters
"café" // 4 characters
"naïve" // 5 characters

// Mixed content
"Hello 👋" // 7 characters (5 letters + 1 space + 1 emoji)
```

**With grapheme counting enabled (`useGraphemeCounting: true`):**

```javascript
// Emoji (counted as grapheme clusters)
"👋" // 1 character
"👋🏼" // 1 character (emoji with skin tone modifier)
"👨‍👩‍👧‍👦" // 1 character (family emoji sequence)
```

### Configuration

#### Default behavior (code point counting)

By default, the component uses code point counting to match Python's `len()` behavior:

```javascript
new CharacterCount($root, {
  maxlength: 200
})
```

This ensures server-side consistency with `nhsuk-frontend-jinja` validation.

#### Enabling grapheme cluster counting

To use grapheme cluster counting (only if your server also uses it):

```javascript
new CharacterCount($root, {
  maxlength: 200,
  useGraphemeCounting: true
})
```

Or via data attribute:

```html
<div data-module="nhsuk-character-count" 
     data-maxlength="200" 
     data-use-grapheme-counting="true">
```

### Browser support

The default code point counting works across all supported browsers and matches Python's `len()` behavior, ensuring consistency with server-side validation.

When `useGraphemeCounting` is enabled, the component uses `Intl.Segmenter` when available (Baseline 2024 browsers: Chrome 87+, Firefox 125+, Safari 17+, Edge 87+) for accurate grapheme cluster counting. For browsers that support ES6 modules but not `Intl.Segmenter` (such as Safari 11-16, Firefox 60-124, and older Chrome/Edge versions), it automatically falls back to code point counting.
