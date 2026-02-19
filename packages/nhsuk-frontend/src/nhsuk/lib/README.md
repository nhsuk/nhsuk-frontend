# NHS.UK frontend Node.js API

Import the NHS.UK frontend Node.js API to render components without Nunjucks views.

## Component rendering

To render the `input()` component macro from NHS.UK frontend:

```mjs
import { components } from 'nhsuk-frontend/lib'

const html = components.render('input', {
  context: {
    label: {
      text: 'Mobile phone number'
    },
    name: 'mobile',
    type: 'tel'
  }
})
```

To render a custom component `appExample()` macro from your application:

```mjs
import { components, nunjucks } from 'nhsuk-frontend/lib'

const viewsPath = [
  'app/views',
  'app/views/components'
]

const html = components.render('input', {
  context: {
    text: 'Custom example'
  },
  prefix: 'app',
  env: nunjucks.configure(viewsPath)
})
```
