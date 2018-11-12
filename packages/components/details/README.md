# Details

Find out more about the action link component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/162).

## Dependencies

For this component to work, you need to make sure you include the required JavaScript. You can either include the 
compiled JavaScript for all components `nhsuk.min.js` or the individual component JavaScript `details.js`.

## Quick start examples

### Details

[Preview the details component](https://nhsuk.github.io/nhsuk-frontend/components/details.html)

### HTML markup

```html
<details class="nhsuk-details">
  <summary class="nhsuk-details__summary" role="button" aria-controls="details-content-0" aria-expanded="false">
    <span class="nhsuk-details__summary-text">
      Where can I find my NHS number?
    </span>
  </summary>
  <div class="nhsuk-details__text" id="details-content-0" aria-hidden="true">
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

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

{% from 'components/details/macro.njk' import details %}

```
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

### Expander

[Preview the expander component](https://nhsuk.github.io/nhsuk-frontend/components/expander.html)

### HTML markup

```html
<details class="nhsuk-details nhsuk-expander">
  <summary class="nhsuk-details__summary" role="button" aria-controls="details-content-1" aria-expanded="false">
    <span class="nhsuk-details__summary-text">
      Opening times
    </span>
  </summary>
  <div class="nhsuk-details__text" id="details-content-1" aria-hidden="true">
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

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

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

#### Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name         | Type     | Required  | Description |
| -------------|----------|-----------|-------------|
| text         | string   | Yes       | Text to be displayed on the details component. |
| HTML         | string   | Yes       | HTML content to be displayed within the details component |
| classes      | string   | No        | Optional additional classes to add to the anchor tag. Separate each class with a space. |
| attributes   | object   | No        | Any extra HTML attributes (for example data attributes) to add to the anchor tag. |

### Expander group

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/expander-group.html)

### HTML markup

```html
<div class="nhsuk-expander-group">
  <details class="nhsuk-details nhsuk-expander">
    <summary class="nhsuk-details__summary" role="button" aria-controls="details-content-2" aria-expanded="false">
      <span class="nhsuk-details__summary-text">
      How to measure your blood glucose levels
      </span>
    </summary>
    <div class="nhsuk-details__text" id="details-content-2" aria-hidden="true">
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
    <summary class="nhsuk-details__summary" role="button" aria-controls="details-content-3" aria-expanded="false">
      <span class="nhsuk-details__summary-text">
      When to check your blood glucose level
      </span>
    </summary>
    <div class="nhsuk-details__text" id="details-content-3" aria-hidden="true">
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

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

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

#### Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name         | Type     | Required  | Description |
| -------------|----------|-----------|-------------|
| text         | string   | Yes       | Text to be displayed on the expander component. |
| HTML         | string   | Yes       | HTML content to be displayed within the expander component |
| classes      | string   | No        | Optional additional classes to add to the anchor tag. Separate each class with a space. |
| attributes   | object   | No        | Any extra HTML attributes (for example data attributes) to add to the anchor tag. |
