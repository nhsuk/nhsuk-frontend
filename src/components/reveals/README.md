# Reveals

## Introduction

The reveal component allows the page to be easier to scan by letting users reveal information only if they need it.

## Guidance

Find out when to use the reveal component in the [Digital service manual]().

## Example

[Preview the reveal component]()

#### Markup

    <details class="nhsuk-c-details" role="group">
      <summary class="nhsuk-c-summary" data-analytics="summary" role="button" aria-controls="details-content-0" aria-expanded="false">
        <span class="nhsuk-c-summary__title">When to check your blood glucose level</span>
      </summary>
      <div class="nhsuk-c-details__content" id="details-content-0" aria-hidden="true">
        <p>Try to check your blood:</p>

        <ul>
            <li>before meals</li>
            <li>2 to 3 hours after meals</li>
            <li>before, during (take a break) and after exercise</li>
        </ul>

        <p>This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels.</p>
      </div>
    </details>

#### Macro

    {% from 'components/reveal/macro.njk' import reveal %}

    {{ reveal('When to check your blood glucose level', '
      <p>Try to check your blood:</p>

      <ul>
          <li>before meals</li>
          <li>2 to 3 hours after meals</li>
          <li>before, during (take a break) and after exercise</li>
      </ul>

      <p>This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels.</p>
    ') }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
