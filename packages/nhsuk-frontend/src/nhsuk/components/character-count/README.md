# Character count

## Installation

See the [main README quick start guide](https://github.com/nhsuk/nhsuk-frontend#quick-start) for how to install this component.

## Guidance and examples

To learn more about the character count component and when to use it, visit the [design system in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/character-count) for guidance, examples and options.

## How characters are counted

The character count component counts **grapheme clusters** (user-perceived characters), not code points or code units. This ensures accurate character counting for:

- **Emoji and emoji sequences**: Emoji like 👋, 👋🏼 (with skin tone), and 👨‍👩‍👧‍👦 (family emoji) are each counted as a single character
- **Characters with combining marks**: Accented characters like é, ñ, and ü are counted correctly regardless of whether they're stored as a single code point or as a base character plus combining mark
- **Complex scripts**: Non-Latin scripts (Chinese, Japanese, Korean, Arabic, etc.) are counted accurately
- **Surrogate pairs**: Characters outside the Basic Multilingual Plane are counted as single characters

This counting method matches Python's `len()` function for Unicode strings, ensuring consistency between client-side (JavaScript) and server-side (Python) validation in `nhsuk-frontend-jinja`.

### Examples

```javascript
// Simple ASCII
"Hello" // 5 characters

// Emoji
"👋" // 1 character (not 2 code points)
"👋🏼" // 1 character (emoji with skin tone modifier)
"👨‍👩‍👧‍👦" // 1 character (family emoji sequence)

// Accented characters
"café" // 4 characters
"naïve" // 5 characters

// Mixed content
"Hello 👋" // 6 characters (5 letters + 1 space + 1 emoji)
```

### Browser support

The component uses `Intl.Segmenter` when available (Chrome 87+, Firefox 125+, Safari 17+, Edge 87+) for accurate grapheme cluster counting. For older browsers, it falls back to code point counting, which provides reasonable accuracy for most use cases.
