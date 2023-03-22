# Details

## Guidance

Find out more about the details component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/details).

## Dependencies

For this component to be accessible and compatible with older browsers, include the required polyfill JavaScript. You can either include the compiled JavaScript for all components or just the polyfill JavaScript `details.js`.

## Quick start examples

### Details

[Preview the details component](https://nhsuk.github.io/nhsuk-frontend/components/details/index.html)

#### HTML markup

```html
<details class="nhsuk-details">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
    Where can I find my NHS number?
    </span>
  </summary>
  <div class="nhsuk-details__text">
    <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
    <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
    <ul>
      <li>prescriptions</li>
      <li>test results</li>
      <li>hospital referral letters</li>
      <li>appointment letters</li>
      <li>your NHS medical card</li>
    </ul>
    <p>Ask your GP practice for help if you can't find your NHS number.</p>
  </div>
</details>
```

#### Nunjucks macro

```
{% from 'components/details/macro.njk' import details %}

{{ details({
  "text": "Where can I find my NHS number?",
  "HTML": "
  <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
  <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
  <ul>
    <li>prescriptions</li>
    <li>test results</li>
    <li>hospital referral letters</li>
    <li>appointment letters</li>
    <li>your NHS medical card</li>
  </ul>
  <p>Ask your GP practice for help if you can't find your NHS number.</p>
  "
}) }}
```

---

### Expander

[Preview the expander component](https://nhsuk.github.io/nhsuk-frontend/components/details/expander.html)

#### Guidance

Find out more about the expander component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/expander).

#### HTML markup

```html
<details class="nhsuk-details nhsuk-expander">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
    Opening times
    </span>
  </summary>
  <div class="nhsuk-details__text">
    <table>
      <tbody>
        <tr>
          <th><strong>Day of the week</strong></th>
          <th><strong>Opening hours</strong></th>
        </tr>
        <tr>
          <th>Monday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Tuesday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Wednesday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Thursday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Friday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Saturday</th>
          <td>9am to 1pm</td>
        </tr>
        <tr>
          <th>Sunday</th>
          <td>Closed</td>
        </tr>
      </tbody>
    </table>
  </div>
</details>
```

#### Nunjucks macro

```
{% from 'components/details/macro.njk' import details %}

{{ details({
  "classes": "nhsuk-expander",
  "text": "Opening times",
  "HTML": "
  <table>
    <tbody>
      <tr>
        <th><strong>Day of the week</strong></th>
        <th><strong>Opening hours</strong></th>
      </tr>
      <tr>
        <th>Monday</th>
        <td>9am to 6pm</td>
      </tr>
      <tr>
        <th>Tuesday</th>
        <td>9am to 6pm</td>
      </tr>
      <tr>
        <th>Wednesday</th>
        <td>9am to 6pm</td>
      </tr>
      <tr>
        <th>Thursday</th>
        <td>9am to 6pm</td>
      </tr>
      <tr>
        <th>Friday</th>
        <td>9am to 6pm</td>
      </tr>
      <tr>
        <th>Saturday</th>
        <td>9am to 1pm</td>
      </tr>
      <tr>
        <th>Sunday</th>
        <td>Closed</td>
      </tr>
    </tbody>
  </table>"
}) }}
```

---

### Expander group

[Preview the expander group component](https://nhsuk.github.io/nhsuk-frontend/components/details/expander-group.html)

#### HTML markup

```html
<div class="nhsuk-expander-group">
  <details class="nhsuk-details nhsuk-expander">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
      How to measure your blood glucose levels
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <p>Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better.</p>
      <p>You would have been given:</p>
      <ul>
        <li>a blood glucose metre</li>
        <li>small needles called lancets</li>
        <li>a plastic pen to hold the lancest</li>
        <li>small test strips</li>
      </ul>
    </div>
  </details>
  <details class="nhsuk-details nhsuk-expander">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
      When to check your blood glucose level
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <p>Try to check your blood:</p>
      <ul>
        <li>before meals</li>
        <li>2 to 3 hours after meals</li>
        <li>before, during (take a break) and after exercise</li>
      </ul>
      <p>This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels.</p>
    </div>
  </details>
</div>
```

#### Nunjucks macro

```
{% from 'components/details/macro.njk' import details %}

<div class="nhsuk-expander-group">
  {{ details({
    "classes": "nhsuk-expander",
    "text": "How to measure your blood glucose levels",
    "HTML": "
    <p>Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better.</p>
    <p>You would have been given:</p>
    <ul>
      <li>a blood glucose metre</li>
      <li>small needles called lancets</li>
      <li>a plastic pen to hold the lancest</li>
      <li>small test strips</li>
    </ul>
    "
  }) }}
  {{ details({
    "classes": "nhsuk-expander",
    "text": "When to check your blood glucose level",
    "HTML": "
    <p>Try to check your blood:</p>
    <ul>
      <li>before meals</li>
      <li>2 to 3 hours after meals</li>
      <li>before, during (take a break) and after exercise</li>
    </ul>
    <p>This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels.</p>
    "
  }) }}
</div>
```

---

### Nunjucks arguments

The details Nunjucks macro takes the following arguments:

| Name       | Type    | Required | Description                                                                             |
| ---------- | ------- | -------- | --------------------------------------------------------------------------------------- |
| text       | string  | Yes      | Text to be displayed on the expander component.                                         |
| HTML       | string  | Yes      | HTML content to be displayed within the expander component                              |
| id         | string  | false    | Id to add to the details element.                                                       |
| open       | boolean | false    | If true, details element will be expanded.                                              |
| classes    | string  | No       | Optional additional classes to add to the anchor tag. Separate each class with a space. |
| attributes | object  | No       | Any extra HTML attributes (for example data attributes) to add to the anchor tag.       |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
