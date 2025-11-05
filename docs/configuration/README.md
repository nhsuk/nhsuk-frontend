# Configure NHS.UK frontend

You can configure the components in NHS.UK frontend to customise their behaviour or to [localise their JavaScript to use a language other than English](./localisation.md).

You can configure a component by:

- [setting Nunjucks macro options](#setting-nunjucks-macro-options)
- [passing JavaScript configuration](#passing-javascript-configuration)
- [adding HTML data attributes](#adding-html-data-attributes)

Configuration passed through data attributes in the HTML or Nunjucks macro options will take precedence over any JavaScript configuration.

To learn more about how configuration is passed from Nunjucks macros to HTML data attributes, see advanced examples in [the localisation options](./localisation.md).

## Setting Nunjucks macro options

If you're using the Nunjucks macros, you can visit the [design system in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components) for guidance, examples and options.

## Passing JavaScript configuration

The examples below follow our recommended [Import JavaScript using a bundler](./javascript.md#import-javascript-using-a-bundler) approach and demonstrate how to:

- [configure instances of specific components using the `createAll` function](#configure-instances-of-specific-components-using-the-createall-function)
- [configure all components using the `initAll` function](#configure-all-components-using-the-initall-function)
- [check for JavaScript errors in the browser console](#javascript-errors-in-the-browser-console)

### Configure instances of specific components using the `createAll` function

You can pass a configuration object into `createAll`'s second argument when creating an instance of a component in JavaScript:

```
import { CharacterCount, createAll } from 'nhsuk-frontend'

createAll(CharacterCount, {
  maxlength: 500,
  i18n: {
    charactersAtLimit: 'No characters left',
    charactersUnderLimit: {
      other: '%{count} characters to go',
      one: '%{count} character to go'
    }
  }
})
```

Read the [JavaScript API Reference](./javascript-api-reference.md) for the list of options in each component configuration.

### Configure all components using the `initAll` function

You can pass configuration for components when initialising NHS.UK frontend using the `initAll` function.

You can do this by including key-value pairs of camel-cased component names with their configuration options:

```mjs
import { initAll } from 'nhsuk-frontend'

initAll({
  characterCount: {
    maxlength: 500,
    i18n: {
      charactersAtLimit: 'No characters left'
    }
  }
})
```

### JavaScript errors in the browser console

Error messages from components can be logged in the browser console when HTML elements are not found, or to explain why they failed to initialise.

For example, when:

- NHS.UK frontend is not supported in the current browser
- Component templates have missing changes from our release notes
- Component JavaScript configuration does not match our documentation

If our inline JavaScript snippet from [Importing JavaScript](./javascript.md) was not added to the top of the `<body>` section you'll see this error:

```console
SupportError: NHS.UK frontend initialised without `<body class="nhsuk-frontend-supported">` from template `<script>` snippet
```

You should check your application works without errors or some components will not work correctly.

## Adding HTML data attributes

If you're using HTML, you can pass configuration by adding data attributes to the component's outermost element (the element that has the `data-module` attribute). This is how our Nunjucks macros forward the configuration to the JavaScript components in the browser. Data attributes use kebab-case.

Some configuration options are grouped under a namespace to keep related options together. For example, [the localisation options](./localisation.md) are grouped under the `i18n` namespace. When using these options, include the namespace as a prefix followed by a period as part of the attribute name.

For options accepting object values, you'll need to set one attribute for each key of that object. Suffix the attribute name (including any namespace) with a period and the name of the key in the object.

This example shows the opening tag of a character count component with some configuration options including:

- a specific number of characters (non-namespaced configuration)
- a new message for when users reach the specified number of characters (namespaced configuration)
- two plural forms for when users are under the specified limit of characters (namespaced configuration + object value)

```html
<div
  data-module="nhsuk-character-count"
  data-maxlength="500"
  data-i18n.characters-at-limit="No characters left"
  data-i18n.characters-under-limit.other="%{count} characters to go"
  data-i18n.characters-under-limit.one="%{count} character to go"
>
```

If your configuration contains [quotes or other reserved HTML characters](https://developer.mozilla.org/en-US/docs/Glossary/Character_reference), you'll need to escape those characters.

Configuration is read from data attributes when the component is initialised. Changes to the data attributes made after the component has been initialised will have no effect on the behaviour of the component.

You'll need to convert the JavaScript configuration options into kebab-case when using data attributes in HTML.

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Configure components](https://frontend.design-system.service.gov.uk/configure-components/) with a few minor adaptations.
