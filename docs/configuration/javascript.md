# Import JavaScript

NHS.UK frontend JavaScript must be run with `<script type="module">`.

This protects older browsers, including all versions of Internet Explorer, from running modern JavaScript that it does not support. Read about our [browser support](../contributing/browser-support.md) for more information.

## Before you start

You'll need to add the following to the top of the `<body>` section of your page template if you're not [using our Nunjucks macros](./nunjucks.md).

This snippet adds the `.nhsuk-frontend-supported` class in supported browsers:

```html
<script>document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' nhsuk-frontend-supported' : '');</script>
```

Next, to import the JavaScript from NHS.UK frontend, you can either:

- add the JavaScript file to your HTML
- import the JavaScript into your own JavaScript file using a bundler

## Add the JavaScript file to your HTML

If you decide to add the JavaScript to your HTML, you can do one of the following:

- set up your routing so requests for the JavaScript file are served from `node_modules/nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.js`
- copy the `node_modules/nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.js` file into your application

Then import the JavaScript file before the closing `</body>` tag of your HTML page or page template, and run the `initAll` function to initialise all the components.

```html
<body class="nhsuk-template__body">
  <script>document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' nhsuk-frontend-supported' : '');</script>

  <!-- // ... -->

  <script type="module" src="/javascripts/nhsuk-frontend.min.js"></script>
  <script type="module">
    import { initAll } from '/javascripts/nhsuk-frontend.min.js'
    initAll()
  </script>
</body>
```

Read about how we log [JavaScript errors in the browser console](./README.md#javascript-errors-in-the-browser-console) to check NHS.UK frontend has been set up correctly.

## Import JavaScript using a bundler

If you decide to import using a bundler like [Rollup](https://rollupjs.org/) or [webpack](https://webpack.js.org/), the bundled JavaScript files must be added using `<script type="module">` in your HTML:

```html
<script type="module" src="/javascripts/application.min.js"></script>
```

We encourage the use of ECMAScript (ES) modules, but you should check your bundler does not unnecessarily downgrade modern JavaScript for unsupported browsers.

### Import individual components

To improve how quickly your service's pages load in browsers, import only the JavaScript components you need. You can also [configure each component](./README.md#passing-javascript-configuration) when instantiating them.

```mjs
import { createAll, Button, Checkboxes } from 'nhsuk-frontend'

// Initialise all button components
createAll(Button, {
  preventDoubleClick: true
})

// Initialise all checkboxes components
createAll(Checkboxes)
```

Or where necessary, single instances of individual components only:

```mjs
import { Button, Checkboxes } from 'nhsuk-frontend'

const $button = document.querySelector('.app-button')
const $checkboxes = document.querySelector('.app-checkboxes')

// Initialise single button component
new Button($button, {
  preventDoubleClick: true
})

// Initialise single checkboxes component
new Checkboxes($checkboxes)
```

#### Handling errors during instantiation

By default, both `createAll` and `initAll` catch errors thrown by components during their initialisation and log them in the console. This makes sure components further down the page still get initialised after an error. You may still want to respond to errors as the components initialise, such as by notifying an error monitoring service, without [manually initialising each component](#import-individual-components).

To respond to errors being thrown while components are being initialised you can use a function as the third argument to `createAll` or the `{ onError }` option for `initAll`. If a component throws an error, the function will be called and will receive:

- the error that was thrown
- an object with some more context

The context object will contain the following properties:

- `component`: The component class being initialised
- `element`: The element the component is being initialised on
- `config`: The configuration used for initialisation

Handling errors from `createAll`:

```mjs
import { createAll, Button } from 'nhsuk-frontend'

createAll(Button, { preventDoubleClick: true }, (error, context) => {
  const { Component, element, config } = context

  // Handle the error here, for example send it to an error monitoring service
})
```

Handling errors from `initAll`:

```mjs
import { initAll } from 'nhsuk-frontend'

initAll({
  onError(error, context) {
    // Handle the error here, for example send it to an error monitoring service
  }
})
```

You can also handle errors for manually initialised components:

```mjs
import { Button } from 'nhsuk-frontend'

const $buttons = document.querySelectorAll(
  `[data-module="${Button.moduleName}"]`
)

$buttons.forEach(($button) => {
  try {
    new Button($button)
  } catch (error) {
    // Handle the error here, for example send it to an error monitoring service
  }
})
```

You must check that your application works without errors, or some components will not work correctly.

### Import and initialise all components using the initAll function

If you need to import all of NHS.UK frontend's components, then run the `initAll` function to initialise them:

```mjs
import { initAll } from 'nhsuk-frontend'
initAll()
```

## Initialise only part of a page

If you update a page with new markup, for example a modal dialogue box, you can initialise components on that part of the page only.

### Initialise individual components on part of a page

Pass the scope into `createAll`'s third argument to initialise individual components:

```mjs
import { createAll, Button, Checkboxes } from 'nhsuk-frontend'

const $element = document.querySelector('.app-modal')

createAll(Button, { preventDoubleClick: true }, $element)
createAll(Checkboxes, undefined, $element)
```

### Initialise all components on part of a page

Run `initAll` with a `{ scope }` option to initialise the components on part of a page:

```mjs
import { initAll } from 'nhsuk-frontend'

const $element = document.querySelector('.app-modal')

if ($element) {
  initAll({ scope: $element })
}
```

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Import JavaScript](https://frontend.design-system.service.gov.uk/import-javascript/) with a few minor adaptations.
