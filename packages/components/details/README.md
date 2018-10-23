# Details

Find out more about the details component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/).

## Dependencies

For this component to work, you need to make sure you include the required JavaScript. You can either include the 
compiled JavaScript for all components `nhsuk.js` or the individual component JavaScript `details.js`.

## Details example

[Preview the details component]()

## Details HTML markup

    <details class="nhsuk-details " role="group">
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

## Details nunjucks macro

    {% from 'components/details/macro.njk' import details %}

    {{ details({
      "heading": "Where can I find my NHS number?",
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

## Expander example

[Preview the expander component]()

## Expander HTML markup

    <details class="nhsuk-details nhsuk-c-expander" role="group">
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

## Expander nunjucks macro

    {% from 'components/details/macro.njk' import details %}

    {{ details({
      "class": "nhsuk-c-expander",
      "heading": "Opening times",
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

## Expander group example

[Preview the expander group component]()

## Expander group HTML markup

    <div class="nhsuk-c-expander-group">
      <details class="nhsuk-details nhsuk-c-expander" role="group">
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

      <details class="nhsuk-details nhsuk-c-expander" role="group">
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

## Expander group nunjucks macro

    {% from 'components/details/macro.njk' import details %}

    <div class="nhsuk-c-expander-group">
      {{ details({
        "class": "nhsuk-c-expander",
        "heading": "How to measure your blood glucose levels",
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
        "class": "nhsuk-c-expander",
        "heading": "When to check your blood glucose level",
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
