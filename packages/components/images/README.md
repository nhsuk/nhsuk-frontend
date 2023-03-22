# Images

## Guidance

Find out more about the images component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/images).

## Quick start example

[Preview the images component](https://nhsuk.github.io/nhsuk-frontend/components/images/index.html)

### HTML markup

```html
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis" sizes="(min-width: 1020px) 320px, (min-width: 768px) 50vw, 100vw" srcset="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-640x427.jpg 640w, https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-767x511.jpg 767w">
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
  "sizes": "(min-width: 1020px) 320px, (min-width: 768px) 50vw, 100vw",
  "srcset": "https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-640x427.jpg 640w, https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-767x511.jpg 767w",
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

| Name           | Type   | Required | Description                                                                                  |
| -------------- | ------ | -------- | -------------------------------------------------------------------------------------------- |
| **src**        | string | Yes      | The source location of the image.                                                            |
| **alt**        | string | Yes      | The alt text of the image.                                                                   |
| **caption**    | string | No       | Optional caption text for the image.                                                         |
| **sizes**      | string | No       | A list of screen sizes for the browser to load the correct image from the srcset images.     |
| **srcset**     | string | No       | A list of image source URLs and their respective sizes. Separate each image with a comma.    |
| **classes**    | string | No       | Optional additional classes to add to the image container. Separate each class with a space. |
| **attributes** | object | No       | Any extra HTML attributes (for example data attributes) to add to the image container.       |
