# Images

## Introduction

The image component is for the presentation of informative images.

## Guidance

Find out when to use the image component in the [Digital service manual]().

## Example

[Preview the image component]()

#### Markup

    <figure class="nhsuk-c-image">
      <img class="nhsuk-c-image__img" alt="Picture of allergic conjunctivitis" src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg">
      <figcaption class="nhsuk-c-image__caption">
        Itchy, red, watering eyes
      </figcaption>
    </figure>

#### Macro

    {{ image({
      "alt": "Picture of allergic conjunctivitis",
      "src": "https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",
      "caption": "Itchy, red, watering eyes"
    }) }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
