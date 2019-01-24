# Images

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/171).

## Quick start examples

### Images

[Preview the images component](https://nhsuk.github.io/nhsuk-frontend/components/images/index.html)

### HTML markup

```html
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis">
  <figcaption class="nhsuk-image__caption">
    Itchy, red, watering eyes
  </figcaption>
</figure>

<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis">
</figure>
```

### Nunjucks macro

```
{% from 'components/images/macro.njk' import image %}

{{ image({
  "src": "https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",
  "alt": "Picture of allergic conjunctivitis",
  "caption": "Itchy, red, watering eyes"
}) }}
```

## Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments:

| Name                    | Type     | Required  | Description             |
| ------------------------|----------|-----------|-------------------------|
| **src**                 | string   | Yes       | The source location of the image. |
| **alt**                 | string   | Yes       | The alt text of the image. |
| **caption**             | string   | No        | Optional caption text for the image. |
| **classes**             | string   | No        | Optional additional classes to add to the image container. Separate each class with a space. |
| **attributes**          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the image container. |
