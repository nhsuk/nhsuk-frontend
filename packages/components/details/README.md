# Details

Find out more about the details component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the details component]()

## HTML markup

    <details class="nhsuk-details" role="group">
      <summary class="nhsuk-details__summary">
        <span class="nhsuk-details__summary-text">
          When to check your blood glucose level
        </span>
      </summary>
      <div class="nhsuk-details__text">
        <p>This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels.</p>
      </div>
    </details>

## Nunjucks macro

    {% from 'components/details/macro.njk' import details %}

    {{ details({
      "heading": "When to check your blood glucose level",
      "html": "<p>This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels.</p>"
    }) }}
