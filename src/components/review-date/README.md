# Review date

## Introduction

The review date component shows when a page was last updated or reviewed.

## Guidance

Find out when to use the review date component in the [Digital service manual]().

## Example

[Preview the review date component]()

#### Markup

    <div class="nhsuk-c-review-date">
      <p class="nhsuk-body-s">
        Page last reviewed: 12/02/2016<br>
        Next review due: 01/02/2019
      </p>
    </div>

#### Macro

    {% from 'components/review-date/macro.njk' import reviewDate %}

    {{ reviewDate('12/02/2016', '01/02/2019') }}
