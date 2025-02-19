const { defineConfig } = require('html-validate')

/**
 * HTML validation config
 *
 * {@link https://html-validate.org/rules/}
 */
module.exports = defineConfig({
  extends: ['html-validate:recommended', 'html-validate:document'],
  rules: {
    // Allow components to set boolean attributes with empty values
    // e.g. using `disabled: true` for <button disabled="disabled">
    'attribute-boolean-style': 'off',

    // Allow for multiple buttons in the same form to have the same name
    'form-dup-name': ['error', { shared: ['radio', 'checkbox', 'submit'] }],

    // Allow inline styles for testing purposes
    'no-inline-style': 'off',

    // Allow long page titles with appended "- NHS.UK frontend"
    'long-title': 'off',

    // Allow implicit type="button" (without attribute):
    'no-implicit-button-type': 'off',

    // Allow headings to begin from <h2> etc rather than <h1>
    'heading-level': 'off',

    // Allow for explicit roles on regions that have implicit roles
    // We do this to better support AT with older versions of IE that
    // have partial support for HTML5 semantic elements
    'no-redundant-role': 'off',

    // More hassle than it's worth 👾
    'no-trailing-whitespace': 'off',

    // Allow use of roles where there are native elements that would give
    // us that role automatically, e.g. <button> instead of
    // <a href="/" draggable="false" role="button">
    'prefer-native-element': 'off',

    // Allow optional subresource integrity (SRI)
    'require-sri': 'off',

    // Allow optional submit buttons in <form> wrapped examples
    'wcag/h32': 'off'
  }
})
