# Review date

Find out more about the review date component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the review date component]()

## HTML markup

    <div class="nhsuk-c-review-date">
      <p class="nhsuk-body-s">
        Page last reviewed: <time>12/02/2016</time><br>
        Next review due: <time>01/02/2019</time>
      </p>
    </div>

## Nunjucks macro

    {% from 'components/review-date/macro.njk' import reviewDate %}

    {{ reviewDate({'lastReview': '12/02/2016', 'nextReview': '01/02/2019'}) }}
