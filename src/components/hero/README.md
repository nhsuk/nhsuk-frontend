# Hero

## Introduction

A hero component can be used to have a title and introduction header section within the page.

## Guidance

Find out when to use the hero component in the [Digital service manual]().

## Example

[Preview the hero component]()

### Hero

#### Markup

    <section class="nhsuk-hero">
      <div class="nhsuk-o-width-container">
        <div class="nhsuk-o-main-wrapper nhsuk-hero-container">
          <div class="nhsuk-o-grid">
            <div class="nhsuk-o-grid__item nhsuk-o-grid__item--two-thirds">
              <div class="nhsuk-page-heading">
                <h1>We're here for you</h1>
                <p>Helping you take control of your health and wellbeing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

#### Macro

    {% from 'components/hero/macro.njk' import hero %}

    {{ hero('We're here for you', '<p>Helping you take control of your health and wellbeing.</p>') }}

### Hero with image

#### Markup

    <section class="nhsuk-hero nhsuk-hero--image" style="background-image: url('https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-1.jpg');">
      <div class="nhsuk-hero__overlay"></div>
    </section>

#### Macro

    {% from 'components/hero/macro.njk' import heroImage %}

    {{ heroImage("https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-1.jpg") }}

### Hero with image and content

#### Markup

    <section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description" style="background-image: url('https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-1.jpg');">
      <div class="nhsuk-hero__overlay">
        <div class="nhsuk-hero__container">
          <div class="nhsuk-o-grid">
            <div class="nhsuk-o-grid__item nhsuk-o-grid__item--two-thirds">
              <div class="nhsuk-hero-content">
                <h1 role="text">We're here for you</h1>
                <p>Helping you take control of your health and wellbeing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

#### Macro

    {% from 'components/hero/macro.njk' import heroImageContent %}

    {{ heroImageContent("We're here for you", "<p>Helping you take control of your health and wellbeing.</p>", "https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-1.jpg") }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
