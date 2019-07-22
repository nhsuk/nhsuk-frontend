# Images

## Guidance

Find out more about the images component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/images).

## Quick start example

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

{{ image({
  "src": "https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",
  "alt": "Picture of allergic conjunctivitis" 
}) }}
```

### Nunjucks arguments

The images Nunjucks macro takes the following arguments:

| Name                    | Type     | Required  | Description             |
| ------------------------|----------|-----------|-------------------------|
| **src**                 | string   | Yes       | The source location of the image. |
| **alt**                 | string   | Yes       | The alt text of the image. |
| **caption**             | string   | No        | Optional caption text for the image. |
| **classes**             | string   | No        | Optional additional classes to add to the image container. Separate each class with a space. |
| **attributes**          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the image container. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
