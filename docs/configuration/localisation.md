# Localise NHS.UK frontend

NHS.UK frontend uses English by default. You're responsible for providing any translations for any other language you need for your service.

There are three types of text you might want to translate into another language.

1. Text you pass to a component where there is no default text provided.
2. Text in the HTML for a component where an English version is included by default. For example, the licence and copyright information in the footer.
3. Text in the JavaScript for a component where parts of the user interface are built dynamically. For example, the text for the buttons in the Accordion component, or the count message in the Character Count component

## Changing the text you pass to a component

You're in control of this text and are responsible for localising it.

## Changing the text in the HTML for a component

You can use the Nunjucks macro options tables published on the design system in the NHS digital service manual to find the option you need to change the text. The conventions for these options are:

- `<camelCasedName>Text` for message injected as plain text
- `<camelCasedName>Html` for message injected as HTML
- using an object with `text` and/or `html` keys included

The `html` option takes precedence over `text` if both are present.

You can find the Nunjucks macro options by selecting the **Nunjucks** tab in the example box and then selecting the **Nunjucks macro options**.

If you're using the HTML directly, you can change the text used within the HTML.

## Changing text in the JavaScript for a component

If you're using the Nunjucks macro, look at the Nunjucks macro options table in the Design System to find the option you need to change the text.

If you're using the HTML directly, you can customise the text used in the JavaScript by passing configuration using data attributes.

Alternatively, you can [configure the component with JavaScript](./README.md#passing-javascript-configuration) at the point you initialise it or when using `initAll`.

The naming conventions for:

- Nunjucks macros are `<camelCasedName>Html`
- data attributes are `data-i18n.<kebab-cased-name>(.<pluralform>)`

JavaScript uses nested objects. For example:

```json5
{
  i18n: {
    camelCasedName: /* Text or object with plural forms */
  }
}
```

If your content contains [quotes or other reserved HTML characters](https://developer.mozilla.org/en-US/docs/Glossary/Character_reference), you'll need to escape those characters.

The component will output content as plain text, not HTML, to avoid [cross-site scripting attacks](https://owasp.org/www-community/attacks/xss/).

### Setting the locale for a component

For components that dynamically generate text, such as the character count, you should make sure that the locale for the component is set correctly.

The locale used by a component determines:

- how numbers are formatted, for example which character will be used for the thousands separator
- the pluralisation rules used

The component will determine its locale from the [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) on the element or from the closest parent element with a `lang` attribute. If none of the component's parent elements have a `lang` attribute, the component will use a default locale of `en`.

Setting the locale for the component does not automatically change the language of the text. You'll still need to pass the required text through one of the 3 configuration options described in the previous section.

### Understanding pluralisation rules

Different languages have different rules for pluralisation.

English only has 2 forms, singular and plural. Other languages often have more forms. For example, Welsh has 6 possible plural forms, the Romance languages (French, Spanish, Italian) have 3 and many East Asian languages (Chinese, Japanese, Malaysian) do not have any plural forms.

We follow the [Unicode Common Locale Data Repository classification](https://cldr.unicode.org/index/cldr-spec/plural-rules) and categorise these forms as: `zero`, `one`, `two`, `few`, `many` and `other`.
The forms for each language will differ depending on its pluralisation. For example,

- all languages use the `other` form
- some languages will require you to pass additional forms
- languages with no plural form only need the form `other`

You should use a professional translation service to make sure your translation is accurate and that you're using the correct pluralisation form. You can also check [the Unicode Common Locale Data Repository documentation for guidance on which of these forms your locale requires and what `few` and `many` might represent for it](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html).

When providing text with plural forms, you'll need to pass an object associating each plural category with the text for that form. If you do not provide the required plural form for the locale, the component will fall back to the "other" form and warn you in the browser console.

If you're looking to keep English messages and override only one of the plural forms (`one` or `other`), you can only provide that specific form and it will be merged with our defaults.

Our components will replace the `%{count}` placeholder with the number used for picking the plural category.

The following example shows how to provide pluralisation options using the different ways you can [configure components with JavaScript](./README.md#passing-javascript-configuration):

With Nunjucks

```njk
{{ characterCount({
  id: 'details',
  name: 'details',
  label: {
    html: 'Can you provide more details?'
  },
  maxlength: 1000,
  charactersUnderLimitText: {
    other: '%{count} characters to go',
    one: 'One character to go'
  },
  charactersOverLimitText: {
    one: 'One character too many'
  }
}) }}
{# The `other` key for `characterOverLimitText` will be our default #}
```

With data attributes

```html
<div
  data-module="nhsuk-character-count"
  data-i18n.characters-under-limit.other="%{count} characters to go"
  data-i18n.characters-under-limit.one="One character to go"
  data-i18n.characters-over-limit.one="One character too many"
>
  <!-- The `other` key for `characters-over-limit` will be our default -->
```

With JavaScript

```js
import { CharacterCount, createAll } from 'nhsuk-frontend'

// The same config will be used for all CharacterCount on the page
createAll(CharacterCount, {
  i18n: {
    charactersUnderLimit: {
      other: '%{count} characters to go',
      one: 'One character to go'
    },
    charactersOverLimit: {
      one: 'One character too many'
      // The `other` key for `characterOverLimit` will be our default
    }
  }
})
```

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Localise GOV.UK Frontend](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/) with a few minor adaptations.
