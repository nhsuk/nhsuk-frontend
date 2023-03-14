# Hero

## Quick start examples

### Hero with heading and content

[Preview the hero with heading and content component](https://nhsuk.github.io/nhsuk-frontend/components/hero/index.html)

#### HTML markup

```html
<section class="nhsuk-hero">
  <div class="nhsuk-width-container nhsuk-hero--border">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
        <div class="nhsuk-hero__wrapper">
          <h1 class="nhsuk-u-margin-bottom-3">We’re here for you</h1>
          <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">Helping you take control of your health and wellbeing.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Nunjucks macro

```
{% from 'components/hero/macro.njk' import hero %}

{{ hero({
"heading": "We’re here for you",
"text": "Helping you take control of your health and wellbeing."
}) }}
```

---

### Hero with image, heading and content

[Preview the hero with image, heading and content component](https://nhsuk.github.io/nhsuk-frontend/components/hero/hero-image-content.html)

#### HTML markup

```html
<section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description" style="background-image: url('https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg');">
  <div class="nhsuk-hero__overlay">
    <div class="nhsuk-width-container">
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
          <div class="nhsuk-hero-content">
            <h1 class="nhsuk-u-margin-bottom-3">We’re here for you</h1>
            <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">Helping you take control of your health and wellbeing.</p>
            <span class="nhsuk-hero__arrow" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Nunjucks macro

```
{% from 'components/hero/macro.njk' import hero %}

{{ hero({
  "heading": "We’re here for you",
  "text": "Helping you take control of your health and wellbeing.",
  "imageURL": "https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
}) }}
```

---

### Hero with image only

[Preview the hero with image only component](https://nhsuk.github.io/nhsuk-frontend/components/hero/hero-image.html)

#### HTML markup

```html
<section class="nhsuk-hero nhsuk-hero--image" style="background-image: url('https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg');">
  <div class="nhsuk-hero__overlay">
  </div>
</section>
```

#### Nunjucks macro

```
{% from 'components/hero/macro.njk' import hero %}

{{ hero({
  "imageURL": "https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
}) }}
```

---

### Nunjucks arguments

The hero macro takes the following arguments:

| Name           | Type   | Required | Description                                                                                 |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------------------- |
| **heading**    | string | No       | Text heading of the hero component.                                                         |
| **text**       | string | No       | Text content of the hero component.                                                         |
| **imageURL**   | string | No       | URL of the image of the hero component.                                                     |
| **classes**    | string | No       | Optional additional classes to add to the hero container. Separate each class with a space. |
| **attributes** | object | No       | Any extra HTML attributes (for example data attributes) to add to the hero container.       |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
