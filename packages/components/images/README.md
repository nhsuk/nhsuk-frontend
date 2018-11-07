# Image

Find out more about the image component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the image component]()

## HTML markup

```html
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" alt="Picture of allergic conjunctivitis"
    src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg"/>
  <figcaption class="nhsuk-image__caption">
    Itchy, red, watering eyes
  </figcaption>
</figure>
```

## Nunjucks macro

```html
{% from 'components/images/macro.njk' import image %}

{{ image({
  "alt": "Picture of allergic conjunctivitis",
  "src": "https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",
  "caption": "Itchy, red, watering eyes"
}) }}
```
