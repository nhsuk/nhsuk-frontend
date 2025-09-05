# Test if your HTML matches NHS.UK frontend

You can use our test fixtures to check you're outputting the same HTML that NHS.UK frontend uses, when you:

- create your own component macros (also called 'partials' or 'templates')
- [update NHS.UK frontend](../installation/staying-up-to-date.md)

## Using the HTML test files

If you [installed NHS.UK frontend with Node.js package manager (npm)](../installation/installing-with-npm.md), you can find the `fixtures.json` file for each component in the `node_modules/nhsuk-frontend/dist/nhsuk/components/COMPONENT-NAME/` folder, where `COMPONENT-NAME` is the name of the component.

For example, you can find the `fixtures.json` file for the button component in the `node_modules/nhsuk-frontend/dist/nhsuk/components/button/` folder:

```json5
{
  "name": "Button",
  "component": "button",
  "fixtures": [
    {
      "name": "default",
      "context": {
        "text": "Save and continue"
      },
      // ...
      "html": "<button class=\"nhsuk-button\"\n  data-module=\"nhsuk-button\"\n type=\"submit\">\n  Save and continue\n</button>"
    },
    {
      "name": "as a link",
      "context": {
        "text": "Link button",
        "href": "#"
      },
      // ...
      "html": "<a class=\"nhsuk-button\"\n  data-module=\"nhsuk-button\"\n href=\"#\" draggable=\"false\" role=\"button\">\n  Link button\n</a>"
    },
    // ...
  ]
}

```

Each object in the `fixtures` list is a different example of the component, where:

- `name` is the name of the example
- `context` is the parameters that generate this example's `html`
- `html` is the HTML that NHS.UK frontend outputs with these parameters

For each example, pass `context` into your own macro and check the generated HTML matches `html`.

If your HTML does not match exactly, you'll need to write your tests so they ignore known differences. For example your framework may add extra whitespace or attributes to your HTML.

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Test if your HTML matches GOV.UK Frontend](https://frontend.design-system.service.gov.uk/testing-your-html/) with a few minor adaptations.
