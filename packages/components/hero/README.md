# Hero

Find out more about the hero component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/170).

## Quick start examples

### Hero with heading and content

[Preview the hero with heading and content component](https://nhsuk.github.io/nhsuk-frontend/components/hero.html)

### HTML markup

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

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/hero/macro.njk' import hero %}

{{ hero({
"heading": "We’re here for you",
"text": "Helping you take control of your health and wellbeing."
}) }}
```

### Hero with image, heading and content

[Preview the hero with image, heading and content component](https://nhsuk.github.io/nhsuk-frontend/components/hero-image-content.html)

### HTML markup

```html
<section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description"  style="background-image: url('https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg');" >
  <div class="nhsuk-hero__overlay">
    <div class="nhsuk-width-container nhsuk-hero--border">
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
          <div class="nhsuk-hero-content">
            <h1 class="nhsuk-u-margin-bottom-3">We’re here for you</h1>
            <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">Helping you take control of your health and wellbeing.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/hero/macro.njk' import hero %}

{{ hero({
  "heading": "We’re here for you",
  "text": "Helping you take control of your health and wellbeing.",
  "imageURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg"
}) }}
```

### Hero with image only

[Preview the hero with image only component](https://nhsuk.github.io/nhsuk-frontend/components/hero-image-content.html)

### HTML markup

```html
<section class="nhsuk-hero nhsuk-hero--image"  style="background-image: url('https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg');" >
  <div class="nhsuk-hero__overlay">
  </div>
</section>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/hero/macro.njk' import hero %}

{{ hero({
  "imageURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg"
}) }}
```
