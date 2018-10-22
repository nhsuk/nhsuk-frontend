# Hero

Find out more about the hero component and when to use it in the  [NHS digital service manual]().

## Hero with heading and text

[Preview the hero with heading and text component]()

## HTML markup

    <section class="nhsuk-hero">
      <div class="nhsuk-width-container nhsuk-hero--border">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-two-thirds">
            <div class="nhsuk-page-heading">
              <h1 class="nhsuk-!-margin-bottom-3">We're here for you</h1>
              <p class="nhsuk-body-l nhsuk-!-margin-bottom-0">Helping you take control of your health and wellbeing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

## Nunjucks macro

    {% from 'components/hero/macro.njk' import hero %}

    {{ hero({
    "heading": "We're here for you",
    "text": "Helping you take control of your health and wellbeing."
    }) }}

## Hero with an image, heading and text

[Preview the hero with an image, heading and text component]()

## HTML markup

    <section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description" style="background-image: url('https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg');">
      <div class="nhsuk-hero__overlay">
        <div class="nhsuk-width-container nhsuk-hero--border">
          <div class="nhsuk-grid-row">
            <div class="nhsuk-grid-column-two-thirds">
              <div class="nhsuk-hero-content">
                <h1 class="nhsuk-!-margin-bottom-3">We're here for you</h1>
                <p class="nhsuk-body-l nhsuk-!-margin-bottom-0">Helping you take control of your health and wellbeing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

## Nunjucks macro

    {% from 'components/hero/macro.njk' import hero %}

    {{ hero({
    "heading": "We're here for you",
    "text": "Helping you take control of your health and wellbeing.",
    "imageURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg"
    }) }}

## Hero with an image only

[Preview the hero with an image only component]()

## HTML markup

    <section class="nhsuk-hero nhsuk-hero--image" style="background-image: url('https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg');">
      <div class="nhsuk-hero__overlay"></div>
    </section>

## Nunjucks macro

    {% from 'components/hero/macro.njk' import hero %}

    {{ hero({
    "imageURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg"
    }) }}
