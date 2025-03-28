# Images

## Guidance

Find out more about the images component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/images).

## Quick start example

[Preview the images component](https://nhsuk.github.io/nhsuk-frontend/components/images/index.html)

### HTML markup

```html
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg" alt="Close-up of a person’s tummy showing a number of creases in the skin under their belly button. Shown on light brown skin." sizes="(max-width: 768px) 100vw, 66vw" srcset="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w">
  <figcaption class="nhsuk-image__caption">
    Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time.
  </figcaption>
</figure>
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg" alt="Close-up of a person’s tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.">
</figure>
```

### Nunjucks macro

```
{% from 'components/images/macro.njk' import image %}

{{ image({
  src: "https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg",
  sizes: "(max-width: 768px) 100vw, 66vw",
  srcset: "https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w",
  alt: "Close-up of a person’s tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
  caption: "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
}) }}

{{ image({
  "src": "https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg",
  "alt": "Close-up of a person’s tummy showing a number of creases in the skin under their belly button. Shown on light brown skin."
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
