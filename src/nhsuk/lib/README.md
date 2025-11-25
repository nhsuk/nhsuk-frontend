# NHS.UK frontend Node.js API

Import the NHS.UK frontend Node.js API to render components without Nunjucks views.

## Component rendering

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
