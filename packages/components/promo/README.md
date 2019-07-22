# Promo

## Quick start examples

### Promo

[Preview the promo component](https://nhsuk.github.io/nhsuk-frontend/components/promo/index.html)

#### HTML markup

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

#### Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo %}

{{ promo({
  "href": "https://www.nhs.uk",
  "heading": "Save a life: give blood",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```

---

### Promo with image

[Preview the promo with image component](https://nhsuk.github.io/nhsuk-frontend/components/promo/promo-with-image.html)

#### HTML markup

```html
<div class="nhsuk-promo">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <img class="nhsuk-promo__img" src="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg" alt="">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
      <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
    </div>
  </a>
</div>
```

#### Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo %}

{{ promo({
  "href": "https://www.nhs.uk",
  "imgURL": "https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg",
  "heading": "Save a life: give blood",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```

---

### Promo with no description

[Preview the promo with no description component](https://nhsuk.github.io/nhsuk-frontend/components/promo/promo-no-description.html)

#### HTML markup

```html
<div class="nhsuk-promo">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
    </div>
  </a>
</div>
```

#### Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo %}

{{ promo({
  "href": "https://www.nhs.uk",
  "heading": "Save a life: give blood"
}) }}
```

---

### Small promo

[Preview the small promo component](https://nhsuk.github.io/nhsuk-frontend/components/promo/promo-small.html)

#### HTML markup

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

#### Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo %}

{{ promo({
  "classes": "nhsuk-promo--small",
  "href": "https://www.nhs.uk",
  "heading": "Access your GP record",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```

---

### Promo group

[Preview the promo group component](https://nhsuk.github.io/nhsuk-frontend/components/promo/promo-group.html)

#### HTML markup

```html
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg" alt="">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg" alt="">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg" alt="">
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
        <img class="nhsuk-promo__img" src="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg" alt="">
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
        <img class="nhsuk-promo__img" src="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg" alt="">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    <div class="nhsuk-promo nhsuk-promo--small">
      <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
        </div>
      </a>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    <div class="nhsuk-promo nhsuk-promo--small">
      <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
        </div>
      </a>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo %}

<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    {{ promo({
      "classes": "nhsuk-promo--small",
      "href": "https://www.nhs.uk",
      "heading": "Save a life: give blood"
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    {{ promo({
      "classes": "nhsuk-promo--small",
      "href": "https://www.nhs.uk",
      "heading": "Save a life: give blood"
    }) }}
  </div>
</div>
```

---

### Nunjucks arguments

The promo Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **href**            | string   | Yes       | The value of the promo href attribute |
| **heading**         | string   | Yes       | The text heading of the promo |
| **headingLevel**    | integer  | No        | Optional heading level for the promo heading. Default: 3 |
| **imgURL**          | string   | No        | The URL of the image in the promo |
| **description**     | string   | No        | The text description of the promo |
| **classes**         | string   | No        | Optional additional classes to add to the promo. Separate each class with a space. For the small promo, use `nhsuk-promo--small` |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the promo. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
