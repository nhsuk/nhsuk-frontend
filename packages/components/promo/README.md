# Promo

Find out more about the promo component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/176).

## Quick start examples

### Promo

[Preview the promo component](https://nhsuk.github.io/nhsuk-frontend/components/promo.html)

### HTML markup

```html
<div class="nhsuk-promo">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
      <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
    </div>
  </a>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "https://www.nhs.uk",
  "heading": "Save a life: give blood",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```

### Promo with image

[Preview the promo with image component](https://nhsuk.github.io/nhsuk-frontend/components/promo-with-image.html)

### HTML markup

```html
<div class="nhsuk-promo">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt="">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
      <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
    </div>
  </a>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "https://www.nhs.uk",
  "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
  "heading": "Save a life: give blood",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```
           
### Promo with no description

[Preview the promo with no description component](https://nhsuk.github.io/nhsuk-frontend/components/promo-with-image.html)

### HTML markup

```html
<div class="nhsuk-promo">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
    </div>
  </a>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "https://www.nhs.uk",
  "heading": "Save a life: give blood"
}) }}
```

### Small promo

[Preview the small promo component](https://nhsuk.github.io/nhsuk-frontend/components/promo-small.html)

### HTML markup

```html
<div class="nhsuk-promo nhsuk-promo--small">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Access your GP record</h3>
      <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
    </div>
  </a>
</div>
```

## Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "classes": "nhsuk-promo--small",
  "href": "https://www.nhs.uk",
  "heading": "Access your GP record",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```

### Promo group

[Preview the promo group component](https://nhsuk.github.io/nhsuk-frontend/components/promo-group.html)

## HTML markup

```html
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt="">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt="">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt="">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
</div>
```
