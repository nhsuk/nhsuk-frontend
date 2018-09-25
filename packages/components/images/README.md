# Images

## Introduction

The image component is for the presentation of informative images.

## Guidance

Find out when to use the image component in the [Digital service manual]().

## Example

[Preview the image component]()

#### Markup

    <div class="nhsuk-c-image">
      <img alt="Picture of allergic conjunctivitis" src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg">
      <div class="nhsuk-c-image__caption">
        <p>Itchy, red, watering eyes</p>
      </div>
    </div>

#### Macro

    {% from 'components/images/macro.njk' import image %}

    {{ image('Picture of allergic conjunctivitis', 'https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg', 'Itchy, red, watering eyes') }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
